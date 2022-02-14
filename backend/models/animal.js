import mongoose from "mongoose";

const animalSchema = mongoose.Schema({
    name: String,
    classification: String,
    race : String,
    weight : Number,
    height : Number,
    health: String,
    age : Number,
    registerDate : {type:Date, default:Date.now},
    dbStatus: Boolean,
});
const animal= mongoose.model("animal",animalSchema);
export default animal;
