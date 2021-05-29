import { useContext, CSSProperties, useRef, useEffect } from 'react';
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

import Context from '../store/context'

const styles: Record<string, CSSProperties> = {
    main: {
        marginTop: "10px",
        background: "#FFFFFF",
        padding: "25px 0 24px 0",
        overflowX: "auto"
    },
    image: {
        width: "24px",
        height: "24px",
    },
    days: {
        display: "flex",
        flexDirection: "row"
    },
    nights: {
        display: "flex",
        flexDirection: "row"
    },
    day: {
        display: "flex",
        flexDirection: "column",
        flexBasis: "64px",
        alignItems: "center",
        flexShrink: 0,
    },
    night: {
        display: "flex",
        flexDirection: "column",
        flexBasis: "64px",
        alignItems: "center",
        flexShrink: 0,
    },
    dayDay: {
        color: "#b2b2b2",
        fontSize: "12px",
    },
    dayDate: {
        margin: "5px 0 15px 0",
        color: "#b2b2b2",
        fontSize: "12px",
    },
    dayWeather: {
        marginBottom: "14px",
        color: "#434343",
        fontSize: "14px",
    },
    nightWeather: {
        margin: "16px 0 20px 0",
        color: "#434343",
        fontSize: "14px",
    },
    nightWind: {
        marginBottom: "6px",
        color: "#b2b2b2",
        fontSize: "12px",
    },
    nightLevel: {
        color: "#b2b2b2",
        fontSize: "12px",
    },
    chart: {
        height: "135px",
        width: `${64*8}px`
    }
}

type PropsType = {
    days: Array<{
        day: string,
        date: string,
        weather: string
    }>,
    nights: Array<{
        wind: string,
        level: number,
        weather: string
    }>
}

echarts.use(
    [GridComponent, LineChart, CanvasRenderer]
);

const Trend = ({ days, nights }: PropsType) => {
    const [state, dispatch] = useContext(Context);
    const chartRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!chartRef.current) return;
        const chartElement = chartRef.current;
        const chart = echarts.init(chartElement);
        const min = [82, 93, 90, 91, 100, 110, 132, 99];
        const max = [93, 133, 129, 111, 132, 133, 139, 130];
        const option = {
            xAxis: {
                show: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon']
            },
            yAxis: {
                show: false,
                max: Math.max(Math.max(...max), Math.max(...min)),
                min: Math.min(Math.min(...max), Math.min(...min)),
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
    }, [])

    return <div style={styles.main}>
        <div className="days" style={styles.days}>
            {days.map(day => (
                <div key={day.day} style={styles.day}>
                    <span style={styles.dayDay}>{day.day}</span>
                    <span style={styles.dayDate}>{day.date}</span>
                    <span style={styles.dayWeather}>{"晴"/*day.weather*/}</span>
                    <img src={require(`../assets/night/${day.weather}.png`).default} style={styles.image} />
                </div>
            ))}
        </div>
        <div id="chard" ref={chartRef} style={styles.chart}></div>
        <div className="nights" style={styles.nights}>
            {nights.map((night, index) => (
                <div key={index} style={styles.night}>
                    <img src={require(`../assets/night/${night.weather}.png`).default} style={styles.image} />
                    <span style={styles.nightWeather}>{"晴"/*night.weather*/}</span>
                    <span style={styles.nightWind}>{night.wind}</span>
                    <span style={styles.nightLevel}>{night.level}级</span>
                </div>
            ))}
        </div>
    </div>
}

export default Trend;