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
         //template for documents V                                                                                                                                                     
        // { name: "", hours: "", roomnumber: "", email: ""}
        const docs = [
                { name: "Dr. Ray Klump", hours: "Appointment", roomnumber: "N/A", email: "N/A"},
                { name: "Paul Kim", hours: "Monday, Wednesday, Friday from 12:00pm - 1:00pm" },
                { name: "Dr. Amanda Harsey", hours: "N/A", roomnumber: "N/A", email: "N/A"},
                { name: "Tom Dupre", hours: "N/A", roomnumber: "N/A", email: "N/A"},
                { name: "Gina Martinez", hours: "Tuesday, Thursday from 11:00am - 12:30pm", roomnumber: "AS-130L", email: "N/A"},
                { name: "Dr. Piotr Szczurek", hours: "Appointment", roomnumber: "N/A", email: "N/A"},
                { name: "Dr. Brittany Stephenson", hours: "Monday 2:00pm - 3:00pm, Tuesday 1:00pm - 2:00pm, Wednesday 2:00pm - 3:00pm and Appointment", roomnumber: "N/A", email: "N/A"},
                { name: "Dr. Cynthia Howard", hours: "Tuesday, Thursday 10:00am - 12:00pm", roomnumber: "N/A", email: "N/A"},
                { name: "Rami Khasawneh", hours: "Tuesday, Wednesday 4:00pm - 8:00pm", roomnumber: "N/A", email: "N/A"},
                { name: "Mathias Plass", hours: "Monday 10:00am - 12:00pm + 1:00pm - 2:00pm, Tuesday 12:00pm - 4:00pm, Wednesday 10:00am - 12:00pm + 1:00pm - 2:00pm, Friday 10:00am - 12:00pm + 1:00pm - 2:00pm + 3:00pm - 4:00pm", roomnumber: "N/A", email: "N/A"}
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