const express = require('express')
const app = express()
const mongoose = require('mongoose');
const ProfessorController = require("./controllers/ProfessorController");
const ejs = require('ejs');
const { kStringMaxLength } = require('buffer');
const { name } = require('ejs');
var mongo = require('mongodb');
const Professor = require("./models/professor");


var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb+srv://lewisTeam:lewis123@information.puksi.mongodb.net/OfficeDirectory?retryWrites=true&w=majority';
const client = new MongoClient(url);
const dbName = "OfficeDirectory";
mongoose.connect('mongodb+srv://lewisTeam:lewis123@information.puksi.mongodb.net/OfficeDirectory?retryWrites=true&w=majority');
const db = mongoose.connection;
const col = db.collection("professors");

const port = process.env.PORT || 3000
const majorVersion = 1
const minorVersion = 2

app.use(express.static(__dirname + '/static'))


app.set('view engine', 'ejs');

db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.get('/professors',ProfessorController.getAllProfessors, (req,res,next) => {
  res.render("professors",{professors:req.data});
});

app.get('/professors/pogue/:email',ProfessorController.getProfessor,(req,res,next) => {
  res.render("professors",{professors:req.data});
});

app.get('/professors/klump/:email',ProfessorController.getProfessor,(req,res,next) => {
  res.render("professors",{professors:req.data});
});

app.get('/professors/perry/:email',ProfessorController.getProfessor,(req,res,next) => {
  res.render("professors",{professors:req.data});
});




//mikes shit here
app.get('/cards/professors/perry/:email',ProfessorController.getProfessor,(req,res,next) => {
  res.render("professors",{professors:req.data});
});


app.listen(port, () => console.log(
  `Express started at \"http://localhost:${port}\"\n` +
  `press Ctrl-C to terminate.`)
)