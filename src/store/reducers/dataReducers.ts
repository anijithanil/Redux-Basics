import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalLikes:100
}

export const dataReducer = createSlice({
    name:'dataSlice',
    initialState:initialState,
    reducers:{
        increaseTotalLikes:(state)=>{
            state.totalLikes+=1
        },
        increaseTotalLikesByAmount:(state)=>{
            state.totalLikes+=20
        }
    }
})

export const {increaseTotalLikes,increaseTotalLikesByAmount} = dataReducer.actions