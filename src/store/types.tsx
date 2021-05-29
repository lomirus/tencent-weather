type HourType = {
    time: string,
    icon: string,
    temperature: number
}

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

type SuggestionType = {
    icon: string,
    state: string,
    for: string,
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
    hours: Array<HourType>,
    days: Array<DayType>,
    suggestions: Array<SuggestionType>
}

type ReducerAction = {
    type: string,
    payload: Record<string, any>
}

export { ReducerState, ReducerAction, HourType, DayType, SuggestionType }