import { useContext, CSSProperties } from 'react'

import Context from '../store/context'

const styles: Record<string, CSSProperties> = {
    main: {
        marginTop: "10px",
        background: "#FFFFFF",
        padding: "25px 0 24px 0"
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
        alignItems: "center"
    },
    night: {
        display: "flex",
        flexDirection: "column",
        flexBasis: "64px",
        alignItems: "center"
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

const Trend = ({ days, nights }: PropsType) => {
    const [state, dispatch] = useContext(Context);
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