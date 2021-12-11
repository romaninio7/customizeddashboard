import React, {memo} from 'react';
import {TSideMenuProps} from "./types";

const SideMenu = ({component, children}: TSideMenuProps): JSX.Element => {
    return (
        <div className='side-menu'>
            {!!component && (
                <div className='side-menu__left'>
                    {component}
                </div>
            )}
            {!!children && (
                <div className='side-menu__right'>
                    {children}
                </div>
            )}
        </div>
    );
};

export default memo(SideMenu);
