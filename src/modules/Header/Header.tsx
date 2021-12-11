import React, {memo} from 'react';
import {THeaderProps} from "./types";

const Header = ({start, children, end}: THeaderProps): JSX.Element => {
    return (
        <div className='header'>
            <div className='header__start'>
                {!!start && (
                    <div>
                        {start}
                    </div>
                )}
                <div>
                    LOGO
                </div>
            </div>
            <div>
                {!!children && (
                    <div>
                        {children}
                    </div>
                )}
            </div>
            {!!end && (
                <div>
                    {end}
                </div>
            )}
        </div>
    );
};

export default memo(Header);
