import { useContext, useEffect, CSSProperties } from 'react'

import Context from '../store/context'
import { ReducerAction } from '../store/types'

const styles: Record<string, CSSProperties> = {
    root: {
        color: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "470px",
    },
    location: {
        margin: "18px 0 0 6px"
    },
    main: {
        marginTop: "78px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    temperature: {
        fontSize: "62px"
    },
    weather: {
        marginTop: "8px",
        fontSize: "22px"
    },
    details: {
        marginTop: "10px",
        fontSize: "14px"
    },
    tip: {
        marginTop: "50px",
        fontSize: "16px"
    }
}

const Header = () => {
    const [state, dispatch] = useContext(Context);
    useEffect(() => {
        fetchWeatherNow(dispatch)
    }, [])
    return <header style={{ ...styles.root, ...getBackground(state.isDay) }}>
        <div style={styles.location}>{state.now.city}</div>
        <div style={styles.main}>
            <span style={styles.temperature}>{state.now.temperature}°</span>
            <span style={styles.weather}>{state.now.weather}</span>
            <div style={styles.details}>
                {state.now.details.map(v => <span key={v[0]}>{v[0]} {v[1]}</span>)}
            </div>
        </div>
        <div style={styles.tip}>{state.now.tip}</div>
    </header>
}

async function fetchWeatherNow(dispatch: React.Dispatch<ReducerAction>) {
    const data = await fetch(`/api/v1/weather/now`)
    const json = await data.json();
    dispatch({
        type: "NOW",
        payload: json
    })
}

function getBackground(isDay: boolean): CSSProperties {
    return {
        background: `
            url(${require("../assets/background/layer1.png").default}) no-repeat,
            url(${require("../assets/background/layer2.png").default}) no-repeat, 
            url(${require("../assets/background/layer3.png").default}) no-repeat, 
            linear-gradient(-90deg,${isDay ? "#50ade8,#7ae0fa" : "#313877,#44abec"})
        `,
        backgroundSize: "100% auto",
        backgroundPosition: "0 100%"
    }
}

export default Header;