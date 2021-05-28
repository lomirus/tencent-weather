import { useContext, CSSProperties } from 'react'

import Context from '../store/context'
import DayWeather from './Recent/DayWeather'

const styles: Record<string, CSSProperties> = {
    main: {
        background: "#fff",
        borderBottom: "1px solid #e4e4e4",
        fontSize: "14px",
        color: "#434343",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        height: "103px",
        position: "relative"
    },
    gap: {
        position: "absolute",
        width: "1px",
        height: "52px",
        backgroundColor: "#f0f0f0",
        top: "26px",
        left: "50%"
    }
}

type PropsType = {
    today: Record<string, string>,
    tommorrow: Record<string, string>
}

const Recent = ({ today, tommorrow }: PropsType) => {
    const [state, dispatch] = useContext(Context);
    return <div style={styles.main}>
        <DayWeather day="今天" weather="多云" temperature="29/16°"/>
        <div style={styles.gap}></div>
        <DayWeather day="明天" weather="多云" temperature="28/15°"/>
    </div>
}

export default Recent;