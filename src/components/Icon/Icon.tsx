import React, {memo} from "react";
import {EIconColor, EIconSize, TIcon} from "./types";
import {cls} from "utils";

const Icon = ({
                  type: Type,
                  color = EIconColor.BLUE,
                  size = EIconSize.SMALL
              }: TIcon): JSX.Element => {
    return (
        <span
            className={cls('icon', {
                modifiers: {
                    [color]: !!color,
                    [size]: !!size,
                }
            })}
        >
            <Type/>
        </span>
    );
};

export default memo(Icon)
