const Professor = require("../models/professor")

exports.updateProfessorKlump = function(name1,phone1,hours1,roomnumber1) {
    var newvalues = { $set: {name: name1, phone: phone1, hours: hours1, roomnumber: roomnumber1 } };
    Professor.findOneAndUpdate({"email":req.params["email"]},newvalues , (error,professors) => {
        if (error) next(error);

    });
}