// Dependencies
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const methodOverride = require("method-override")
const todosController = require("./controllers/todos.js") //I don't have that yet
const port = process.env.PORT || 3000;

// DB Setup
const dbName = "todos"
const MONGODB_URI =
    process.env.MONGODB_URI || `mongodb://localhost:27017/${dbName}`;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
mongoose.connection.once("open", () => {
    console.log("connected to mongo")
})
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use("/todos", todosController);
app.get("/", (req, res) => {
    res.redirect("/todos")
})


// Listener
app.listen(port, (req, res) => {
    console.log("listening on port ", port)
})