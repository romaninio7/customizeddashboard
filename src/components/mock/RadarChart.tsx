import React, {memo} from 'react';
import {TGraphProps} from "./types";
import {PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart as Chart} from 'recharts';

const RadarChart = ({width, height, data}: TGraphProps) => {
    return (
        <Chart
            cx="50%"
            cy="50%"
            outerRadius="80%"
            data={data}
            width={width}
            height={height}
            margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
            }}
        >
            <PolarGrid/>
            <PolarAngleAxis dataKey="subject"/>
            <PolarRadiusAxis/>
            <Radar
                name="Mike"
                dataKey="A"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
            />
        </Chart>
    );
};

export default memo(RadarChart);
