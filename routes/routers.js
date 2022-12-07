import express from 'express'
import { getProductDetails, getProducts } from '../controller/ProductController.js'
import { UserLogin, UserSignup } from '../controller/UserController.js'

const routers = express.Router()

routers.post("/signup", UserSignup)
routers.post("/login", UserLogin)
routers.get("/products", getProducts)
routers.get("/product/:id", getProductDetails)


export default routers