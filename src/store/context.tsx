import { createContext, Dispatch } from "react";

import { ReducerState, ReducerAction } from './types'

const Context = createContext<[ReducerState, Dispatch<ReducerAction>]>([{}, () => {}]);
export default Context;