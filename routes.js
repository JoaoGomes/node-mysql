const express = require('express');
const db = require("./db");
const routes = express.Router();

routes.get("/authors", db.selectAuthors);
routes.post('/authors', db.insertAuthors);
routes.put('/authors/:id', db.updateAuthor );
routes.delete('/authors/:id', db.deleteAuthor);

module.exports = routes;
