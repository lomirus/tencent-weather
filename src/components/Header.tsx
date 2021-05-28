import { useContext, CSSProperties } from 'react'

import Context from '../store/context'

const styles: Record<string, CSSProperties> = {
    main: {
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
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
        <div>{location}</div>
        <div>
            <span>{temperature}°</span>
            <span>{weather}</span>
            <div>
                {details.map(v => <span>{v}</span>)}
            </div>
        </div>
        <div>{tip}</div>
    </div>
}

export default Header;