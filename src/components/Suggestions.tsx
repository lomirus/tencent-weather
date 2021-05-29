import { useContext, Dispatch, CSSProperties, useEffect } from 'react'

import Context from '../store/context'
import { ReducerAction } from '../store/types'

const styles: Record<string, CSSProperties> = {
    main: {
        
    }
}

type PropsType = {

}

const Suggestions = ({}: PropsType) => {
    const [state, dispatch] = useContext(Context);
    useEffect(() => {
        fetchSuggestions(dispatch)
    })
    return <div style={styles.main}>
        {state.suggestions.map(s => (<div>
            <img src={require(`../assets/suggestions/${s.icon}.svg`).default} />
            <span>{s.state}</span>
            <span>{s.for}</span>
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