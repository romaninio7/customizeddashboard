import React, {memo, useCallback, useMemo} from 'react';
import {TNavigationItemProps} from "./types";
import {cls} from "utils";
import {EIconColor, EIconSize, Icon} from "components";

const NavigationItem = ({name, value, icon, onClick, active}: TNavigationItemProps) => {

    const handleClick = useCallback(e => {
        e && e.preventDefault()
        e && e.stopPropagation()
        onClick && onClick({value, name})
    }, [onClick, value, name])

    const iconColor = useMemo(() => {
        return active ? EIconColor.WHITE : EIconColor.BLUE
    }, [active])


    return (
        <div
            onClick={handleClick}
            className={cls('navigation__item', {modifiers: {active}})}
        >
            {!!icon && (
                <div className="navigation__item__icon">
                    <Icon
                        type={icon}
                        size={EIconSize.SMALL}
                        color={iconColor}
                    />
                </div>
            )}
            {name}
        </div>
    );
};

export default memo(NavigationItem);
