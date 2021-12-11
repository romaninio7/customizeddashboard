import React, {forwardRef} from 'react';
import GridItem from './GridItem'
import {TGridItemContainerProps} from "./types";

const GridItemContainer = forwardRef<HTMLDivElement, TGridItemContainerProps>(
    ({
        item,
         style,
         className,
         children,
         ...rest
     },
     ref) => {
        return (
            <div
                style={style}
                className={className} {...rest}
                ref={ref}
                {...rest}
            >
                <GridItem {...item} style={style} {...rest}/>
                {!!children && children}
            </div>
        );
    })

export default GridItemContainer;
