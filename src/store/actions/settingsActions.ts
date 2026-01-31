import { CHANGE_ROLE } from "../types"

export const changeRole = (payload:string)=>({
    type: CHANGE_ROLE,
    payload:payload
})