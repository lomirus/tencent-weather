import { ReactElement, useReducer } from "react";

import Context from './store/context';
import { reducer, initialState } from './store/reducer';

import Header from './components/Header'
import Recent from './components/Recent'
import Suggestions from './components/Suggestions'
import Timeline from './components/Timeline'
import Trend from './components/Trend'

const App = (): ReactElement => (
    <Context.Provider value={useReducer(reducer, initialState)}>
        <Header
            location="北京市 海淀区"
            temperature={18}
            weather="多云"
            details={["湿度 51%", "西风 0级"]}
            tip="光芒透过云缝，洒向大地~" />
        <Recent today={{}} tommorrow={{}} />
        <Timeline data={[{
            time: "07:00",
            weather: "qing",
            temperature: 18
        }, {
            time: "08:00",
            weather: "qing",
            temperature: 18
        }, {
            time: "09:00",
            weather: "qing",
            temperature: 18
        }, {
            time: "10:00",
            weather: "qing",
            temperature: 18
        }, {
            time: "11:00",
            weather: "qing",
            temperature: 18
        }, {
            time: "12:00",
            weather: "qing",
            temperature: 18
        }, {
            time: "13:00",
            weather: "qing",
            temperature: 18
        }, {
            time: "14:00",
            weather: "qing",
            temperature: 18
        }, {
            time: "15:00",
            weather: "qing",
            temperature: 18
        }, {
            time: "16:00",
            weather: "qing",
            temperature: 18
        }, {
            time: "17:00",
            weather: "qing",
            temperature: 18
        }, {
            time: "18:00",
            weather: "qing",
            temperature: 18
        }]} />
        <Trend
            days={[
                {
                    day: "昨天",
                    date: "05/28",
                    weather: "qing"
                }, {
                    day: "今天",
                    date: "05/29",
                    weather: "qing"
                }, {
                    day: "明天",
                    date: "05/30",
                    weather: "qing"
                }, {
                    day: "后天",
                    date: "05/31",
                    weather: "qing"
                }, {
                    day: "周二",
                    date: "06/01",
                    weather: "qing"
                }, {
                    day: "周三",
                    date: "06/01",
                    weather: "qing"
                }, {
                    day: "周四",
                    date: "06/01",
                    weather: "qing"
                }, {
                    day: "周五",
                    date: "06/01",
                    weather: "qing"
                }]}
            nights={[
                {
                    wind: "西北风",
                    weather: "qing",
                    level: 4
                }, {
                    wind: "西北风",
                    weather: "qing",
                    level: 4
                }, {
                    wind: "西北风",
                    weather: "qing",
                    level: 4
                }, {
                    wind: "西北风",
                    weather: "qing",
                    level: 4
                }, {
                    wind: "西北风",
                    weather: "qing",
                    level: 4
                }, {
                    wind: "西北风",
                    weather: "qing",
                    level: 4
                }, {
                    wind: "西北风",
                    weather: "qing",
                    level: 4
                }, {
                    wind: "西北风",
                    weather: "qing",
                    level: 4
                }]} />
        <Suggestions />
    </Context.Provider>
)

export default App;