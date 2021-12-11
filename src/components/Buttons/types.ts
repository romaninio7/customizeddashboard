import {TIcon} from "../Icon/types";
import React from "react";

export enum EButtonName {
    DEFAULT = 'button',
    CLOSE = 'button-close',
    MINUS = 'button-decrement',
    PLUS = 'button-increment',
    DELETE = 'button-delete',
    SEARCH = 'button-search',
    ADD_ROOM = 'button-add-room',
}


export enum EButtonType {
    PRIMARY = 'type-primary',
    SECONDARY = 'type-secondary',
    DEFAULT = 'type-default',
}

export type TButtonProps = {
    onClick?: (e?: React.MouseEvent) => void;
    children?: React.ReactNode;
    type?: EButtonType;
    disabled?: boolean;
    ariaLabel?: EButtonName;
}

export type TIconsButtonProps = {
    btnType?: EButtonType;
    onClick?: (e?: React.MouseEvent) => void;
    children?: React.ReactNode;
    disabled?: boolean;
    ariaLabel?: EButtonName;
} & TIcon
