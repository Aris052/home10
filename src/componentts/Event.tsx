import axios from 'axios'
import { useContext } from 'react'
import { Context } from '../lib/Context'
import { ActionTypes, IEvent } from "../lib/Types"

interface IProps {
    event: IEvent
}


export const Event: React.FC<IProps> = ({ event }) => {
    const context = useContext(Context)
    if (!context) {
        throw new Error("out of Provider")
    }
    const { dispatch } = context

    const handleDelete = (id: number | string) => {
        axios.delete(`http://localhost:3004/events/${id}`)
            .then(() => {
                dispatch({ type: ActionTypes.RemoveEvent, payload: id })
            })
    }

    return <div>
        <img src={event.cover} />
        <p>{event.title}</p>
        <p>{event.date} at {event.time}</p>
        <strong>{event.type}</strong>
        <p>By {event.composer}</p>
        <button onClick={() => handleDelete(event.id)}>DELETE</button>
    </div>
}