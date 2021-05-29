type DayType = {
    day: string,
    date: string,
    daytime_weather: string,
    daytime_icon: string,
    night_weather: string,
    night_icon: string,
    max_t: number,
    min_t: number,
    wind: string,
    wind_speed: number
}

type ReducerState = {
    isDaytime: boolean,
    days: Array<DayType>,
}

type ReducerAction = {
    type: string,
    payload: Record<string, any>
}

const initialState: ReducerState = (() => {
    const now = new Date();
    const nowHour = now.getHours();
    return {
        isDaytime: nowHour < 19 && nowHour > 5,
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
    }
})()

const reducer = (state: ReducerState, action: ReducerAction): ReducerState => {
    switch (action.type) {
        case "NOW": return Object.assign({}, state, { now: action.payload });
        case "DAYS": return Object.assign({}, state, { days: action.payload });
        default: return state;
    }
}

export { reducer, initialState, ReducerAction, ReducerState };