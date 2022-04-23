const mongoose = require("mongoose"),

professorSchema = mongoose.Schema({
    name: String,
    hours: String,
    roomnumber: String,
    email: String,
    phone: String,
    website: String,
});

module.exports = mongoose.model("Professor",professorSchema);