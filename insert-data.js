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
                { name: "Dr. Ray Klump", hours: "Appointment", roomnumber: "N/A", email: "klumpra@lewisu.edu"},
                { name: "Dr. Paul Kim", hours: "Monday, Wednesday, Friday from 12:00pm - 1:00pm", roomnumber: "N/A", email:"kimyo@lewisu.edu"},
                { name: "Dr. Amanda Harsy Ramsay", hours: "N/A", roomnumber: "N/A", email: "harsyram@lewisu.edu"},
                { name: "Br. Tom Dupre", hours: "N/A", roomnumber: "N/A", email: "dupreth@lewisu.edu"},
                { name: "Dr. Gina Martinez", hours: "Tuesday, Thursday from 11:00am - 12:30pm", roomnumber: "AS-130L", email: "martingi@lewisu.edu"},
                { name: "Dr. Piotr Szczurek", hours: "Appointment", roomnumber: "N/A", email: "szczurpi@lewisu.edu"},
                { name: "Dr. Brittany Stephenson", hours: "Monday 2:00pm - 3:00pm, Tuesday 1:00pm - 2:00pm, Wednesday 2:00pm - 3:00pm and Appointment", roomnumber: "N/A", email: "bstephenson@lewisu.edu"},
                { name: "Dr. Cynthia Howard", hours: "Tuesday, Thursday 10:00am - 12:00pm", roomnumber: "N/A", email: "howardcy@lewisu.edu"},
                { name: "Dr. Rami Khasawneh", hours: "Tuesday, Wednesday 4:00pm - 8:00pm", roomnumber: "N/A", email: "khasawra@lewisu.edu"},
                { name: "Dr. Mathias Plass", hours: "Monday 10:00am - 12:00pm + 1:00pm - 2:00pm, Tuesday 12:00pm - 4:00pm, Wednesday 10:00am - 12:00pm + 1:00pm - 2:00pm, Friday 10:00am - 12:00pm + 1:00pm - 2:00pm + 3:00pm - 4:00pm", roomnumber: "N/A", email: "plassma@lewisu.edu"},
                { name: "Dr. Sam Aboumar", hours: "N/A", roomnumber: "N/A", email: "oabuomar@lewisu.edu"},
                { name: "Dr. Mahmood Al-khassaweneh", hours: "N/A", roomnumber: "N/A", email: "malkhassaweneh@lewisu.edu"},
                { name: "Dr. Dana Dominiak", hours: "N/A", roomnumber: "N/A", email: "dominida@lewisu.edu"},
                { name: "Dr. Michael Lewis", hours: "N/A", roomnumber: "N/A", email: "mlewis8@lewisu.edu"},
                { name: "Dr. Marie Meyer", hours: "N/A", roomnumber: "N/A", email: "mmeyer2@lewisu.edu"},
                { name: "Dr. Lucien Ngalamou", hours: "N/A", roomnumber: "N/A", email: "ngalamlu@lewisu.edu"},
                { name: "Michael Smith", hours: "N/A", roomnumber: "N/A", email: "msmith42@lewisu.edu"},
                { name: "Dr. Safwan Omari", hours: "N/A", roomnumber: "N/A", email: "omarisa@lewisu.edu"},
                { name: "Dr. Jason Perry", hours: "N/A", roomnumber: "N/A", email: "perryjn@lewisu.edu"},
                { name: "Eric Pogue", hours: "N/A", roomnumber: "N/A", email: "epogue@lewisu.edu"}
              ];

// CREATE FUNCTION THAT MAKES THIS DATABASE ALWAYS RUNNNG
//create ADMIN account, and an update database function

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