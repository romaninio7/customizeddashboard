import React, {memo, useMemo} from 'react';
import {TGridItemDrawProps} from "./types";
import {EWidgetMetricsBoard} from "../../stores/types/widget";
import {BarChart, Card, ComposedChart, PieChart, RadarChart, Table} from "components/mock";

const GridItemDraw = ({h, w, type, data}: TGridItemDrawProps) => {

    const component = useMemo(() => {
        switch (type) {
            case EWidgetMetricsBoard.CHART:
                return <ComposedChart
                    data={data}
                    width={w}
                    height={h}
                />
            case EWidgetMetricsBoard.COMPARISON:
                return <RadarChart
                    data={data}
                    width={w}
                    height={h}
                />
            case EWidgetMetricsBoard.CARD:
                return <Card
                    data={data}
                    width={w}
                    height={h}
                />
            case EWidgetMetricsBoard.LIST:
                return <Table
                    data={data}
                    width={w}
                    height={h}
                />

            case EWidgetMetricsBoard.GENERIC:
                return (
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        {data.map((el, i) => (
                            <div key={`generic-${i}`}>
                                <BarChart
                                    data={el}
                                    width={w / data.length}
                                    height={h}
                                />
                            </div>
                        ))}
                    </div>
                )

            case EWidgetMetricsBoard.HOURLY_METRICS:
                return <PieChart
                    data={data}
                    width={w}
                    height={h}
                />
            default:
                return <div>
                    Error
                </div>
        }
    }, [type, w, h, data])

    return (
        <div className="grid-item-draw">
            {component}
        </div>
    );
};

export default memo(GridItemDraw);
