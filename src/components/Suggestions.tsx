import { useState, Dispatch, CSSProperties } from 'react'

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

type SuggestionType = {
    icon: string,
    state: string,
    for: string,
}

const Suggestions = () => {
    const [state, setState] = useState<Array<SuggestionType>>([]);
    fetchSuggestions(setState)

    return <div style={styles.main}>
        {state.map((v: SuggestionType) => (<div key={v.for} style={styles.item}>
            <img style={styles.icon} src={require(`../assets/suggestions/${v.icon}.svg`).default} />
            <span style={styles.state}>{v.state}</span>
            <span style={styles.for}>{v.for}</span>
        </div>))}
    </div>
}

async function fetchSuggestions(setState: Dispatch<React.SetStateAction<Array<SuggestionType>>>) {
    const data = await fetch("/api/v1/weather/suggestions")
    const json = await data.json();
    setState(json)
}

export default Suggestions;