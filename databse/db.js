
import mongoose from "mongoose"
// import dotenv from 'dotenv'
// dotenv.config()

const connectDatabse = async (URL) => {
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Connected Successfuly!")
    } catch (error) {
        console.log(error)
    }
}
export default connectDatabse