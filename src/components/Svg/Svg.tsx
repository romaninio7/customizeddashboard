import React, {memo} from 'react';
import {IIconSvgProps} from "./types";
import {cls} from "utils";

const Svg = ({svg, classname, children, ...rest}: IIconSvgProps) => {
    if (children) {
        return (
            <svg className={cls(`svg${classname ? ' ' + classname : ''}`)} {...rest}>
                {children}
            </svg>
        );
    }

    return <span
        className='svg'
        dangerouslySetInnerHTML={{__html: svg}}
    />;
};

export default memo(Svg)
