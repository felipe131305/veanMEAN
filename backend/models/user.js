import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : String,
    tel : String,
    age : Number,
    document : String,
    registerDate : {type: Date, default: Date.now},
    dbStatus : Boolean,
});

const user = mongoose.model("users",userSchema);
export default user;