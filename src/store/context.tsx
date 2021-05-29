import { createContext, Dispatch } from "react";

import { ReducerState, ReducerAction } from './types'
import { initialState } from './reducer'

const Context = createContext<[ReducerState, Dispatch<ReducerAction>]>([initialState, () => {}]);
export default Context;