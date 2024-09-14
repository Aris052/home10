import { useReducer } from "react"
import { EventList } from "./EventList"
import { Filter } from "./Filter"
import { reducer } from "../lib/reducer"
import { InitialState } from "../lib/initialState"
import { Context } from "../lib/Context"

export const Theather = () => {
    const[state,dispatch]=useReducer(reducer,InitialState)

    return <div>
        <Context.Provider value={{state,dispatch}}>
            <Filter/>
            <EventList/>
        </Context.Provider>
    </div>
}