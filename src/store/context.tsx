import { createContext, Dispatch } from "react";

import { ReducerState, ReducerAction, initialState } from './reducer'

const Context = createContext<[ReducerState, Dispatch<ReducerAction>]>([initialState, () => {}]);
export default Context;