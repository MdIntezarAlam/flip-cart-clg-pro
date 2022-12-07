import { ActionTypes, BASE_URL } from "../constant/ActionTypes"
import axios from 'axios'

export const getProductAction = () => {
    return async dispatch => {
        dispatch({
            type: ActionTypes.GET_PRODUCT_PENDING,
        })
        try {
            const res = await axios.get(`${BASE_URL}/products`)
            // console.log("Api-responce in Action file", res) 
            dispatch({
                type: ActionTypes.GET_PRODUCT_SUCCESS,
                payload: {
                    data: res.data
                }
            })
        } catch (error) {
            dispatch({
                type: ActionTypes.GET_PRODUCT_FAIL,
                payload: {
                    message: "Kuch Tho garbar hai baba responce api mai"
                }
            })
        }
    }
}
// //get Product Details By Id
export const getProductByIdAction = (id) => {
    return async dispatch => {
        dispatch({
            type: ActionTypes.GET_PRODUCT_BY_ID_PENDING,
        })
        try {
            const { data } = await axios.get(`${BASE_URL}/product/${id}`)
            // console.log("res with_id in action files=>>>>>>", data)
            dispatch({
                type: ActionTypes.GET_PRODUCT_BY_ID_SUCESS,
                payload: data
            })
        } catch (error) {
            dispatch({
                type: ActionTypes.GET_PRODUCT_BY_ID_FAIL,
                payload: error.message
            })
        }
    }
}

