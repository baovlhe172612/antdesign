import { get, post } from "../untils/request"


export const getListRoom = async ( options )=>{
    const result = await get("rooms");
    return result;
}
export const createRoom = async ( options )=>{
    const result = await post("rooms", options);
    return result;
}