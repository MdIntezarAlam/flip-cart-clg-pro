import { products } from './constant/data.js'
import Product from './module/productSchema.js'

const DefaultData = async () => {
    try {
        await Product.insertMany(products)
        console.log("Data imported Successfully.")
    } catch (error) {
        console.log(error)
    }
}
export default DefaultData