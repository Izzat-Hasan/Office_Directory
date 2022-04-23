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