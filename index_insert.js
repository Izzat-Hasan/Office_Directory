const express = require('express')
const app = express()
const mongoose = require('mongoose');
const ejs = require('ejs');
const { kStringMaxLength } = require('buffer');
const { name } = require('ejs');
var mongo = require('mongodb');
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
                { name: "Dr. Ray Klump", hours: "Appointment", roomnumber: "N/A", email: "klumpra@lewisu.edu", phone: "N/A", website: "N/A"},
                { name: "Dr. Paul Kim", hours: "Monday, Wednesday, Friday from 12:00pm - 1:00pm", roomnumber: "N/A", email:"kimyo@lewisu.edu" , phone: "N/A", website: "N/A"},
                { name: "Dr. Amanda Harsy Ramsay", hours: "N/A", roomnumber: "N/A", email: "harsyram@lewisu.edu" , phone: "N/A", website: "N/A"},
                { name: "Br. Tom Dupre", hours: "N/A", roomnumber: "N/A", email: "dupreth@lewisu.edu" , phone: "N/A", website: "N/A"},
                { name: "Dr. Gina Martinez", hours: "Tuesday, Thursday from 11:00am - 12:30pm", roomnumber: "AS-130L", email: "martingi@lewisu.edu" , phone: "N/A", website: "N/A"},
                { name: "Dr. Piotr Szczurek", hours: "Appointment", roomnumber: "N/A", email: "szczurpi@lewisu.edu" , phone: "N/A", website: "N/A"},
                { name: "Dr. Brittany Stephenson", hours: "Monday 2:00pm - 3:00pm, Tuesday 1:00pm - 2:00pm, Wednesday 2:00pm - 3:00pm and Appointment", roomnumber: "N/A", email: "bstephenson@lewisu.edu" , phone: "N/A", website: "N/A"},
                { name: "Dr. Cynthia Howard", hours: "Tuesday, Thursday 10:00am - 12:00pm", roomnumber: "N/A", email: "howardcy@lewisu.edu", phone: "N/A", website: "N/A"},
                { name: "Dr. Rami Khasawneh", hours: "Tuesday, Wednesday 4:00pm - 8:00pm", roomnumber: "N/A", email: "khasawra@lewisu.edu" , phone: "N/A", website: "N/A"},
                { name: "Dr. Mathias Plass", hours: "Monday 10:00am - 12:00pm + 1:00pm - 2:00pm, Tuesday 12:00pm - 4:00pm, Wednesday 10:00am - 12:00pm + 1:00pm - 2:00pm, Friday 10:00am - 12:00pm + 1:00pm - 2:00pm + 3:00pm - 4:00pm", roomnumber: "N/A", email: "plassma@lewisu.edu" , phone: "N/A", website: "N/A"},
                { name: "Dr. Sam Aboumar", hours: "N/A", roomnumber: "N/A", email: "oabuomar@lewisu.edu" , phone: "N/A", website: "N/A"} ,
                { name: "Dr. Mahmood Al-khassaweneh", hours: "N/A", roomnumber: "N/A", email: "malkhassaweneh@lewisu.edu" , phone: "N/A", website: "N/A"},
                { name: "Dr. Dana Dominiak", hours: "N/A", roomnumber: "N/A", email: "dominida@lewisu.edu" , phone: "N/A", website: "N/A"},
                { name: "Dr. Michael Lewis", hours: "N/A", roomnumber: "N/A", email: "mlewis8@lewisu.edu" , phone: "N/A", website: "N/A"},
                { name: "Dr. Marie Meyer", hours: "N/A", roomnumber: "N/A", email: "mmeyer2@lewisu.edu" , phone: "N/A", website: "N/A"},
                { name: "Dr. Lucien Ngalamou", hours: "N/A", roomnumber: "N/A", email: "ngalamlu@lewisu.edu" , phone: "N/A", website: "N/A"},
                { name: "Michael Smith", hours: "N/A", roomnumber: "N/A", email: "msmith42@lewisu.edu" , phone: "N/A", website: "N/A"},
                { name: "Dr. Safwan Omari", hours: "N/A", roomnumber: "N/A", email: "omarisa@lewisu.edu" , phone: "N/A", website: "N/A"},
                { name: "Dr. Jason Perry", hours: "N/A", roomnumber: "N/A", email: "perryjn@lewisu.edu" , phone: "N/A", website: "N/A"},
                { name: "Eric Pogue", hours: "N/A", roomnumber: "N/A", email: "epogue@lewisu.edu", phone: "N/A", website: "N/A"}
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