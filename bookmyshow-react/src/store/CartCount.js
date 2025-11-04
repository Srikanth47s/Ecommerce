import {createSlice} from "@reduxjs/toolkit"
// const initialState = []
let cartCountSlice = createSlice(
    {
        name: "cartItems",
        initialState: [],
        reducers:{
            additem: (state, action) => {
                // console.log('payload',action.payload)
                // debugger
            //   state.products = action.payload
                // state.push(action.payload)
                // console.log('state',state)
                // return state;
                return [...state,action.payload]
            },
            deleteItem:(state,action) => {
              return  state.filter((item)=> item.id != action.payload.id)            
            }
        }

    }
)

export const {additem , deleteItem} = cartCountSlice.actions

export default cartCountSlice.reducer