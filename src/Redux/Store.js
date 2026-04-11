import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import userReducer from './userSlice'
import productReducer from './productSlice'
import searchReducer from './searchSlice'

 const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    products: productReducer,
    search: searchReducer,


  },
})
export default store;