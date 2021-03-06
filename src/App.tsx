import { ReactElement, useReducer, useContext, Dispatch } from "react";

import Context from './store/context'
import { ReducerAction } from './store/reducer'
import { reducer, initialState } from './store/reducer';

import Header from './components/Header'
import RecentDays from './components/RecentDays'
import Suggestions from './components/Suggestions'
import RecentHours from './components/RecentHours'
import RecentWeek from './components/RecentWeek'
import Footer from './components/Footer'

const App = (): ReactElement => {
    const [state, dispatch] = useContext(Context);
    if (state.days[0].day === "Loading")
        fetchDailyWeather(dispatch)
    return (
        <div>
            <Header />
            <RecentDays />
            <RecentHours />
            <RecentWeek />
            <Suggestions />
            <Footer />
        </div>
    )
}
const ContextApp = (): ReactElement => (
    <Context.Provider value={useReducer(reducer, initialState)}>
        <App />
    </Context.Provider>
)

async function fetchDailyWeather(dispatch: Dispatch<ReducerAction>) {
    const data = await fetch("/api/v1/weather/days")
    const json = await data.json();
    dispatch({
        type: "DAYS",
        payload: json
    })
}

export default ContextApp;