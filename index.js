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
mongoose.connect('mongodb+srv://lewisTeam:lewis123@information.puksi.mongodb.net/OfficeDirectory?retryWrites=true&w=majority"');
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
//Katie and Izzys spot for our authentification linked pages
//this always directs to views/professors.ejs
//when you log in, will direct you to your link

app.get('/professors/klump/:email',ProfessorController.getProfessor,(req,res,next) => {
  res.render("professors",{professors:req.data});
});

app.get('/professors/ramsey/:email',ProfessorController.getProfessor,(req,res,next) => {
  res.render("professors",{professors:req.data});
});

app.get('/professors/dupre/:email',ProfessorController.getProfessor,(req,res,next) => {
  res.render("professors",{professors:req.data});
});
app.get('/professors/martinez/:email',ProfessorController.getProfessor,(req,res,next) => {
  res.render("professors",{professors:req.data});
});
app.get('/professors/szczurek/:email',ProfessorController.getProfessor,(req,res,next) => {
  res.render("professors",{professors:req.data});
});
app.get('/professors/stephenson/:email',ProfessorController.getProfessor,(req,res,next) => {
  res.render("professors",{professors:req.data});
});
app.get('/professors/howard/:email',ProfessorController.getProfessor,(req,res,next) => {
  res.render("professors",{professors:req.data});
});
app.get('/professors/khasawneh/:email',ProfessorController.getProfessor,(req,res,next) => {
  res.render("professors",{professors:req.data});
});
app.get('/professors/plass/:email',ProfessorController.getProfessor,(req,res,next) => {
  res.render("professors",{professors:req.data});
});
app.get('/professors/aboumar/:email',ProfessorController.getProfessor,(req,res,next) => {
  res.render("professors",{professors:req.data});
});
app.get('/professors/mkhassaweneh/:email',ProfessorController.getProfessor,(req,res,next) => {
  res.render("professors",{professors:req.data});
});
app.get('/professors/dominiak/:email',ProfessorController.getProfessor,(req,res,next) => {
  res.render("professors",{professors:req.data});
});
app.get('/professors/lewis/:email',ProfessorController.getProfessor,(req,res,next) => {
  res.render("professors",{professors:req.data});
});
app.get('/professors/meyer/:email',ProfessorController.getProfessor,(req,res,next) => {
  res.render("professors",{professors:req.data});
});
app.get('/professors/ngalamou/:email',ProfessorController.getProfessor,(req,res,next) => {
  res.render("professors",{professors:req.data});
});
app.get('/professors/perry/:email',ProfessorController.getProfessor,(req,res,next) => {
  res.render("professors",{professors:req.data});
});
app.get('/professors/pogue/:email',ProfessorController.getProfessor,(req,res,next) => {
  res.render("professors",{professors:req.data});
});

//this is where the cards are going
//in the views folder, to every file EXCEPT professors.ejs


app.get('/aboumar/professors/:email',ProfessorController.getProfessor,(req,res,next) => {
  res.render("aboumar",{professors:req.data});
});

app.get('/al-khassaweneh/professors/:email',ProfessorController.getProfessor,(req,res,next) => {
  res.render("al-khassaweneh",{professors:req.data});
});

app.get('/dominiak/professors/:email',ProfessorController.getProfessor,(req,res,next) => {
  res.render("dominiak",{professors:req.data});
});

app.get('/dupre/professors/:email',ProfessorController.getProfessor,(req,res,next) => {
  res.render("dupre",{professors:req.data});
});

app.get('/harsy/professors/:email',ProfessorController.getProfessor,(req,res,next) => {
  res.render("harsy",{professors:req.data});
});

app.get('/howard/professors/:email',ProfessorController.getProfessor,(req,res,next) => {
  res.render("howard",{professors:req.data});
});

app.get('/khasawneh/professors/:email',ProfessorController.getProfessor,(req,res,next) => {
  res.render("khasawneh",{professors:req.data});
});

app.get('/kim/professors/:email',ProfessorController.getProfessor,(req,res,next) => {
  res.render("kim",{professors:req.data});
});

app.get('/lewis/professors/:email',ProfessorController.getProfessor,(req,res,next) => {
  res.render("lewis",{professors:req.data});
});

app.get('/martinez/professors/:email',ProfessorController.getProfessor,(req,res,next) => {
  res.render("martinez",{professors:req.data});
});

app.get('/meyer/professors/:email',ProfessorController.getProfessor,(req,res,next) => {
  res.render("meyer",{professors:req.data});
});

app.get('/ngalamou/professors/:email',ProfessorController.getProfessor,(req,res,next) => {
  res.render("ngalamou",{professors:req.data});
});

app.get('/omari/professors/:email',ProfessorController.getProfessor,(req,res,next) => {
  res.render("omari",{professors:req.data});
});

app.get('/perry/professors/:email',ProfessorController.getProfessor,(req,res,next) => {
  res.render("perry",{professors:req.data});
});

app.get('/plass/professors/:email',ProfessorController.getProfessor,(req,res,next) => {
  res.render("plass",{professors:req.data});
});

app.get('/pogue/professors/:email',ProfessorController.getProfessor,(req,res,next) => {
  res.render("pogue",{professors:req.data});
});

app.get('/rayklump/professors/:email',ProfessorController.getProfessor,(req,res,next) => {
  res.render("rayklump",{professors:req.data});
});

app.get('/smith/professors/:email',ProfessorController.getProfessor,(req,res,next) => {
  res.render("smith",{professors:req.data});
});

app.get('/stephenson/professors/:email',ProfessorController.getProfessor,(req,res,next) => {
  res.render("stephenson",{professors:req.data});
});

app.get('/szczurek/professors/:email',ProfessorController.getProfessor,(req,res,next) => {
  res.render("szczurek",{professors:req.data});
});




app.listen(port, () => console.log(
  `Express started at \"http://localhost:${port}\"\n` +
  `press Ctrl-C to terminate.`)
)