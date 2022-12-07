import User from "../module/UserSchema.js"
//Signup Users
export const UserSignup = async (req, res) => {
    try {
        const existUser = await User.findOne({ username: req.body.username })
        if (existUser) {
            return res.status(401).json({ message: "Username already Exist!" })
        }
        const user = req.body;
        const newUsers = new User(user);
        await newUsers.save()
        res.status(200).json({ message: user })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//Login Users
export const UserLogin = async (req, res) => {
    try {
        const username = req.body.username
        const password = req.body.password
        //findone and login
        let user = await User.findOne({
            username: username,
            password: password
        })
        //if user is not already there then login else return invalid users
        if (user) {
            return res.status(200).json({ data: user })
        }
        else {
            return res.status(401).json("Invalid user ")
        }
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
