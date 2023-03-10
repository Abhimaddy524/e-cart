import {createSlice} from "@reduxjs/toolkit"
const cartSlice = createSlice({
    name: "cartItems",
    initialState:{ value: [] },
    reducers: {
        add: (state,action) => {
            state.value.push(action.payload)
        }
    }
})

export const { add } =cartSlice.actions

export const cartSelector =(state)=>state.cartItems.value;

export default cartSlice.reducer