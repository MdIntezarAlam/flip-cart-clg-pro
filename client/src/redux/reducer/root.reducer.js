import { combineReducers } from 'redux'
import { productReducer, getProductDetails } from './product.reducer'
import cartReducer from './cart.reducer'
const rootReducer = combineReducers({
    productReducer,
    getProductDetails,
    cartReducer
})
export default rootReducer