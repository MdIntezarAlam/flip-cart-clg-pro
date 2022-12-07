import express from 'express'
import connectDatabase from './databse/db.js'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'
import DefaultData from './default.js'
import routers from './routes/routers.js'

const app = express()
const PORT = process.env.PORT || 8000
const URL = process.env.MONGODB_URI || `mongodb+srv://root:root@cluster0.kn9qet1.mongodb.net/E-Com-Flip-Cart?retryWrites=true&w=majority`


app.use(cors())
dotenv.config()
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/", routers)

connectDatabase(URL)

// Steps to Run Full Stack Application on Heroku
//download heroku
//cmd=> heroku
//insert frontend folder in to backend folder 
// change in backend file 
// =>for port=> const PORT = process.env.PORT || 8000
// for db => const URL = process.env.MONGODB_URI || `yaha par db ka path like ...`
// //both are should be in index file

//ye condition is only when backend file will run on production then client file wii run
if (process.env.NODE_ENV === 'production') {
    //1.before production we need to build the front-end file first
    //2.backend mai server.js file hona neccessary
    //3.package.json mai bhee server.js name neccessary
    //4.front-end ko build karne ke leya backend ka package.json main script like
      //  "scripts": {
      //  "start": "node server.js",
      //  "clint-install": "cd clint && npm install ",
      //  "client-build": "cd client && npm run build",
      //  "heroku-postbuild": "npm run client-install && npm run client-build"
      //    },
    // 6.and make a .gitignore file in main folder (backend file) 
    // and add  jo jo nahi send karna hai frontend and backend files both it 
        // node_modules => for backend
        // package-lock.json => for backend
        // .env => for backend
        // client/node_modules => for frontend
        // client/package-lock.json for frontend
    //7.jis bhee file mai localhost use ho raha hai usko eemty kre=> const URL = "";
    //8.find location and then build the client file
    app.use(express.static('client/build')) //finding frontend location and building
}


app.listen(PORT, () => {
    console.log(`server is listining on 🥰=>>>>>>>>>> ${PORT}`)
})

DefaultData()





