import { CSSProperties, useRef, useEffect } from 'react';
import * as echarts from 'echarts/core';
import {
    GridComponent
} from 'echarts/components';
import {
    LineChart
} from 'echarts/charts';
import {
    CanvasRenderer
} from 'echarts/renderers';

const chartStyle: CSSProperties = {
    height: "135px",
    width: `${64 * 7}px`
}

type PropsType = {
    max: Array<number>,
    min: Array<number>,
}

echarts.use(
    [GridComponent, LineChart, CanvasRenderer]
);

const TrendChart = ({ max, min }: PropsType) => {
    const chartRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!chartRef.current) return;
        const chartElement = chartRef.current;
        const chart = echarts.init(chartElement);
        const option = {
            xAxis: {
                show: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                show: false,
                max: max,
                min: min,
            },
            grid: {
                left: 0,
                right: 0,
                top: 24,
                bottom: 8
            },
            label: {
                show: true,
                formatter: "{c}°"
            },
            series: [{
                data: max,
                type: 'line',
                smooth: true
            }, {
                data: min,
                type: 'line',
                smooth: true
            }]
        };
        chart.setOption(option);
    })

    return  <div id="chard" ref={chartRef} style={chartStyle}></div>
}

export default TrendChart;