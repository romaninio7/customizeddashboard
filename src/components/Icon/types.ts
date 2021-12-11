import {Icons} from "assets";
import {$Values} from "utils";

export enum EIconColor {
    BLUE = 'blue',
    WHITE = 'white',
    GRAY = 'gray',
    RED = 'red',
}

export enum EIconSize {
    SMALL = 'small',
    MIDDLE = 'middle',
    BIG = 'big',
    LARGE = 'large',
    EXTRA_LARGE = 'extra-large',
}

export const EIconType: { [Key in keyof typeof Icons]: typeof Icons[Key] } = Icons;

export type TIcon = {
    type: $Values<typeof EIconType>;
    color?: EIconColor;
    size?: EIconSize;
}
