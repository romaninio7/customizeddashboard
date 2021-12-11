import {
    EWidgetBreakpoints,
    TLayout,
    TLayoutItem,
    TLayoutPropertiesUpdateProps,
    TLayoutUpdateProps,
    TWidget,
} from "../types/widget";
import {initialNew, initialSetting} from "../initial";
import {ELocalKey, saveToLocal} from "../store.helpers";
import {widgets} from "../../helpers/constants";
import {layoutSettings, widgetSettings} from "../../helpers/constants/widget.constants";
import {getRandomArbitrary} from "../../components/mock/data";

export const handleBreakpointSet = (breakpoint: EWidgetBreakpoints) => {
    if (!breakpoint) return EWidgetBreakpoints.lg
    return breakpoint
}

const createLayout = (itemId: string, codeId: string, idx, options = {}) => {
    return {...initialSetting, ...initialNew, ...layoutSettings[codeId], i: itemId, y: idx, ...options}
}

export const handleLayoutAdd = (state: TLayout, {
    itemId,
    codeId,
    options
}: { itemId: string, codeId: string, options?: object }) => {
    const newState = Object.entries(state).reduce((acc, [key, value]) => {
        if (!key) return acc
        if (Array.isArray(value)) {
            acc[key] = [...value, createLayout(itemId, codeId, value.length, options)]
        } else {
            acc[key] = [createLayout(itemId, codeId, 0, options)]
        }
        return acc
    }, {} as TLayout)
    saveToLocal(ELocalKey.LAYOUTS, newState)
    return newState
}

export const handleLayoutRemove = (state: TLayout, id: TLayoutItem['i']): TLayout => {
    const newState = Object.entries(state).reduce((acc, [key, value]) => {
        acc[key] = value.filter(el => el.i !== id)
        return acc
    }, {} as TLayout)
    saveToLocal(ELocalKey.LAYOUTS, newState)
    return newState
}

export const handleLayoutLockSet = (state: TLayout, {
    id,
    lock
}: { id: TLayoutItem['i'], lock: TLayoutItem['static'] }) => {
    const newState = Object.entries(state).reduce((acc, [key, value]) => {
        acc[key] = value.map(el => {
            if (el.i === id) return {...el, static: lock}
            return el
        })
        return acc
    }, {} as TLayout)
    saveToLocal(ELocalKey.LAYOUTS, newState)
    return newState
}

export const handleLayoutUpdate = (state: TLayout, {layout, breakpoint}: TLayoutUpdateProps) => {
    const newState = {...state}
    if (breakpoint) {
        newState[breakpoint] = layout
    }
    saveToLocal(ELocalKey.LAYOUTS, newState)
    return newState
}

export const handleLayoutPropertiesUpdate = (state: TLayout, {
    type,
    breakpoint,
    id,
    properties
}: TLayoutPropertiesUpdateProps) => {
    const types = type as string
    const newState = Object.entries(state).reduce((acc, [k, v]) => {
        if (k !== breakpoint) acc[k] = v
        acc[k] = v.map(el => {
            if (el.i !== id) return el
            return {...el, [types]: properties}
        })
        return acc
    }, {} as TLayout)

    saveToLocal(ELocalKey.LAYOUTS, newState)
    return newState
}

export const handleWidgetAdd = (state: TWidget[], {itemId, codeId}: { itemId: string, codeId: string }) => {
    const w = widgets.find(el => el.id === codeId)

    const setting = widgetSettings[codeId]
    if (!!setting?.data?.render) {
        setting.data.render = setting.data.render.map(el => {
            el.pv = getRandomArbitrary()
            return el
        })
    }


    const newState = [...state, {...w, ...setting, id: itemId,}]
    saveToLocal(ELocalKey.WIDGETS, newState)
    return newState
}

export const handleWidgetRemove = (state: TWidget[], id: TWidget['id']) => {
    return state.filter(el => el.id !== id)
}
