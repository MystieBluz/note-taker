const express = require("express");

// Import our modular routers for /tips path and /feedback path.
const notesRouter = require("./htmlRoute");
const app = express();

app.use ("/notes", notesRouter);

module.exports = app;