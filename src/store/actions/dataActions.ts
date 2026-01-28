import { INCREASE_LIKES_BY_AMOUNT, INCREASE_LIKES_BY_ONE } from "../types";

export const increaseTotalLikes = () => ({
  type: INCREASE_LIKES_BY_ONE,
});

export const increaseTotalLikesByAmount = (payload:Number)=>({
    type:INCREASE_LIKES_BY_AMOUNT,
    payload:payload
})