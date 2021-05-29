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
        days: Array.from({ length: 7 }, () => {
            return {
                day: "Loading",
                date: "Loading",
                daytime_weather: "Loading",
                daytime_icon: "qing",
                night_weather: "Loading",
                night_icon: "qing",
                max_t: 0,
                min_t: 0,
                wind: "Loading",
                wind_speed: 0
            }
        }),
        hours: Array.from({ length: 24 }, () => {
            return {
                time: "Loading",
                icon: "qing",
                temperature: 0
            }
        }),
        suggestions: []
    }
})()

const reducer = (state: ReducerState, action: ReducerAction): ReducerState => {
    switch (action.type) {
        case "NOW": return Object.assign({}, state, { now: action.payload });
        case "HOURS": return Object.assign({}, state, { hours: action.payload });
        case "DAYS": return Object.assign({}, state, { days: action.payload });
        case "SUGGESTIONS": return Object.assign({}, state, { suggestions: action.payload });
        default: return state;
    }
}

export { reducer, initialState };