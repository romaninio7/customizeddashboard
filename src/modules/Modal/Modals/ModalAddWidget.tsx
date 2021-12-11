import React, {memo, useCallback, useEffect, useMemo, useState} from 'react';
import ModalContainer from "./ModalContainer";
import {SideMenu} from 'modules'
import {CardList, EIconColor, EIconType, Icon, Input, Navigation} from "components";
import {widgets, widgetsMetricsGroups} from "helpers/constants";
import {TNavigationBarProps} from "../types";
import {TWidgetsMetrics} from "../../../helpers/constants/widget.constants";
import {ELocalKey, loadInputFromLocal, loadTabFromLocal, saveToLocal} from "stores";

const NavigationBar = memo(({valueTab, valueInput, onTabChange, onInputChange}: TNavigationBarProps) => {
    const handleTabChange = useCallback(v => {
        onTabChange && onTabChange(v)
    }, [onTabChange])

    const handleInputChange = useCallback(v => {
        onInputChange && onInputChange(v)
    }, [onInputChange])

    return (
        <div className="modal-add-widget__left">
            <div className="modal-add-widget__left__navigation">
                <Navigation
                    value={valueTab}
                    onClick={handleTabChange}
                    data={widgetsMetricsGroups}
                />
            </div>
            <div>
                <Input
                    clear
                    value={valueInput}
                    onChange={handleInputChange}
                    iconStart={
                        <Icon
                            type={EIconType.Search}
                            color={EIconColor.GRAY}
                        />
                    }
                />
            </div>
        </div>
    )
})

const ModalAddWidget = (): JSX.Element => {
    const [valueTab, setValueTab] = useState<TWidgetsMetrics["value"]>(null)
    const [valueInput, setValueInput] = useState('')

    const handleTabChange = useCallback(v => {
        setValueTab(v)
        saveToLocal(ELocalKey.ADD_TAB, v)
    }, [])

    const handleInputChange = useCallback(v => {
        saveToLocal(ELocalKey.ADD_INPUT, v)
        setValueInput(v)
    }, [])

    const sortedWidget = useMemo(() => {
        if (!valueTab && !valueInput) return widgets
        if (!valueTab && valueInput) {
            return widgets.filter(item => item.title.toLowerCase().includes(valueInput.toLowerCase()))
        }
        if (valueTab && !valueInput) {
            return widgets.filter(item => item.category === valueTab)
        }
        const tabWidgets = widgets.filter(item => item.category === valueTab)
        return tabWidgets.filter(item => item.title.toLowerCase().includes(valueInput.toLowerCase()))
    }, [valueTab, valueInput])

    const handleSetDefaultState = useCallback(() => {
        const tab = loadTabFromLocal()
        const input = loadInputFromLocal()
        setValueTab(tab)
        setValueInput(input)
    }, [])

    useEffect(() => {
        handleSetDefaultState()
    }, [handleSetDefaultState])

    return (
        <ModalContainer>
            <SideMenu
                component={
                    <NavigationBar
                        valueTab={valueTab}
                        valueInput={valueInput}
                        onTabChange={handleTabChange}
                        onInputChange={handleInputChange}
                    />
                }
            >
                <div className="modal-add-widget">
                    <CardList items={sortedWidget}/>
                </div>
            </SideMenu>
        </ModalContainer>
    );
};

export default memo(ModalAddWidget);
