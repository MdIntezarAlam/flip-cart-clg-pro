import { ActionTypes, responceTypes } from "../constant/ActionTypes"



const initialState = {
    cartItems: [],
    status: '',
    message: null,
    total: 0
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TO_CART_PENDING:
            state = {
                ...state,
                status: responceTypes.pending,
                message: "Adding to cart..."
            }
            return state

        case ActionTypes.ADD_TO_CART_SUCCESS:

            const item = action.payload;
            const ifExist = state.cartItems.find(product => product.id === item.id);

            if (ifExist) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(data => data.product === ifExist.product ? item : data)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }

        case ActionTypes.REMOVE_FROM_CART_SUCCESS:
            return {
                ...state,
                cartItems: state.cartItems.filter(product => product.id !== action.payload)
            }
        
        //optional 
        case ActionTypes.ADD_TO_CART_FAILED:
            state = {
                ...state,
                status: responceTypes.error,
                message: action.payload.message
            }
            return state
        default: return state
    }

}
export default cartReducer;