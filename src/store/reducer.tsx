import { ReducerState, ReducerAction } from './types'

const initialState: ReducerState = (() => {
    const now = new Date();
    const nowHour = now.getHours();
    return {
        isDay: nowHour < 19 && nowHour > 5,
    }
})()

const reducer = (state: ReducerState, action: ReducerAction): ReducerState => {
    switch (action.type) {
        default: return state;
    }
}

export { reducer, initialState };