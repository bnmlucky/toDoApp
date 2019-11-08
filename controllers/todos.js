// Dependecies
const express = require("express")
const router = express.Router();

// Model
const ToDo = require("../models/todos.js")

// Routes:

// Index
router.get("/", (req, res) => {
    ToDo.find({}, (error, allToDos) => {
        if (error) {
            res.send(error)
        } else {
            res.render("index.ejs", {
                todos: allToDos
            })
        }
    })
})

// New
router.get("/new", (req, res) => {
    res.render("new.ejs")
})

// Edit

router.get("/:id/edit", (req, res) => {
    ToDo.findById(req.params.id, (error, foundToDo) => {
        if (error) {
            console.log(error)
        } else {
            res.render("edit.ejs", {
                todos: foundToDo
            })
        }
    })
})

// Show
router.get("/:id", (req, res) => {
    ToDo.findById(req.params.id, (err, foundToDo) => {
        res.render("show.ejs", {
            todos: foundToDo
        })
    })
})

// Create
router.post("/", (req, res) => {
    if (req.body.completed === "on") {
        req.body.completed = true
    } else {
        req.body.completed = false
    }
    ToDo.create(req.body, (error, createdToDo) => {
        if (error) {
            res.send(error)
        } else {
            res.redirect("/todos")
        }
    })
})

// Delete
router.delete("/:id", (req, res) => {
    ToDo.findByIdAndDelete(req.params.id, (error, deletedToDo) => {
        if (error) {
            console.log(error)
        } else {
            res.redirect("/todos")
        }
    })
})

// Put/Update
router.put("/:id", (req, res) => {
    if (req.body.completed === "on") {
        req.body.completed = true;
    } else {
        req.body.completed = false;
    }
    ToDo.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, updatedToDo) => {
        if (error) {
            console.log(error)
        } else {
            res.redirect("/todos")
        }
    })
})


module.exports = router;