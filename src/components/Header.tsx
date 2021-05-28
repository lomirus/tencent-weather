import { useContext, CSSProperties } from 'react'

import Context from '../store/context'

const styles: Record<string, CSSProperties> = {
    main: {
        color: "#FFFFFF",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "linear-gradient(-90deg,#313877,#44abec)",
        height: "470px"
    }
}

type PropsType = {
    location: string,
    temperature: number,
    weather: string,
    details: string[],
    tip: string
}

const Header = ({ location, temperature, weather, details, tip }: PropsType) => {
    const [state, dispatch] = useContext(Context);
    return <div style={styles.main}>
        <div style={{
            margin: "18px 0 0 6px"
        }}>{location}</div>
        <div style={{
            marginTop: "78px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
            <span style={{
                fontSize: "62px"
            }}>{temperature}°</span>
            <span style={{
                marginTop: "8px",
                fontSize: "22px"
            }}>{weather}</span>
            <div style={{
                marginTop: "10px",
                fontSize: "14px"
            }}>
                {details.map(v => <span key={v}>{v}</span>)}
            </div>
        </div>
        <div style={{
            marginTop: "50px",
            fontSize: "16px"
        }}>{tip}</div>
    </div>
}

export default Header;