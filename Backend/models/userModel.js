import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
    username : {
        type: String,
        required: true,
        unique: true
    },
    email : {
        type : String,
        required: true,
        unique: true
    },
    password : {
        type : String,
        required: true
    },
    image : {
        type : String,
        contentType: String
    },
    long : {
        type : Number
    },
    lat : {
        type : Number
    },
    alt : {
        type : Number
    },
    friends : {
        type : Array // array of string id's
    },
    guessed : {
        type: Array // array of bools for friends
    },
    points : {
        type : Number
    }
});

export const User = mongoose.model('User', userSchema);