import {widgetAction} from "../types";
import {
    ELayoutProperties,
    EWidgetBreakpoints,
    TLayout,
    TLayoutItem,
    TLayoutPropertiesUpdateProps,
    TWidget
} from "../types/widget";


// BREAKPOINTS
export const handleBreakpointSet = (breakpoint: EWidgetBreakpoints) => ({
    type: widgetAction.HANDLE_BREAKPOINT_SET,
    payload: breakpoint
});

// WIDTH
export const handleWidthSet = (width: number) => ({
    type: widgetAction.HANDLE_WIDTH_SET,
    payload: width
})

// LAYOUTS
export const handleLayoutAdd = (itemId: string, codeId: string, options?: object) => ({
    type: widgetAction.HANDLE_LAYOUT_ADD,
    payload: {itemId, codeId, options}
});

export const handleLayoutRemove = (id: TLayoutItem['i']) => ({
    type: widgetAction.HANDLE_LAYOUT_REMOVE,
    payload: id
});

export const handleLayoutLockSet = (id: TLayoutItem['i'], lock: TLayoutItem['static'] = true) => ({
    type: widgetAction.HANDLE_LAYOUT_LOCK_SET,
    payload: {id, lock}
});

export const handleLayoutUpdate = (layout: TLayoutItem[], breakpoint: EWidgetBreakpoints) => ({
    type: widgetAction.HANDLE_LAYOUT_UPDATE,
    payload: {layout, breakpoint}
});

export const handleLayoutPropertiesSet = (type: ELayoutProperties, breakpoint: EWidgetBreakpoints, id: TLayoutPropertiesUpdateProps['id'] , properties: TLayoutPropertiesUpdateProps['properties']) => ({
    type: widgetAction.HANDLE_LAYOUT_PROPERTIES_SET,
    payload: {type, breakpoint, id, properties}
});

export const handleLayoutLoad = (layout: TLayout) => ({
    type: widgetAction.HANDLE_LAYOUT_STORAGE_LOAD,
    payload: layout
});

export const handleLayoutSave = () => ({
    type: widgetAction.HANDLE_LAYOUT_STORAGE_SAVE
});


// WIDGETS
export const handleWidgetAdd = (itemId: string, codeId: string) => ({
    type: widgetAction.HANDLE_WIDGET_ADD,
    payload: {itemId, codeId}
});

export const handleWidgetLoad = (widgets: TWidget[]) => ({
    type: widgetAction.HANDLE_WIDGETS_STORAGE_LOAD,
    payload: widgets
});

export const handleWidgetSave = () => ({
    type: widgetAction.HANDLE_WIDGETS_STORAGE_SAVE
});
