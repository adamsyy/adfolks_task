

const sqlite3 = require('sqlite3');
const express = require("express");
var app = express();

parametersRoute = express.Router();

const bodyParser = require('body-parser');
const { create_subject } = require('./controller/create_subject');
const { subject_content } = require('./controller/subject_content');
const { get_subject } = require('./controller/get_subject');
const { all_subjects } = require('./controller/all_subjects');
const { update_content, update_subject } = require('./controller/update_subject');
// create application/json parser
app.use(bodyParser.json());
// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }));
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }));
// parse an text body into a string
app.use(bodyParser.text({ type: 'text/plain' }));
// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }));


const HTTP_PORT = 8000


app.listen(HTTP_PORT, () => {
  console.log("Server is listening on port " + HTTP_PORT);
});



app.get('/', (req, res) => {
  res.send('API is working');
});


//request to change content of subject with subject_id given as paerameter
app.post('/subject/:subject_id/content', subject_content);


//post request to create new subject 
app.post("/subject/", create_subject);


//get request to get subject with subject_id given as parameter
app.get("/subject/:id", get_subject);


//get request to get all subject
app.get("/subject/", all_subjects);


//post request to update a subject name with subject_id given as parameter
app.post("/subject/:id", update_subject);









