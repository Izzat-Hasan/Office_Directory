const Professor = require("../models/professor")
exports.getAllProfessors = (req,res,next) => {
    Professor.find({},(error,professors) => {
        if (error) next(error);
        req.data = professors;
        next();
    });
};
exports.getProfessor = (req,res,next) => {
    Professor.find({"email":req.params["email"]},(error,professors) => {
        if (error) next(error);
        req.data = professors;
        next();
    });
}

exports.updateProfessor = (req,res,next) => {
    var query = {"email":req.params["email"]};
    var newValue = {$set: {name: req.params["name"], phone: req.params["phone"], hours:req.params["hours"], roomnumber:req.params["roomnumber"], website: req.params["website"]}};
    Professor.updateOne(query, newValue, (error,professors) => {
        if (error) next(error);
        req.data = professors;
        next();
    });
}