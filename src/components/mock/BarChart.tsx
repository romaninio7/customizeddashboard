import React, {memo} from 'react';
import {TGraphProps} from "./types";
import {Bar, BarChart as Chart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from 'recharts';

const BarChart = ({width, height, data}: TGraphProps) => {
    return (
        <Chart
            width={width}
            height={height}
            data={data}
            margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Bar
                    dataKey="pv"
                    stackId="a"
                    fill="#8884d8"
                />
                <Bar
                    dataKey="amt"
                    stackId="a"
                    fill="#82ca9d"
                />
                <Bar
                    dataKey="uv"
                    fill="#ffc658"
                />
            </>
        </Chart>
    );
};

export default memo(BarChart);
