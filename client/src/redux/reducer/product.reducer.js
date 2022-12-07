import { ActionTypes, responceTypes } from "../constant/ActionTypes"


const initilaState = {
    status: '',
    loading: false,
    message: null,
    products: [],
    selectedProduct: null
}
export const productReducer = (state = initilaState, action) => {
    switch (action.type) {
        case ActionTypes.GET_PRODUCT_PENDING:
            state = {
                ...state,
                loading: true,
                status: responceTypes.pending,
                message: "Please Wait While Fetching Products"
            }
            return state
        case ActionTypes.GET_PRODUCT_SUCCESS:
            state = {
                ...state,
                loading: false,
                status: responceTypes.success,
                message: "Products are fetched Successfylly!",
                products: action.payload.data,
            }
            return state
        case ActionTypes.GET_PRODUCT_FAIL:
            state = {
                ...state,
                loading: false,
                status: responceTypes.error,
                message: action.payload.message,
                products: []
            }
            return state

        // //product details with id
        case ActionTypes.GET_PRODUCT_BY_ID_PENDING:
            state = {
                ...state,
                status: responceTypes.pending,
                loading: true,
                message: "products are fetching ...",
            }
            return state
        case ActionTypes.GET_PRODUCT_BY_ID_SUCESS:
            state = {
                ...state,
                status: responceTypes.success,
                message: "Fetched Successfully",
                loading: false,
                selectedProduct: action.payload.data
            }
            return state
        case ActionTypes.GET_PRODUCT_BY_ID_FAIL:
            state = {
                ...state,
                status: responceTypes.error,
                message: action.payload.message,
                loading: false,
                selectedProduct: null
            }
            return state
        default: return state
    }
}

export const getProductDetails=(state = { product: {} }, action) => {
    switch (action.type) {
        case ActionTypes.GET_PRODUCT_BY_ID_PENDING:
            return { loading: true }
        case ActionTypes.GET_PRODUCT_BY_ID_SUCESS:
            return { loading: false, product: action.payload }
        case ActionTypes.GET_PRODUCT_BY_ID_FAIL:
            return { loading: false, error: action.payload }
        case ActionTypes.GET_PRODUCT_BY_ID_RESET:
            return { product: {} }
        default: return state
    }
}