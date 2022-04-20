var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://lewisTeam:lewis123@information.puksi.mongodb.net/OfficeDirectory?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("OfficeDirectory");
  /*Return only the documents where the address starts with an "S":*/
  var query = { _id: "626075b5790d83b32ce716c6"};
  dbo.collection("professors").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});