import { createSlice } from "@reduxjs/toolkit";

const wishlist = createSlice({
    name: 'wishlist',
    initialState: [],
    reducers: {
        //actions are provided inside reducers ==>> logic to update the 

        addToWishlist: (state, action) => {
            state.push(action.payload)
        },
        //remove item from the state 

        removeItemFromWishlist: (state, action) => {
            return state.filter(item => item.id != action.payload)
        }

    }
})

export const { addToWishlist, removeItemFromWishlist } = wishlist.actions;
export default wishlist.reducer