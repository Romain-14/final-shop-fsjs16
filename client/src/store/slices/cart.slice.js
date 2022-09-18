import { createSlice } from "@reduxjs/toolkit";
import { calculateTotalAmount } from "../../helpers/cart";

const cartLS = JSON.parse(localStorage.getItem('cart')) === null ? [] : JSON.parse(localStorage.getItem('cart'));


const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        cart: cartLS,
        totalPrice: calculateTotalAmount(cartLS),
    },
    reducers:{
        modifyCart(state, action){
            console.log('action.payload',action.payload)
            state.cart = action.payload.cart;
            state.totalPrice = action.payload.totalPrice;
        },
        cleanCart(state, action){
            state.cart = [];
            state.totalPrice = 0;
        },
    }
})

export const {modifyCart, cleanCart} = cartSlice.actions;

export default cartSlice.reducer;