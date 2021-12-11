export enum ESvgRotateDirection {
    LEFT = 'rotate-left',
    RIGHT = 'rotate-right',
    UP = 'rotate-up',
    DOWN = 'rotate-down'
}

export interface IIconSvgProps {
    svg?: string;
    classname?: string;
    children?: React.ReactChild;
    width?: string;
    height?: string;
    viewBox?: string;
}

export type TSvgRotateProps = IIconSvgProps & {
    direction?: ESvgRotateDirection;
};
