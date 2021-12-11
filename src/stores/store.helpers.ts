import {TLayout, TWidget} from "./types/widget";

export type TLocalType = TLayout | string | boolean | TWidget[]

export enum ELocalKey {
    WIDGETS = 'WIDGETS',
    ADD_TAB = 'ADD_TAB',
    ADD_INPUT = 'ADD_INPUT',
    LAYOUTS = 'LAYOUTS',
    MENU = 'MENU',
}

export const defaultWidgets = [
    {id: '5', options: {x: 0, y: 0, w: 2, h: 1}},
    {id: '2', options: {x: 2, y: 0, w: 2, h: 1}},
    {id: '4', options: {x: 0, y: 1, w: 2, h: 2}},
    {id: '7', options: {x: 2, y: 1, w: 2, h: 2}},
    {id: '12', options: {x: 0, y: 4, w: 4, h: 2}},
]

export const loadLayoutFromLocal = (): TLayout | null => {
    const data = JSON.parse(localStorage.getItem(ELocalKey.LAYOUTS))
    if (!data) return null
    return data
}

export const loadTabFromLocal = () => {
    const data = JSON.parse(localStorage.getItem(ELocalKey.ADD_TAB))
    if (!data) return null
    return data
}

export const loadInputFromLocal = () => {
    const data = JSON.parse(localStorage.getItem(ELocalKey.ADD_INPUT))
    if (!data) return ''
    return data
}

export const loadWidgetFromLocal = (): TWidget[] => {
    const data = JSON.parse(localStorage.getItem(ELocalKey.WIDGETS))
    if (!data) return []
    return data
}

export const loadMenuStateFromLocal = (): boolean => {
    const data = JSON.parse(localStorage.getItem(ELocalKey.MENU))
    if (!data) return false
    return data
}

export const saveToLocal = (key: ELocalKey, data: TLocalType) => {
    localStorage.setItem(key, JSON.stringify(data))
}
