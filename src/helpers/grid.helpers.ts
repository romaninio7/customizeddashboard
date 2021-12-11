import {COLS} from './constants'

export const getLayoutBlockSize = (width: number, breakpoint: string) => {
    console.log('width', width)
    return width / COLS[breakpoint] * 0.94
}
