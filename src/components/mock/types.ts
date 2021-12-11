import {TWidget} from "../../stores/types/widget";

export type TGraphProps = {
    data: TWidget['data'];
    width: number;
    height: number;
}

export type TTableInner = {
    data: TGraphProps['data'],
    columns: any;
}

export type TTinyLineChartData = {
    name: string;
    pv: number;
}

export type TCardData = {
    title: string;
    render: TTinyLineChartData[];
}

export type TCardProps = {
    data: TCardData | any[];
    width: number;
    height: number;
}

export type TTinyLineChartProps = {
    data: TTinyLineChartData[]
}
