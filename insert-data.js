const { MongoClient } = require("mongodb");
 //DO NOT RUN THIS
 //ONLY NEEDS TO BE RAN ONCE

 
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
                { id: "1" , name: "Dr. Ray Klump", hours: "Appointment", roomnumber: "N/A", email: "klumpra@lewisu.edu", phone: "N/A", website: "N/A"},
                { id: "2" , name: "Dr. Paul Kim", hours: "Monday, Wednesday, Friday from 12:00pm - 1:00pm", roomnumber: "N/A", email:"kimyo@lewisu.edu" , phone: "N/A", website: "N/A"},
                { id: "3" ,name: "Dr. Amanda Harsy Ramsay", hours: "N/A", roomnumber: "N/A", email: "harsyram@lewisu.edu" , phone: "N/A", website: "N/A"},
                { id: "4" ,name: "Br. Tom Dupre", hours: "N/A", roomnumber: "N/A", email: "dupreth@lewisu.edu" , phone: "N/A", website: "N/A"},
                { id: "5" ,name: "Dr. Gina Martinez", hours: "Tuesday, Thursday from 11:00am - 12:30pm", roomnumber: "AS-130L", email: "martingi@lewisu.edu" , phone: "N/A", website: "N/A"},
                { id: "6" ,name: "Dr. Piotr Szczurek", hours: "Appointment", roomnumber: "N/A", email: "szczurpi@lewisu.edu" , phone: "N/A", website: "N/A"},
                { id: "7" ,name: "Dr. Brittany Stephenson", hours: "Monday 2:00pm - 3:00pm, Tuesday 1:00pm - 2:00pm, Wednesday 2:00pm - 3:00pm and Appointment", roomnumber: "N/A", email: "bstephenson@lewisu.edu" , phone: "N/A", website: "N/A"},
                { id: "8" ,name: "Dr. Cynthia Howard", hours: "Tuesday, Thursday 10:00am - 12:00pm", roomnumber: "N/A", email: "howardcy@lewisu.edu", phone: "N/A", website: "N/A"},
                { id: "9" ,name: "Dr. Rami Khasawneh", hours: "Tuesday, Wednesday 4:00pm - 8:00pm", roomnumber: "N/A", email: "khasawra@lewisu.edu" , phone: "N/A", website: "N/A"},
                { id: "10" ,name: "Dr. Mathias Plass", hours: "Monday 10:00am - 12:00pm + 1:00pm - 2:00pm, Tuesday 12:00pm - 4:00pm, Wednesday 10:00am - 12:00pm + 1:00pm - 2:00pm, Friday 10:00am - 12:00pm + 1:00pm - 2:00pm + 3:00pm - 4:00pm", roomnumber: "N/A", email: "plassma@lewisu.edu" , phone: "N/A", website: "N/A"},
                { id: "11" ,name: "Dr. Sam Aboumar", hours: "N/A", roomnumber: "N/A", email: "oabuomar@lewisu.edu" , phone: "N/A", website: "N/A"} ,
                { id: "12" ,name: "Dr. Mahmood Al-khassaweneh", hours: "N/A", roomnumber: "N/A", email: "malkhassaweneh@lewisu.edu" , phone: "N/A", website: "N/A"},
                { id: "13" ,name: "Dr. Dana Dominiak", hours: "N/A", roomnumber: "N/A", email: "dominida@lewisu.edu" , phone: "N/A", website: "N/A"},
                { id: "14" ,name: "Dr. Michael Lewis", hours: "N/A", roomnumber: "N/A", email: "mlewis8@lewisu.edu" , phone: "N/A", website: "N/A"},
                { id: "15" ,name: "Dr. Marie Meyer", hours: "N/A", roomnumber: "N/A", email: "mmeyer2@lewisu.edu" , phone: "N/A", website: "N/A"},
                { id: "16" ,name: "Dr. Lucien Ngalamou", hours: "N/A", roomnumber: "N/A", email: "ngalamlu@lewisu.edu" , phone: "N/A", website: "N/A"},
                { id: "17" ,name: "Michael Smith", hours: "N/A", roomnumber: "N/A", email: "msmith42@lewisu.edu" , phone: "N/A", website: "N/A"},
                { id: "18" ,name: "Dr. Safwan Omari", hours: "N/A", roomnumber: "N/A", email: "omarisa@lewisu.edu" , phone: "N/A", website: "N/A"},
                { id: "19" ,name: "Dr. Jason Perry", hours: "N/A", roomnumber: "N/A", email: "perryjn@lewisu.edu" , phone: "N/A", website: "N/A"},
                { id: "20" , name: "Eric Pogue", hours: "N/A", roomnumber: "N/A", email: "epogue@lewisu.edu", phone: "N/A", website: "N/A"}
              ];


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