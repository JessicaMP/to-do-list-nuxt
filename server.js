const cors = require('cors');
const express = require('express'),
  app = express(),
  port = process.env.PORT || 8000,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'), //created model loading here
  bodyParser = require('body-parser');

mongodbUri = 'mongodb://JessicaMP:Tismart2018@ds251210.mlab.com:51210/api-todolist'
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb'); 

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

const routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);