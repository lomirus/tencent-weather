type ReducerState = {
    isDay: boolean,
    now: {
        temperature: number,
        weather: string,
        details: Array<Array<string>>
    }
}

type ReducerAction = {
    type: string,
    payload: Record<string, any>
}

export { ReducerState, ReducerAction }