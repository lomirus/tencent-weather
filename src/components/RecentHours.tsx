import { useContext, CSSProperties, useState, Dispatch, SetStateAction } from 'react'

import Context from '../store/context'

const styles: Record<string, CSSProperties> = {
    main: {
        marginTop: "10px",
        paddingTop: "30px",
        paddingBottom: "25px",
        display: 'flex',
        overflowX: "auto",
        flexBasis: "80px",
        backgroundColor: "#FFFFFF"
    },
    time: {
        color: "#999",
        fontSize: "12px"
    },
    weather: {
        width: "24px",
        height: "24px",
        margin: "15px 0"
    },
    temperature: {
        fontSize: "14px",
        color: "#434343",
    },
    item: {
        flexShrink: 0,
        width: "65px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }
}

type HourType = {
    time: string,
    icon: string,
    temperature: number
}

const RecentHours = () => {
    const ctx = useContext(Context)[0];
    const [state, setState] = useState<HourType[]>(Array.from({ length: 24 }, () => {
        return {
            time: "Loading",
            icon: "qing",
            temperature: 0
        }
    }))

    fetchHourlyWeather(setState)

    return <div style={styles.main}>
        {state.map((hour, index) => (
            <div key={index} style={styles.item}>
                <span style={styles.time}>{hour.time}</span>
                <img src={require(`../assets/${ctx.isDaytime ? "day" : "night"}/${hour.icon}.png`).default} style={styles.weather} />
                <span style={styles.temperature}>{hour.temperature}°</span>
            </div>
        ))}
    </div>
}

async function fetchHourlyWeather(setState: Dispatch<SetStateAction<HourType[]>>) {
    const data = await fetch("/api/v1/weather/hours");
    const json = await data.json();
    setState(json)
}

export default RecentHours;