const mongoose = require("mongoose")
const Schema = mongoose.Schema

const toDoSchema = new Schema({
    title: { type: String, required: true },
    body: String,
    img: String,
    completed: { type: Boolean, default: false }
},
    { timestamps: true });

const ToDo = mongoose.model("ToDo", toDoSchema);
module.exports = ToDo;