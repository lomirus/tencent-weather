import { ReactElement, useReducer } from "react";

import Context from './store/context';
import { reducer, initialState } from './store/reducer';

import Header from './components/Header'
import Recent from './components/Recent'
import Suggestions from './components/Suggestions'
import Timeline from './components/Timeline'
import Trend from './components/Trend'
import Footer from './components/Footer'

const App = (): ReactElement => (
    <Context.Provider value={useReducer(reducer, initialState)}>
        <Header />
        <Recent />
        <Timeline />
        <Trend />
        <Suggestions />
        <Footer />
    </Context.Provider>
)

export default App;