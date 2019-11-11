## ToDoApp

ToDoApp is a list making application that supports adding an image to a to-do list item.  This functionality attempts to solve a problem of purchasing a wrong brand of some item.

## Technologies used

- Node.js
- Mongoose
- Express
- EJS
- MVC file structure:  Models, Views, Controllers
- Bootstrap CSS framework
- Deployed via Heroku at https://todoapp-natalia.herokuapp.com/todos

This is a full CRUD app with 7 restful routes and 1 model.

## The approach taken

This is the very core of a project that is going to evolve.  I have laid out a skeleton that will have more features added to it.  

## Unsolved problems

The two most immediate unsolved problems that are going to be addressed in the next release are:
- toggling items between DONE and NOT DONE states on the index page instead of changing that on Edit page
- uploading imageses to the DB instead of providing an image link for a todo item

## Wireframes

Wireframes were done by hand on paper and are currently not present in this README.  I will use InVision later to do proper wireframing.

## Notes on future development of the project

- I will make a new model/schema and 7 more routes for Brain Dump, which will be a journaling section of the app.  Each entry will have a link to Create a ToDo page, so that it's easy to distill specific actions from a stream of consciousness that goes into the journal.
- I will also make a Useful Articles index route.  This page will contain a collection of links to articles on self-organization and time-management.
- Later, ToDos index page will be a 2-column layout, with the right column taking twice as much space as the left with the main list items.  The left column will show the current date, the current holiday and an inspirational image.
- Ultimately, there will be authentication added, so that different users will be able to create their own lists and share them on social media.
