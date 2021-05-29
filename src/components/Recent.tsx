import { useContext, Dispatch, useEffect, CSSProperties } from 'react'

import Context from '../store/context'
import DayWeather from './Recent/DayWeather'
import { ReducerAction } from '../store/types'

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

const Recent = () => {
    const [state, dispatch] = useContext(Context);
    useEffect(() => {
        fetchRecent(dispatch)
    }, [])
    return <div style={styles.main}>
        <DayWeather
            day="今天"
            weather={state.recent[0].weather}
            icon={state.recent[0].icon}
            temperature={`${state.recent[0].max_t}/${state.recent[0].min_t}°`} />
        <div style={styles.gap}></div>
        <DayWeather
            day="明天"
            weather={state.recent[1].weather}
            icon={state.recent[1].icon}
            temperature={`${state.recent[1].max_t}/${state.recent[1].min_t}°`} />
    </div>
}

async function fetchRecent(dispatch: Dispatch<ReducerAction>) {
    const data = await fetch("/api/v1/weather/recent")
    const json = await data.json();
    dispatch({
        type: "RECENT",
        payload: json
    })
    console.log(json)
}

export default Recent;