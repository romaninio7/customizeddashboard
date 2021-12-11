import React, {memo, useMemo} from 'react';
import {TCardData, TCardProps, TTinyLineChartProps} from "../types";
import {Line, LineChart, ResponsiveContainer} from 'recharts';
import './card.scss'
import '../Table/table.scss'

const TinyLineChart = memo(({data}: TTinyLineChartProps) => {
    return (
        <ResponsiveContainer
            width="100%"
            height="100%"
        >
            <LineChart
                width={300}
                height={100}
                data={data}
            >
                <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#8884d8"
                    strokeWidth={2}
                />
            </LineChart>
        </ResponsiveContainer>
    )
})

const CardInner = memo(({data}: TTinyLineChartProps) => {
    const maxNumber = useMemo(() => {
        return data.reduce((acc, {pv}) => {
            if (acc <= pv) acc = pv
            return acc
        }, 0)
    }, [data])

    const startNumber = useMemo(() => {
        return data[0].pv
    }, [data])

    const endNumber = useMemo(() => {
        return data[data.length - 1].pv
    }, [data])

    return (
        <div className='mock-card__item'>
            <div className='mock-card__number'>
                <div className='mock-card__number__start'>
                    <p>{startNumber}</p>
                    <span>start</span>
                </div>
                <div className='mock-card__number__max'>
                    <p>{maxNumber}</p>
                    <span>max</span>
                </div>
                <div className='mock-card__number__end'>
                    <p>{endNumber}</p>
                    <span>current</span>
                </div>
            </div>
            <div className='mock-card__chart'>
                <TinyLineChart data={data}/>
            </div>
        </div>
    )
})

const Card = ({width, height, data}: TCardProps) => {
    const {title, render: renderData} = data as TCardData
    return (
        <div
            style={{width, height}}
            className="table"
        >
            <div className="table__wrapper">
                <div className='mock-card'>
                    <p className='mock-card__title'>
                        {title || ''}
                    </p>
                    <div className='mock-card__main'>
                        <CardInner data={renderData}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(Card);
