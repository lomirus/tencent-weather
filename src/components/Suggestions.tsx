import { useContext, Dispatch, CSSProperties, useEffect } from 'react'

import Context from '../store/context'
import { ReducerAction } from '../store/types'

const styles: Record<string, CSSProperties> = {
    main: {
        marginTop: "10px",
        display: "flex",
        flexDirection: "column",
        height: "200px",
        flexWrap: "wrap",
        backgroundColor: "#FFF"
    },
    item: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        height: "98px",
        border: "1px solid #e6e6e6"
    },
    icon: {
        margin: "15px 0 10px 0"
    },
    state: {
        fontSize: "14px",
        color: "#434343",
    },
    for: {
        color: "#999",
        fontSize: "12px"
    }
}

type PropsType = {

}

const Suggestions = ({}: PropsType) => {
    const [state, dispatch] = useContext(Context);
    useEffect(() => {
        fetchSuggestions(dispatch)
    }, [])
    return <div style={styles.main}>
        {state.suggestions.map(s => (<div key={s.for} style={styles.item}>
            <img style={styles.icon} src={require(`../assets/suggestions/${s.icon}.svg`).default} />
            <span style={styles.state}>{s.state}</span>
            <span style={styles.for}>{s.for}</span>
        </div>))}
    </div>
}

async function fetchSuggestions(dispatch: Dispatch<ReducerAction>) {
    const data = await fetch("/api/v1/weather/suggestions")
    const json = await data.json();
    dispatch({
        type: "SUGGESTIONS",
        payload: json
    })
}

export default Suggestions;