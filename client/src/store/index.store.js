import {configureStore} from '@reduxjs/toolkit';

import productReducer from './slices/product.slice';
import userReducer from './slices/user.slice';
import cartReducer from './slices/cart.slice';
import menuReducer from './slices/menu.slice';

const store = configureStore({
    reducer: {
        products: productReducer,
        user: userReducer,
        cart: cartReducer,
        menu: menuReducer,
    }
});

export default store;