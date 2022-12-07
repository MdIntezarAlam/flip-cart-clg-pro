import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
        min: [3, "Name Should be atleat three char"],
        man: [12, "Name Should not be more than 12 char"]
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        min: [3, "Name Should be atleat three char"],
        man: [12, "Name Should not be more than 12 char"]
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
})

const User = mongoose.model("user", userSchema)

export default User