import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type:String, required:true, trim:true},
    email: {type:String, required:true, unique:true},
    password: {type:String, required:true, trim:true},
    join: {type:Date, default: Date.now},
})

// model
const UserModel = mongoose.model('User', userSchema);

export default UserModel;