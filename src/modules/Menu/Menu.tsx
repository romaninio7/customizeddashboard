import React, {memo, useCallback, useEffect, useRef, useState} from 'react';
import {useHover} from "hooks";
import {cls} from "utils";
import {handleMenuSet, loadMenuStateFromLocal, useDispatch, useSelector} from 'stores';
import {TMenuProps} from "./types";

const MenuItem = memo((): JSX.Element => {
    const dispatch = useDispatch()
    const isMenu = useSelector(({controller}) => controller.menu)
    const menuRef = useRef()
    const isHover = useHover(menuRef)
    const [hovered, setHovered] = useState(false)

    const handleMenuShow = useCallback(() => {
        if (isMenu) return;
        if (isHover) {
            setHovered(true)
        } else {
            const t = setTimeout(() => {
                setHovered(false)
                clearTimeout(t)
            }, 200)
        }
    }, [isHover, isMenu])

    const handleLoadMenuState = useCallback(() => {
        const isMenu = loadMenuStateFromLocal()
        dispatch(handleMenuSet(isMenu))
    }, [dispatch])

    useEffect(() => {
        handleMenuShow()
    }, [handleMenuShow])

    useEffect(() => {
        handleLoadMenuState()
    }, [handleLoadMenuState])

    return (
        <div
            ref={menuRef}
            className={cls('menu__container', {modifiers: {show: isMenu}})}
        >
            <div className={cls('menu__container__inner', {modifiers: {hovered}})}>
                Menu
            </div>
        </div>
    )
})

const Menu = ({children}: TMenuProps): JSX.Element => {
    return (
        <div className="menu">
            <MenuItem/>
            <div className="menu__content">
                {!!children && (
                    <div className="menu__content__main">
                        {children}
                    </div>
                )}
            </div>
        </div>
    );
};

export default memo(Menu);
