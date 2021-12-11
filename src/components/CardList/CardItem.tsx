import React, {memo, useCallback} from 'react';
import {handleLayoutAdd, useDispatch, handleWidgetAdd} from "stores";
import {Button, EIconColor, EIconSize, EIconType, Icon} from "components";
import {TCardItemProps} from "./types";
import {widgetsMetricsIcons} from "../../helpers/constants/widget.constants";
import {useNavigate} from "react-router-dom";
import {ERoutePath as path} from "routes";
import {generateId} from "utils";


const CardItem = ({id, title, description, category}:TCardItemProps) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleAddClick = useCallback(e => {
        e && e.preventDefault()
        e && e.stopPropagation()
        const itemId = generateId()
        dispatch(handleLayoutAdd(itemId, id))
        dispatch(handleWidgetAdd(itemId, id))
        navigate(path.DASHBOARD, {replace: true})
    }, [dispatch, id, navigate])

    return (
        <div
            className="card__item"
            onClick={handleAddClick}
        >
            <div className="card__item__button-container">
                <Button onClick={handleAddClick}>
                    <div className="card__item__button">
                        <Icon
                            type={EIconType.Plus}
                            size={EIconSize.SMALL}
                            color={EIconColor.WHITE}
                        />
                    </div>
                </Button>
            </div>
            <div className="card__item__title">
                <div className="card__item__title__icon">
                    <Icon
                        type={widgetsMetricsIcons[category].icon}
                        size={EIconSize.SMALL}
                        color={EIconColor.GRAY}
                    />
                </div>
                {title}
            </div>
            <div className="card__item__description">
                {`${id} - ${description}`}
            </div>
        </div>
    );
};

export default memo(CardItem);
