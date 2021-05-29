import { useContext, useEffect, CSSProperties } from 'react'

import Context from '../store/context'
import { ReducerAction } from '../store/types'

const styles: Record<string, CSSProperties> = {
    root: {
        color: "#FFFFFF",
        width: "100vw",
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

type PropsType = {
    location: string,
}

const Header = ({ location }: PropsType) => {
    const [state, dispatch] = useContext(Context);
    useEffect(() => {
        fetchWeatherNow(dispatch)
    }, [])
    return <div style={{ ...styles.root, ...getBackground(state.isDay) }}>
        <div style={styles.location}>{location}</div>
        <div style={styles.main}>
            <span style={styles.temperature}>{state.now.temperature}°</span>
            <span style={styles.weather}>{state.now.weather}</span>
            <div style={styles.details}>
                {state.now.details.map(v => <span key={v[0]}>{v[0]} {v[1]}</span>)}
            </div>
        </div>
        <div style={styles.tip}>光芒透过云缝，洒向大地~</div>
    </div>
}

async function fetchWeatherNow(dispatch: React.Dispatch<ReducerAction>) {
    const data = await fetch(`https://tianqiapi.com/free/day?appid=13711624&appsecret=Z284b9Hc&city=重庆`)
    const json = await data.json();
    console.log(json)
    dispatch({
        type: "NOW",
        payload: {
            temperature: json.tem,
            weather: json.wea,
            details: [
                [json.win, json.win_speed]
            ]
        }
    })
    console.log(json.now)
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