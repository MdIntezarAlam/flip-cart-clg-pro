import express from 'express'
import connectDatabase from './databse/db.js'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'
import DefaultData from './default.js'
import routers from './routes/routers.js'
import path from 'path'

const app = express()
const PORT = process.env.PORT || 8000
const URL = process.env.MONGODB_URI || "mongodb+srv://root:root@cluster0.kn9qet1.mongodb.net/E-Com-Flip-Cart?retryWrites=true&w=majority"


app.use(cors())
dotenv.config()
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/", routers)

connectDatabase(URL)

// app.use(express.static('client/build')) //finding frontend location and building
app.use(express.static(path.join(__dirname, './client/build')))
app.get('*', function (req, res) {
    res.sendFile(path.json(__dirname, './client/build/index.html'))
});

app.listen(PORT, () => {
    console.log(`server is listining on 🥰=>>>>>>>>>> ${PORT}`)
})

DefaultData()





