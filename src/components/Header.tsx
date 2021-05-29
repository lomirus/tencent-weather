import { useState, CSSProperties, SetStateAction, useContext } from 'react'

import Context from '../store/context'

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

type nowType = {
    city: string,
    tip: string,
    weather: string,
    temperature: number,
    details: Array<Array<string>>
}

const Header = () => {
    const ctx = useContext(Context)[0]
    const [state, setState] = useState<nowType>({
        city: "",
        temperature: 0,
        weather: "",
        details: [],
        tip: ""
    });

    fetchWeatherNow(setState)

    return <header style={{ ...styles.root, ...getBackground(ctx.isDaytime) }}>
        <div style={styles.location}>{state.city}</div>
        <div style={styles.main}>
            <span style={styles.temperature}>{state.temperature}°</span>
            <span style={styles.weather}>{state.weather}</span>
            <div style={styles.details}>
                {state.details.map(v => <span key={v[0]}>{v[0]} {v[1]}</span>)}
            </div>
        </div>
        <div style={styles.tip}>{state.tip}</div>
    </header>
}

async function fetchWeatherNow(setState: React.Dispatch<SetStateAction<nowType>>) {
    const data = await fetch(`/api/v1/weather/now`)
    const json = await data.json();
    setState(json)
}

function getBackground(isDaytime: boolean): CSSProperties {
    return {
        background: `
            url(${require("../assets/background/layer1.png").default}) no-repeat,
            url(${require("../assets/background/layer2.png").default}) no-repeat, 
            url(${require("../assets/background/layer3.png").default}) no-repeat, 
            linear-gradient(-90deg,${isDaytime ? "#50ade8,#7ae0fa" : "#313877,#44abec"})
        `,
        backgroundSize: "100% auto",
        backgroundPosition: "0 100%"
    }
}

export default Header;