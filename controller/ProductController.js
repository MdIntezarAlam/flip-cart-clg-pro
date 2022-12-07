import Product from '../module/productSchema.js'

export const getProducts = async (req, res) => {
    try {
        const product = await Product.find({}) //pass emty obj for finding all products
        if (product) {
            res.status(200).json(product)
        }
    } catch (error) {
        res.status(400).json(error)
    }
}

// export const getProductDetails = async (req, res) => {
//     try {
//         const product = req.params.id
//         const Products = await Product.findOne({ 'id': product })
//         if (Products) {
//             res.status(200).json(Products)
//         }
//     } catch (error) {
//         res.status(400).json(error)
//     }
// }
export const getProductDetails = async (req, res) => {
    try {
        const id = req.params.id
        const product = await Product.findOne({ 'id': id })
        res.status(200).json(product)

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}