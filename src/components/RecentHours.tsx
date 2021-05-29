import { useContext, CSSProperties } from 'react'

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

const RecentHours = () => {
    const [state, dispatch] = useContext(Context);

    return <div style={styles.main}>
        {state.hours.map((hour, index) => (
            <div key={index} style={styles.item}>
                <span style={styles.time}>{hour.time}</span>
                <img src={require(`../assets/${state.isDay ? "day" : "night"}/${hour.icon}.png`).default} style={styles.weather} />
                <span style={styles.temperature}>{hour.temperature}°</span>
            </div>
        ))}
    </div>
}

export default RecentHours;