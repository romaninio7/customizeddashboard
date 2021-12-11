import {ReactNode} from "react";

export enum EInputType {
    TEXT = 'text',
    NUMBER = 'number',
}

export type TInputProps = {
    value: string | number,
    onChange: (v: string) => void;
    iconStart?: null | ReactNode,
    iconEnd?: null | ReactNode,
    type?: EInputType,
    placeholder?: string
    clear?: boolean
}
