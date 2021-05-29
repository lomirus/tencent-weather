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
        recent: [{
            weather: "Loading",
            icon: "qing",
            max_t: 0,
            min_t: 0,
        }, {
            weather: "Loading",
            icon: "qing",
            max_t: 0,
            min_t: 0,
        }],
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
        case "RECENT":  return Object.assign({}, state, { recent: action.payload });
        default: return state;
    }
}

export { reducer, initialState };