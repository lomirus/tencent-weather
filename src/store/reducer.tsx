import { ReducerState, ReducerAction } from './types'

const initialState: ReducerState = {

}

const reducer = (state: ReducerState, action: ReducerAction): ReducerState => {
    switch (action.type) {
        default: return state;
    }
}

export { reducer, initialState };