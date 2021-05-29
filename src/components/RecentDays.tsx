import { useContext, CSSProperties } from 'react'

import Context from '../store/context'
import DayWeather from './RecentDays/DayWeather'

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

const RecentDays = () => {
    const [state, dispatch] = useContext(Context);

    return <div style={styles.main}>
        <DayWeather
            day="今天"
            isDaytime={state.isDaytime}
            weather={state.days[0].daytime_weather}
            icon={state.days[0].daytime_icon}
            temperature={`${state.days[0].max_t}/${state.days[0].min_t}°`} />
        <div style={styles.gap}></div>
        <DayWeather
            day="明天"
            isDaytime={state.isDaytime}
            weather={state.days[1].night_weather}
            icon={state.days[1].night_icon}
            temperature={`${state.days[1].max_t}/${state.days[1].min_t}°`} />
    </div>
}

export default RecentDays;