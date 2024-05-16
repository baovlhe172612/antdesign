import { post } from "../untils/request";

export const bookRoom = async(options) =>{
    const result = await post("book-room",options);
    return result
}