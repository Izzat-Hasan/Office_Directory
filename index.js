const express = require('express')
app = express()

var url = require('url');


const port = process.env.PORT || 3000
const majorVersion = 1
const minorVersion = 2

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://lewisTeam:lewis123@information.puksi.mongodb.net/OfficeDirectory?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("OfficeDirectory").collection("professors");
  // perform actions on the collection object
  console.log("databse working");
  client.close();
});

// Use Express to publish static HTML, CSS, and JavaScript files that run in the browser. 
app.use(express.static(__dirname + '/static'))

// The app.get functions below are being processed in Node.js running on the server.
// Implement a custom About page.






app.listen(port, () => console.log(
  `Express started at \"http://localhost:${port}\"\n` +
  `press Ctrl-C to terminate.`)
)
