import { ReducerState, ReducerAction } from './types'

const initialState: ReducerState = (() => {
    const now = new Date();
    const nowHour = now.getHours();
    return {
        isDay: nowHour < 19 && nowHour > 5,
        now: {
            city: "",
            temperature: 0,
            weather: "",
            details: [],
            tip: ""
        },
        timeline: [],
        trend: [],
        suggestions: []
    }
})()

const reducer = (state: ReducerState, action: ReducerAction): ReducerState => {
    switch (action.type) {
        case "NOW": return Object.assign({}, state, { now: action.payload });
        case "TIMELINE":  return Object.assign({}, state, { timeline: action.payload });
        case "TREND":  return Object.assign({}, state, { trend: action.payload });
        case "SUGGESTIONS":  return Object.assign({}, state, { suggestions: action.payload });
        default: return state;
    }
}

export { reducer, initialState };