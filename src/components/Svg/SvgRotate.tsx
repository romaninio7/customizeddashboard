import React, {memo} from "react";
import Svg from "./Svg";
import {cls} from "utils";
import {TSvgRotateProps} from "./types";

const SvgRotate = React.memo(({direction, children, viewBox}: TSvgRotateProps) => {
    return (
        <Svg
            viewBox={viewBox}
            classname={cls('', {modifiers: {[direction]: true}})}
        >
            {children}
        </Svg>
    )
})

export default memo(SvgRotate)
