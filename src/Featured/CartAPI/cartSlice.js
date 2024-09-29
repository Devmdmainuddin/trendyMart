
import { createSlice } from "@reduxjs/toolkit";




export const cartslice = createSlice({

    name: "cart",
    initialState: {
        cartItem: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],

    },
    reducers: {
        addToCart(state, action) {

            let findProduct = state.cartItem.findIndex((item) => item._id == action.payload._id)
            if (findProduct !== -1) {
                state.cartItem[findProduct].qun += action.payload.qun ? action.payload.qun : 1;
                localStorage.setItem("cart", JSON.stringify(state.cartItem));
            } else {
                state.cartItem = [...state.cartItem, action.payload]
                localStorage.setItem("cart", JSON.stringify(state.cartItem));

            }

        },
        deleteItem: (state, action) => {
            state.cartItem = state.cartItem.filter(item => item._id !== action.payload);
            localStorage.setItem("cart", JSON.stringify(state.cartItem));
        },
        removeProduct: (state, action) => {
            state.cartItem.splice(action.payload, 1)
            localStorage.setItem("cart", JSON.stringify(state.cartItem));
        },
        changeQuantity(state, action) {
            const { qun } = action.payload;
            const indexProctId = state.cartItem.findIndex((item) => item._id == action.payload._id)
            if (qun > 0) {
                state.cartItem[indexProctId].qun = qun;
            } else {
                state.cartItem = state.cartItem.filter(item => item._id !== action.payload._id);
                // delete state.items[indexProctId]
            }
            localStorage.setItem("cart", JSON.stringify(state.cartItem));
        },
        // Clear all items in the cart
        clearCart(state) {
            state.cartItem = [];
            localStorage.setItem("cart", JSON.stringify(state.cartItem));
        }

        // produceDecement:(state,action)=>{
        //     if(state.cartItem[action.payload].qun>1)

        // }


        // changeQuantity(state, action) {
        //     let findProduct = state.cartItem.findIndex(item => item.id === action.payload.id)
        //     if (findProduct > 0) {
        //         state.cartItem[findProduct].qun += 1;
        //     } else {
        //         state.cartItem = (state.cartItem).filter(item => item.id !== action.payload.id);
        //         // delete state.items[indexProctId]
        //     }
        //     localStorage.setItem("cart", JSON.stringify(state.cartItem));
        // }
    }
})

export const { addToCart, deleteItem, removeProduct, changeQuantity,clearCart  } = cartslice.actions
export default cartslice.reducer;
