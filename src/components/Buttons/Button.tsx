import React, {memo, useCallback} from "react";
import {EButtonName, EButtonType, TButtonProps} from "./types";
import {cls} from "utils";

const Button = ({
                    onClick,
                    children,
                    type = EButtonType.DEFAULT,
                    disabled,
                    ariaLabel = EButtonName.DEFAULT
                }: TButtonProps): JSX.Element => {

    const handleClick = useCallback(e => {
        e && e.stopPropagation()
        e && e.preventDefault()
        onClick && onClick()
    }, [onClick])

    return (
        <button
            aria-label={ariaLabel}
            disabled={disabled}
            onClick={handleClick}
            className={cls('buttons__main', {
                modifiers: {
                    [type]: !!type,
                    disabled: !!disabled,
                }
            })}
        >
            {children}
        </button>
    )
}

export default memo(Button)
