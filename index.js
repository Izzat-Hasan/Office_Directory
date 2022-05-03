const express = require('express')
const app = express()
var bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
const mongoose = require('mongoose');
const ProfessorController = require("./controllers/ProfessorController");
const ejs = require('ejs');
const { kStringMaxLength } = require('buffer');
const { name } = require('ejs');
var mongo = require('mongodb');
const Professor = require("./models/professor");

//authentication
passport = require("passport")
LocalStrategy = require("passport-local")
passportLocalMongoose =
		require("passport-local-mongoose"),
	User = require("./models/user");

  app.use(require("express-session")({
    secret: "Rusty is a dog",
    resave: false,
    saveUninitialized: false
  }));


app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Showing login form
app.get("/login", function (req, res) {
	res.render("login");
});

//Handling user login
app.post("/login", passport.authenticate("local", {
	successRedirect: "/secret",
	failureRedirect: "/login"
}), function (req, res) {
});

//Handling user logout
app.get("/logout", function (req, res) {
	req.logout();
	res.redirect("/");
});

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) return next();
	res.redirect("/login");
}

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

app.get('/professors/edit/:name',ProfessorController.getProfessor,(req,res,next) => {
  res.render("editprof",{professors:req.data});
});

app.post("/saveprof", ProfessorController.saveProfessor);


//Katie and Izzys spot for our authentification linked pages
//this always directs to views/professors.ejs
//when you log in, will direct you to your link

app.get('/professors/klump/:name',ProfessorController.getProfessor,(req,res,next) => {
  res.render("professors",{professors:req.data});
});

app.get('/professors/ramsey/:name',ProfessorController.getProfessor,(req,res,next) => {
  res.render("professors",{professors:req.data});
});

app.get('/professors/dupre/:name',ProfessorController.getProfessor,(req,res,next) => {
  res.render("professors",{professors:req.data});
});
app.get('/professors/martinez/:name',ProfessorController.getProfessor,(req,res,next) => {
  res.render("professors",{professors:req.data});
});
app.get('/professors/szczurek/:name',ProfessorController.getProfessor,(req,res,next) => {
  res.render("professors",{professors:req.data});
});
app.get('/professors/stephenson/:name',ProfessorController.getProfessor,(req,res,next) => {
  res.render("professors",{professors:req.data});
});
app.get('/professors/howard/:name',ProfessorController.getProfessor,(req,res,next) => {
  res.render("professors",{professors:req.data});
});
app.get('/professors/khasawneh/:name',ProfessorController.getProfessor,(req,res,next) => {
  res.render("professors",{professors:req.data});
});
app.get('/professors/plass/:name',ProfessorController.getProfessor,(req,res,next) => {
  res.render("professors",{professors:req.data});
});
app.get('/professors/aboumar/:name',ProfessorController.getProfessor,(req,res,next) => {
  res.render("professors",{professors:req.data});
});
app.get('/professors/mkhassaweneh/:name',ProfessorController.getProfessor,(req,res,next) => {
  res.render("professors",{professors:req.data});
});
app.get('/professors/dominiak/:name',ProfessorController.getProfessor,(req,res,next) => {
  res.render("professors",{professors:req.data});
});
app.get('/professors/lewis/:name',ProfessorController.getProfessor,(req,res,next) => {
  res.render("professors",{professors:req.data});
});
app.get('/professors/meyer/:name',ProfessorController.getProfessor,(req,res,next) => {
  res.render("professors",{professors:req.data});
});
app.get('/professors/ngalamou/:name',ProfessorController.getProfessor,(req,res,next) => {
  res.render("professors",{professors:req.data});
});
app.get('/professors/perry/:name',ProfessorController.getProfessor,(req,res,next) => {
  res.render("professors",{professors:req.data});
});
app.get('/professors/pogue/:name',ProfessorController.getProfessor,(req,res,next) => {
  res.render("professors",{professors:req.data});
});

//this is where the cards are going
//in the views folder, to every file EXCEPT professors.ejs


app.get('/aboumar/professors/:name',ProfessorController.getProfessor,(req,res,next) => {
  res.render("aboumar",{professors:req.data});
});

app.get('/al-khassaweneh/professors/:name',ProfessorController.getProfessor,(req,res,next) => {
  res.render("al-khassaweneh",{professors:req.data});
});

app.get('/dominiak/professors/:name',ProfessorController.getProfessor,(req,res,next) => {
  res.render("dominiak",{professors:req.data});
});

app.get('/dupre/professors/:name',ProfessorController.getProfessor,(req,res,next) => {
  res.render("dupre",{professors:req.data});
});

app.get('/harsy/professors/:name',ProfessorController.getProfessor,(req,res,next) => {
  res.render("harsy",{professors:req.data});
});

app.get('/howard/professors/:name',ProfessorController.getProfessor,(req,res,next) => {
  res.render("howard",{professors:req.data});
});

app.get('/khasawneh/professors/:name',ProfessorController.getProfessor,(req,res,next) => {
  res.render("khasawneh",{professors:req.data});
});

app.get('/kim/professors/:name',ProfessorController.getProfessor,(req,res,next) => {
  res.render("kim",{professors:req.data});
});

app.get('/lewis/professors/:name',ProfessorController.getProfessor,(req,res,next) => {
  res.render("lewis",{professors:req.data});
});

app.get('/martinez/professors/:name',ProfessorController.getProfessor,(req,res,next) => {
  res.render("martinez",{professors:req.data});
});

app.get('/meyer/professors/:name',ProfessorController.getProfessor,(req,res,next) => {
  res.render("meyer",{professors:req.data});
});

app.get('/ngalamou/professors/:name',ProfessorController.getProfessor,(req,res,next) => {
  res.render("ngalamou",{professors:req.data});
});

app.get('/omari/professors/:name',ProfessorController.getProfessor,(req,res,next) => {
  res.render("omari",{professors:req.data});
});

app.get('/perry/professors/:name',ProfessorController.getProfessor,(req,res,next) => {
  res.render("perry",{professors:req.data});
});

app.get('/plass/professors/:name',ProfessorController.getProfessor,(req,res,next) => {
  res.render("plass",{professors:req.data});
});

app.get('/pogue/professors/:name',ProfessorController.getProfessor,(req,res,next) => {
  res.render("pogue",{professors:req.data});
});

app.get('/rayklump/professors/:name',ProfessorController.getProfessor,(req,res,next) => {
  res.render("rayklump",{professors:req.data});
});

app.get('/smith/professors/:name',ProfessorController.getProfessor,(req,res,next) => {
  res.render("smith",{professors:req.data});
});

app.get('/stephenson/professors/:name',ProfessorController.getProfessor,(req,res,next) => {
  res.render("stephenson",{professors:req.data});
});

app.get('/szczurek/professors/:name',ProfessorController.getProfessor,(req,res,next) => {
  res.render("szczurek",{professors:req.data});
});




app.listen(port, () => console.log(
  `Express started at \"http://localhost:${port}\"\n` +
  `press Ctrl-C to terminate.`)
)