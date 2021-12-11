import {EWidgetMetrics} from "stores/types";
import {EIconType} from 'components'
import {
    cardData,
    composedChartData,
    genericDataOne,
    genericDataThree,
    genericDataTwo,
    listData,
    pieChartData,
    radarChartData
} from "components/mock";
import {$Values} from "utils";
import {EWidgetMetricsBoard} from "../../stores/types/widget";

export type TWidgetsMetrics = {
    name: string,
    value: EWidgetMetrics | null,
    icon?: $Values<typeof EIconType>,
}

export const widgetsMetricsIcons = {
    [EWidgetMetrics.SINGLE_METRIC_CHART]: {icon: EIconType.Graph},
    [EWidgetMetrics.SINGLE_METRIC_CARD]: {icon: EIconType.Pause},
    [EWidgetMetrics.METRIC_COMPARISON]: {icon: EIconType.GreaterEqual},
    [EWidgetMetrics.ACCOUNTS_COMPARISON]: {icon: EIconType.ArrowHorizontal},
    [EWidgetMetrics.LIST]: {icon: EIconType.Layout},
    [EWidgetMetrics.GENERIC]: {icon: EIconType.Archive},
    [EWidgetMetrics.HOURLY_METRICS]: {icon: EIconType.Hourglass},
}

export const widgetsMetrics: TWidgetsMetrics[] = [
    {
        name: 'single metric chart',
        value: EWidgetMetrics.SINGLE_METRIC_CHART,
        icon: widgetsMetricsIcons[EWidgetMetrics.SINGLE_METRIC_CHART].icon
    },
    {
        name: 'single metric card',
        value: EWidgetMetrics.SINGLE_METRIC_CARD,
        icon: widgetsMetricsIcons[EWidgetMetrics.SINGLE_METRIC_CARD].icon
    },
    {
        name: 'metric comparison',
        value: EWidgetMetrics.METRIC_COMPARISON,
        icon: widgetsMetricsIcons[EWidgetMetrics.METRIC_COMPARISON].icon
    },
    {
        name: 'account comparison',
        value: EWidgetMetrics.ACCOUNTS_COMPARISON,
        icon: widgetsMetricsIcons[EWidgetMetrics.ACCOUNTS_COMPARISON].icon
    },
    {
        name: 'list',
        value: EWidgetMetrics.LIST,
        icon: widgetsMetricsIcons[EWidgetMetrics.LIST].icon
    },
    {
        name: 'generic',
        value: EWidgetMetrics.GENERIC,
        icon: widgetsMetricsIcons[EWidgetMetrics.GENERIC].icon
    },
    {
        name: 'hourly metrics',
        value: EWidgetMetrics.HOURLY_METRICS,
        icon: widgetsMetricsIcons[EWidgetMetrics.HOURLY_METRICS].icon
    },
]

export const widgetsMetricsGroups: TWidgetsMetrics[] = [
    {name: 'all', value: null},
    ...widgetsMetrics,
]

export type TWidgetsAddType = {
    id: string,
    title: string,
    description: string,
    category: EWidgetMetrics,
}

export const layoutSettings = {
    1: {w: 1, h: 1},
    2: {w: 2, h: 1, minW: 2},
    3: {w: 3, h: 1, minW: 3},
    4: {w: 2, h: 2, minW: 2, minH: 2},
    5: {w: 2, h: 1, minW: 2},
    6: {},
    7: {w: 2, h: 2, minW: 2, minH: 2},
    8: {w: 2, h: 2, minW: 2, minH: 2},
    9: {w: 4, h: 1, minW: 2, minH: 1},
    10: {w: 2, h: 1, minW: 2},
    11: {},
    12: {w: 4, h: 1, minW: 2, minH: 1},
    13: {w: 2, h: 1, minW: 2},
    14: {},
    15: {w: 2, h: 1, minW: 2},
    16: {},
    17: {w: 2, h: 1, minW: 2},
    18: {},
    19: {w: 2, h: 1, minW: 2},
    20: {},
    21: {w: 2, h: 1, minW: 2},
    22: {},
}

export const widgetSettings = {
    1: {type: EWidgetMetricsBoard.GENERIC, data: genericDataOne},
    2: {type: EWidgetMetricsBoard.GENERIC, data: genericDataTwo},
    3: {type: EWidgetMetricsBoard.GENERIC, data: genericDataThree},
    4: {type: EWidgetMetricsBoard.HOURLY_METRICS, data: pieChartData},
    5: {type: EWidgetMetricsBoard.CHART, data: composedChartData},
    6: {type: EWidgetMetricsBoard.CARD, data: cardData},
    7: {type: EWidgetMetricsBoard.COMPARISON, data: radarChartData},
    8: {type: EWidgetMetricsBoard.COMPARISON, data: radarChartData},
    9: {type: EWidgetMetricsBoard.LIST, data: listData},
    10: {type: EWidgetMetricsBoard.CHART, data: composedChartData},
    11: {type: EWidgetMetricsBoard.CARD, data: cardData},
    12: {type: EWidgetMetricsBoard.LIST, data: listData},
    13: {type: EWidgetMetricsBoard.CHART, data: composedChartData},
    14: {type: EWidgetMetricsBoard.CARD, data: cardData},
    15: {type: EWidgetMetricsBoard.CHART, data: composedChartData},
    16: {type: EWidgetMetricsBoard.CARD, data: cardData},
    17: {type: EWidgetMetricsBoard.CHART, data: composedChartData},
    18: {type: EWidgetMetricsBoard.CARD, data: cardData},
    19: {type: EWidgetMetricsBoard.CHART, data: composedChartData},
    20: {type: EWidgetMetricsBoard.CARD, data: cardData},
    21: {type: EWidgetMetricsBoard.CHART, data: composedChartData},
    22: {type: EWidgetMetricsBoard.CARD, data: cardData},
    23: {type: EWidgetMetricsBoard.CHART, data: composedChartData},
    24: {type: EWidgetMetricsBoard.CARD, data: cardData},
}

export const widgets = [
    {
        id: '1',
        title: 'Account Basic One Metric Chart',
        description: 'Widget Description',
        category: EWidgetMetrics.GENERIC,
    },
    {
        id: '2',
        title: 'Account Basic Two Metric Chart',
        description: 'Widget Description',
        category: EWidgetMetrics.GENERIC
    },
    {
        id: '3',
        title: 'Account Basic Three Metric Chart',
        description: 'Widget Description',
        category: EWidgetMetrics.GENERIC
    },
    {
        id: '4',
        title: 'Account Hourly Stats',
        description: 'Widget Description',
        category: EWidgetMetrics.HOURLY_METRICS
    },
    {
        id: '5',
        title: 'ACoS',
        description: 'Widget Description',
        category: EWidgetMetrics.SINGLE_METRIC_CHART
    },
    {
        id: '6',
        title: 'ACoS',
        description: 'Widget Description',
        category: EWidgetMetrics.SINGLE_METRIC_CARD
    },
    {
        id: '7',
        title: 'ACoS vs TACoS',
        description: 'Widget Description',
        category: EWidgetMetrics.ACCOUNTS_COMPARISON
    },
    {
        id: '8',
        title: 'ACoS vs TACoS',
        description: 'Widget Description',
        category: EWidgetMetrics.METRIC_COMPARISON
    },
    {
        id: '9',
        title: 'Alert Log',
        description: 'Widget Description',
        category: EWidgetMetrics.LIST
    },
    {
        id: '10',
        title: 'Amazon Fees',
        description: 'Widget Description',
        category: EWidgetMetrics.SINGLE_METRIC_CHART
    },
    {
        id: '11',
        title: 'Amazon Fees',
        description: 'Widget Description',
        category: EWidgetMetrics.SINGLE_METRIC_CARD
    },
    {
        id: '12',
        title: 'Autotracker Feed',
        description: 'Widget Description',
        category: EWidgetMetrics.LIST
    },
    {
        id: '13',
        title: 'Av CPC',
        description: 'Widget Description',
        category: EWidgetMetrics.SINGLE_METRIC_CHART
    },
    {
        id: '14',
        title: 'Av CPC',
        description: 'Widget Description',
        category: EWidgetMetrics.SINGLE_METRIC_CARD
    },
    {
        id: '15',
        title: 'Av HSA CPC',
        description: 'Widget Description',
        category: EWidgetMetrics.SINGLE_METRIC_CHART
    },
    {
        id: '16',
        title: 'Av HSA CPC',
        description: 'Widget Description',
        category: EWidgetMetrics.SINGLE_METRIC_CARD
    },
    {
        id: '17',
        title: 'Av SP CPC',
        description: 'Widget Description',
        category: EWidgetMetrics.SINGLE_METRIC_CHART
    },
    {
        id: '18',
        title: 'Av SP CPC',
        description: 'Widget Description',
        category: EWidgetMetrics.SINGLE_METRIC_CARD
    },
    {
        id: '19',
        title: 'Average CLTV',
        description: 'Widget Description',
        category: EWidgetMetrics.SINGLE_METRIC_CHART
    },
    {
        id: '20',
        title: 'Average CLTV',
        description: 'Widget Description',
        category: EWidgetMetrics.SINGLE_METRIC_CARD
    },
    {
        id: '21',
        title: 'Average Order Value',
        description: 'Widget Description',
        category: EWidgetMetrics.SINGLE_METRIC_CHART
    },
    {
        id: '22',
        title: 'Average Order Value',
        description: 'Widget Description',
        category: EWidgetMetrics.SINGLE_METRIC_CARD
    },
    {
        id: '23',
        title: 'Average Units per Order',
        description: 'Widget Description',
        category: EWidgetMetrics.SINGLE_METRIC_CHART
    },
    {
        id: '24',
        title: 'Average Units per Order',
        description: 'Widget Description',
        category: EWidgetMetrics.SINGLE_METRIC_CARD
    },
]
