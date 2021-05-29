type ReducerState = {
    isDay: boolean,
    now: {
        city: string,
        tip: string,
        weather: string,
        temperature: number,
        details: Array<Array<string>>
    }
}

type ReducerAction = {
    type: string,
    payload: Record<string, any>
}

export { ReducerState, ReducerAction }