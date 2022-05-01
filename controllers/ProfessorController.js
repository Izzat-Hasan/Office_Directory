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

exports.saveProfessor = (req, res) => {
    //res.send(req.body); /*
    Professor.find({"name":req.body.name},(error,professors) => {
        if (error) next(error);
        //res.send(professors[0]);
        professors[0].name = req.body.name;
        professors[0].email = req.body.email;
        professors[0].save((error, result) => {
            if(error) res.send(error);
            res.render("thanks");
        });
    });
};