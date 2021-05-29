type TrendItemType = {
    day: string,
    date: string,
    daytime_weather: string,
    daytime_icon: string,
    night_weather: string,
    night_icon: string,
    max_t: number,
    min_t: number,
    wind: string,
    wind_speed: string
}

type ReducerState = {
    isDay: boolean,
    now: {
        city: string,
        tip: string,
        weather: string,
        temperature: number,
        details: Array<Array<string>>
    },
    timeline: Array<{
        time: string,
        weather: string,
        temperature: number
    }>,
    trend: Array<TrendItemType>
}

type ReducerAction = {
    type: string,
    payload: Record<string, any>
}

export { ReducerState, ReducerAction, TrendItemType }