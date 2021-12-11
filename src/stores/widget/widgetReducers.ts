import {combineReducers} from 'redux';
import {widgetAction} from 'stores/types'
import {initialLayouts} from "../initial";
import {EWidgetBreakpoints, TLayout, TWidget} from "../types/widget";
import {
    handleBreakpointSet,
    handleLayoutAdd,
    handleLayoutLockSet,
    handleLayoutPropertiesUpdate,
    handleLayoutRemove,
    handleLayoutUpdate,
    handleWidgetAdd,
    handleWidgetRemove
} from './widget.helpers'
import {ELocalKey, saveToLocal} from "../store.helpers";

const layoutReducer = (state: TLayout = initialLayouts, {type, payload}) => {
    switch (type) {
        case widgetAction.HANDLE_LAYOUT_ADD:
            return handleLayoutAdd(state, payload);

        case widgetAction.HANDLE_LAYOUT_REMOVE:
            return handleLayoutRemove(state, payload);

        case widgetAction.HANDLE_LAYOUT_LOCK_SET:
            return handleLayoutLockSet(state, payload);

        case widgetAction.HANDLE_LAYOUT_UPDATE:
            return handleLayoutUpdate(state, payload);

        case widgetAction.HANDLE_LAYOUT_PROPERTIES_SET:
            return handleLayoutPropertiesUpdate(state, payload);

        case widgetAction.HANDLE_LAYOUT_STORAGE_LOAD:
            return payload

        case widgetAction.HANDLE_LAYOUT_STORAGE_SAVE:
            saveToLocal(ELocalKey.LAYOUTS, state)
            return state

        default:
            return state;
    }
};

const breakpointReducer = (state: EWidgetBreakpoints = EWidgetBreakpoints.lg, {type, payload}) => {
    switch (type) {
        case widgetAction.HANDLE_BREAKPOINT_SET:
            return handleBreakpointSet(payload);

        default:
            return state;
    }
};

const widgetReducer = (state: TWidget[] = [], {type, payload}) => {
    switch (type) {
        case widgetAction.HANDLE_WIDGET_ADD:
            return handleWidgetAdd(state, payload);

        case widgetAction.HANDLE_LAYOUT_REMOVE:
            return handleWidgetRemove(state, payload);

        case widgetAction.HANDLE_WIDGETS_STORAGE_LOAD:
            return payload

        case widgetAction.HANDLE_WIDGETS_STORAGE_SAVE:
            saveToLocal(ELocalKey.WIDGETS, state)
            return state

        default:
            return state;
    }
}

const widthReducer = (state: number = 0, {type, payload}) => {
    switch (type) {
        case widgetAction.HANDLE_WIDTH_SET:
            return payload;

        default:
            return state;
    }
};

export default combineReducers({
    layout: layoutReducer,
    breakpoint: breakpointReducer,
    widget: widgetReducer,
    width: widthReducer,
});
