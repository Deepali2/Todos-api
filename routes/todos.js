const express = require('express');
const router = express.Router();
const db = require('../models');
const helpers = require('../helpers/todos');

router.route('/')
.get(helpers.getTodos) //list all todos
.post(helpers.createTodo) //create a todo

router.route('/:todoId')
.get(helpers.getTodo) //Retrieve a todo
.put(helpers.updateTodo)//Update a todo
.delete(helpers.deleteTodo) //Delete a todo


module.exports = router;