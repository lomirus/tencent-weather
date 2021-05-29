import { useContext, CSSProperties, useRef, useEffect, Dispatch } from 'react';
import * as echarts from 'echarts/core';

import Context from '../store/context'
import { ReducerAction, TrendItemType } from '../store/types'
import TrendChart from './Trend/TrendChart'

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
        width: `${64 * 8}px`
    }
}

const Trend = () => {
    const [state, dispatch] = useContext(Context);
    useEffect(() => {
        fetchTrend(dispatch)
    }, [])

    return <div style={styles.main}>
        <div style={styles.days}>
            {state.trend.map(day => (
                <div key={day.day} style={styles.day}>
                    <span style={styles.dayDay}>{day.day}</span>
                    <span style={styles.dayDate}>{day.date}</span>
                    <span style={styles.dayWeather}>{day.daytime_weather}</span>
                    <img src={require(`../assets/night/${day.daytime_icon}.png`).default} style={styles.image} />
                </div>
            ))}
        </div>
        <TrendChart max={state.trend.map(v => v.max_t)} min={state.trend.map(v => v.min_t)}/>
        <div style={styles.nights}>
            {state.trend.map((day, index) => (
                <div key={index} style={styles.night}>
                    <img src={require(`../assets/night/${day.night_icon}.png`).default} style={styles.image} />
                    <span style={styles.nightWeather}>{day.night_weather}</span>
                    <span style={styles.nightWind}>{day.wind}</span>
                    <span style={styles.nightLevel}>{day.wind_speed}级</span>
                </div>
            ))}
        </div>
    </div>
}

async function fetchTrend(dispatch: Dispatch<ReducerAction>) {
    const data = await fetch("/api/v1/weather/trend")
    const json = await data.json();
    dispatch({
        type: "TREND",
        payload: json
    })
}

export default Trend;