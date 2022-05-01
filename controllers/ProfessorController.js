const Professor = require("../models/professor")
exports.getAllProfessors = (req,res,next) => {
    Professor.find({},(error,professors) => {
        if (error) next(error);
        req.data = professors;
        next();
    });
};

exports.getProfessor = (req,res,next) => {
    Professor.find({"name":req.params["name"]},(error,professors) => {
        if (error) next(error);
        req.data = professors;
        next();
    });
};
exports.saveProfessor = (req, res) => {
    //res.send(req.body); /*
    Professor.find({"name":req.body.name},(error,professors) => {
        if (error) next(error);
        //res.send(professors[0]);
        professors[0].name = req.body.name;
        professors[0].email = req.body.email;
        professors[0].hours = req.body.hours;
        professors[0].roomnumber = req.body.roomnumber;
        professors[0].phone = req.body.phone;
        professors[0].website = req.body.website;
        professors[0].save((error, result) => {
            if(error) res.send(error);
            res.render("thanks");
        });
    });
};