import {ReactNode} from "react";
import {TWidgetsMetrics} from "../../helpers/constants/widget.constants";
import {TLayoutItem, TWidget} from "../../stores/types/widget";

export enum EModalSize {
    LARGE = 'size-large',
    MIDDLE = 'size-middle',
}

export enum EModalPosition {
    TOP = 'position-top',
    CENTER = 'position-center',
    RIGHT = 'position-right',
}

export type TModalHeaderProps = {
    title?: string | ReactNode;
    onClose: () => void;
}

export type TModalProps = TModalHeaderProps & {
    children?: ReactNode;
    size?: EModalSize;
    position?: EModalPosition;
    header?: boolean
}

export type TModalContainerProps = {
    children: ReactNode
}

export type TNavigationBarProps = {
    valueTab: TWidgetsMetrics["value"],
    valueInput: string,
    onTabChange: (v: TWidgetsMetrics["value"]) => void,
    onInputChange: (v: string) => void,
}

export type TModalWidgetInner = TLayoutItem & TWidget

export type TInnerRowTitleProp = {
    title: string;
}

export type TInnerRowNumber = {
    name: string;
    value: string | number;
    onChange: (v: number) => void
    min?: number,
    max?: number,
    icon?: ReactNode,
}
