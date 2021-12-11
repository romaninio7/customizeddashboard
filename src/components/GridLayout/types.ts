import {CSSProperties, ReactNode} from "react";
import {TLayoutItem, TWidget} from "../../stores/types/widget";

export type TGridItemContainerProps = {
    style?: CSSProperties;
    className?: string;
    children?: ReactNode;
    item: TLayoutItem;
}

export type TGridHeaderProps = {
    title: string;
    isLock: boolean;
    onLock: () => void;
    onDelete: () => void;
    onEdit: () => void;
}

export type TGridItemProps = TLayoutItem & {
    style: CSSProperties,
}

export type TGridItemDrawProps = TWidget & {
    id: TLayoutItem['i'];
    w: number;
    h: number;
}
