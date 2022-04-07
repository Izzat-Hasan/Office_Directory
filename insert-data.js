const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://lewisTeam:lewis123@information.puksi.mongodb.net/OfficeDirectory?retryWrites=true&w=majority";
const client = new MongoClient(url);
 
 // The database to use
 const dbName = "OfficeDirectory";
                      
 async function run() {
    try {
         await client.connect();
         console.log("Connected correctly to server");
         const db = client.db(dbName);
         // make collection
         const col = db.collection("professors");
         // Construct documents                                                                                                                                                             

        const docs = [
                { name: "Ray Klump", hours: "Appointment" },
                { name: "Paul Kim", hours: "Monday, Wednesday, Friday from 12:00pm - 1:00pm" },
                
              ];


        // this option prevents additional documents from being inserted if one fails
        const options = { ordered: true };
        const result = await col.insertMany(docs, options);
        console.log(`${result.insertedCount} documents were inserted`);

         console.log(docs);
        
        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}
run().catch(console.dir);