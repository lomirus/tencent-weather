import { useContext, CSSProperties } from 'react'

import Context from '../store/context'

const styles: Record<string, CSSProperties> = {
    main: {
        marginTop: "10px",
        paddingTop: "30px",
        paddingBottom: "25px",
        display: 'flex',
        width: '100vw',
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

type PropsType = {
    data: Array<{
        time: string,
        weather: string,
        temperature: number,
    }>
}

const Timeline = ({ data }: PropsType) => {
    const [state, dispatch] = useContext(Context);
    return <div style={styles.main}>
        {data.map(v => <div key={v.time} style={styles.item}>
            <span style={styles.time}>{v.time}</span>
            <img src={require(`../assets/night/${v.weather}.png`).default} style={styles.weather}/>
            <span style={styles.temperature}>{v.temperature}°</span>
        </div>)}
    </div>
}

export default Timeline;