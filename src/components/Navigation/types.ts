import {TWidgetsMetrics} from "../../helpers/constants/widget.constants";
import {$Values} from "../../utils";
import {EIconType} from "../Icon/types";

export type TNavigationBarData = TWidgetsMetrics | {
    name: string,
    value: string,
    icon?: $Values<typeof EIconType>,
}

export type TNavigationBarProps = {
    data: TNavigationBarData[],
    onClick: (v: TNavigationBarData["value"]) => void,
    value: TNavigationBarData["value"],
}

export type TNavigationItemProps = TNavigationBarData & {
    onClick: (item: TNavigationBarData) => void,
    active?: boolean,
}
