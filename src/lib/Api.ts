import axios from "axios";
import { FilterTypes, IEvent } from "./Types";

export const getEvents = async (type:FilterTypes=FilterTypes.All):Promise<IEvent[]>=>{
    const query = type !=FilterTypes.All?("?type="+type):""
    const response = await axios.get("http://localhost:3004/events"+query)
    return response.data
}