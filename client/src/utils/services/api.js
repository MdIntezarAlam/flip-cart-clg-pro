import axios from 'axios'
const URL = "";
///signup user
export const AuthenticateSignup = async (data) => {
    try {
        return await axios.post(`${URL}/signup`, data)
    } catch (error) {
        console.log("Somthing went wrong while Signup user", error)
    }
}
///Login  user
export const AuthenticateLogin = async (data) => {
    try {
        return await axios.post(`${URL}/login`, data)
    } catch (error) {
        console.log("Somthing went wrong while Login users", error)
        return error.res
    }
}
