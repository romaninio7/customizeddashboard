import React, {memo, useCallback} from "react";
import {Button} from "components/index";
import {Icon} from "components/index";
import {EButtonName, EButtonType, TIconsButtonProps} from "./types";

const IconButton = ({
                        onClick,
                        type,
                        size,
                        color,
                        btnType = EButtonType.DEFAULT,
                        disabled,
                        ariaLabel = EButtonName.DEFAULT
                    }: TIconsButtonProps): JSX.Element => {
    const handleClick = useCallback(() => onClick && onClick(), [onClick])

    return (
        <Button
            ariaLabel={ariaLabel}
            disabled={disabled}
            onClick={handleClick}
            type={btnType}
        >
            <Icon
                type={type}
                size={size}
                color={color}
            />
        </Button>
    )
}

export default memo(IconButton)
