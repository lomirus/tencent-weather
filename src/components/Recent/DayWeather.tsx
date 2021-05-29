import { CSSProperties } from 'react'

const styles: Record<string, CSSProperties> = {
    root: {
        padding: "26px 20px 0 20px",
        display: "flex",
        flexDirection: "column"
    },
    topRow: {
        display: "flex",
        marginBottom: "13px",
        justifyContent: "space-between"
    },
    bottomRow: {
        display: "flex",
        justifyContent: "space-between"
    },
    image: {
        height: "22px",
        width: "22px"
    }
}

type PropsType = {
    isDay: boolean,
    day: string,
    weather: string,
    icon: string,
    temperature: string,
}

const DayWeather = ({ isDay, day, icon, weather, temperature }: PropsType) => {
    return <div style={styles.root}>
        <div style={styles.topRow}>
            <span>{day}</span>
            <span>{temperature}</span>
        </div>
        <div style={styles.bottomRow}>
            <span>{weather}</span>
            <img src={require(`../../assets/${isDay ? "day" : "night"}/${icon}.png`).default} style={styles.image}></img>
        </div>
    </div>
}

export default DayWeather;