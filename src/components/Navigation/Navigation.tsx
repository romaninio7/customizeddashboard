import React, {memo, useCallback} from 'react';
import {TNavigationBarProps} from "./types";
import NavigationItem from "./NavigationItem";

const Navigation = ({data, onClick, value}: TNavigationBarProps) => {

    const isActive = useCallback(currentValue => {
        return currentValue === value
    }, [value])

    const handleClick = useCallback(({value}) => {
        const active = isActive(value)
        if (active) {
            onClick && onClick(null)
            return;
        }
        onClick && onClick(value)
    }, [onClick, isActive])

    return (
        <ul className="navigation">
            {data.map(item => (
                <li key={item.name}>
                    <NavigationItem
                        {...item}
                        active={isActive(item.value)}
                        onClick={handleClick}
                    />
                </li>
            ))}
        </ul>
    );
};

export default memo(Navigation);
