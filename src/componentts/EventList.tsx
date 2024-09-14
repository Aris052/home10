import { useContext, useEffect } from "react"
import { Context } from "../lib/Context"
import { getEvents } from "../lib/Api"
import { ActionTypes } from "../lib/Types"
import { Event } from "./Event"

export const EventList = () => {
    const context = useContext(Context)
    if(!context){
        throw new Error("out provider")
    }
    const {state,dispatch} = context
    useEffect(()=>{
        getEvents(state.currentFilter)
        .then(response=>{
            dispatch({type:ActionTypes.SetEvents,payload:response})
        })
    },[state.currentFilter])

    return <div className="list">
        {
            state.events.map(event=>
                <Event key={event.id} event = {event}/>
            )
        }
    </div>
}