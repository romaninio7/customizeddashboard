export enum EWidgetMetrics {
    SINGLE_METRIC_CHART = 'SINGLE_METRIC_CHART',
    SINGLE_METRIC_CARD = 'SINGLE_METRIC_CARD',
    METRIC_COMPARISON = 'METRIC_COMPARISON',
    ACCOUNTS_COMPARISON = 'ACCOUNTS_COMPARISON',
    LIST = 'LIST',
    GENERIC = 'GENERIC',
    HOURLY_METRICS = 'HOURLY_METRICS',
}

export enum EWidgetMetricsBoard {
    CHART = 'CHART',
    CARD = 'CARD',
    COMPARISON = 'COMPARISON',
    LIST = 'LIST',
    GENERIC = 'GENERIC',
    HOURLY_METRICS = 'HOURLY_METRICS',
}

export type TWidgetResizeHandle = 's' | 'w' | 'e' | 'n' | 'sw' | 'nw' | 'se' | 'ne';

export enum EWidgetBreakpoints {
    lg = 'lg',
    md = 'md',
    sm = 'sm',
    xs = 'xs',
    xss = 'xss',
}

export type TLayoutItem = {
    i: string,
    x: number,
    y: number,
    w: number,
    h: number,
    minW?: number,
    maxW?: number,
    minH?: number,
    maxH?: number,
    moved?: boolean | undefined;
    static?: boolean,
    isDraggable?: boolean | undefined;
    isResizable?: boolean | undefined;
    resizeHandles?: TWidgetResizeHandle[] | undefined;
    isBounded?: boolean | undefined;
}

export type TLayout = {
    [P: string]: TLayoutItem[]
}

export enum ELayoutProperties {
    WIDTH = 'w',
    HEIGHT = 'h',
    MIN_WIDTH = 'minW',
    MAX_WIDTH = 'maxW',
    MIN_HEIGHT = 'minH',
    MAX_HEIGHT = 'maxH',
    POSITION_X = 'x',
    POSITION_Y = 'y',
}

export type TLayoutUpdateProps = {
    layout: TLayoutItem[],
    breakpoint: EWidgetBreakpoints
}
export type TLayoutPropertiesUpdateProps = {
    type: ELayoutProperties,
    id: TLayoutItem['i'],
    breakpoint: EWidgetBreakpoints,
    properties: string | number | boolean
}

export type TWidget = {
    id: string,
    title: string,
    type: EWidgetMetricsBoard,
    category: EWidgetMetrics,
    data: any[],
}
export enum widgetAction {
    HANDLE_BREAKPOINT_SET = 'HANDLE_BREAKPOINT_SET',
    HANDLE_WIDTH_SET = 'HANDLE_WIDTH_SET',

    HANDLE_LAYOUT_ADD = 'HANDLE_LAYOUT_ADD',
    HANDLE_LAYOUT_REMOVE = 'HANDLE_LAYOUT_REMOVE',
    HANDLE_LAYOUT_UPDATE = 'HANDLE_LAYOUT_UPDATE',
    HANDLE_LAYOUT_PROPERTIES_SET = 'HANDLE_LAYOUT_PROPERTIES_SET',
    HANDLE_LAYOUT_LOCK_SET = 'HANDLE_LAYOUT_LOCK_SET',
    HANDLE_LAYOUT_STORAGE_LOAD = 'HANDLE_LAYOUT_STORAGE_LOAD',
    HANDLE_LAYOUT_STORAGE_SAVE = 'HANDLE_LAYOUT_STORAGE_SAVE',

    HANDLE_WIDGET_ADD = 'HANDLE_WIDGET_ADD',
    HANDLE_WIDGETS_UPDATE = 'HANDLE_WIDGETS_UPDATE',
    HANDLE_WIDGETS_STORAGE_LOAD = 'HANDLE_WIDGETS_STORAGE_LOAD',
    HANDLE_WIDGETS_STORAGE_SAVE = 'HANDLE_WIDGETS_STORAGE_SAVE',
}
