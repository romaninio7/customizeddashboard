import React, {memo} from 'react';
import {TGraphProps} from "./types";
import {Area, Bar, CartesianGrid, ComposedChart as Chart, Legend, Line, Scatter, Tooltip, XAxis, YAxis,} from 'recharts';

const ComposedChart = ({width, height, data}: TGraphProps) => {
    return (
        <Chart
            width={width}
            height={height}
            data={data}
            margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
            }}
        >
            <>
                <CartesianGrid stroke="#f5f5f5"/>
                <XAxis
                    dataKey="name"
                    scale="band"
                />
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Area
                    type="monotone"
                    dataKey="amt"
                    fill="#8884d8"
                    stroke="#8884d8"
                />
                <Bar
                    dataKey="pv"
                    barSize={20}
                    fill="#413ea0"
                />
                <Line
                    type="monotone"
                    dataKey="uv"
                    stroke="#ff7300"
                />
                <Scatter
                    dataKey="cnt"
                    fill="red"
                />
            </>
        </Chart>
    )
};

export default memo(ComposedChart);
