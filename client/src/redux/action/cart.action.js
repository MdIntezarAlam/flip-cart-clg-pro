
import { ActionTypes, BASE_URL } from '../constant/ActionTypes'
import axios from 'axios'

export const addtoCartAction = (id, quentity) => {
    return async dispatch => {
        dispatch({
            type: ActionTypes.ADD_TO_CART_PENDING,
        })
        try {
            const { data } = await axios.get(`${BASE_URL}/product/${id}`)
            // console.log("cart res", data)
            dispatch({
                type: ActionTypes.ADD_TO_CART_SUCCESS,
                payload: {
                    ...data, quentity
                }
            })

        } catch (error) {
            dispatch({
                type: ActionTypes.ADD_TO_CART_FAILED,
                payload: error.message
            })
        }
    }
}

export const removeFromCart = (id) => {
    return async dispatch => {
        dispatch({
            type: ActionTypes.REMOVE_FROM_CART_SUCCESS,
            payload: id
        })
    }
}