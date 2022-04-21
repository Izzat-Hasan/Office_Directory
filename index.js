const express = require('express')
const app = express()
const mongoose = require('mongoose');
const ejs = require('ejs');
const { kStringMaxLength } = require('buffer');



const port = process.env.PORT || 3000
const majorVersion = 1
const minorVersion = 2

app.use(express.static(__dirname + '/static'))

mongoose.connect('mongodb+srv://lewisTeam:lewis123@information.puksi.mongodb.net/OfficeDirectory?retryWrites=true&w=majority');

const professorSchema = {
    name: String,
    hours: String,
    email: String,
    phone: String,
    roomnumber: String,
    website: String
}

const Professors = mongoose.model('professors', professorSchema);
app.set('view engine', 'ejs');

app.get('/views/rayklump', (req, res) => {
    Professors.find({}, function(err, professors) {
        res.render('rayklump', {
            professorsList: professors
        })
    })
})

app.get('/views/kim', (req, res) => {
  Professors.find({}, function(err, professors) {
      res.render('kim', {
          professorsList: professors
      })
  })
})


app.listen(port, () => console.log(
  `Express started at \"http://localhost:${port}\"\n` +
  `press Ctrl-C to terminate.`)
)