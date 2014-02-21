
var Mongoose = require('mongoose');


var ProjectSchema = new Mongoose.Schema({
  	"title": String,
    "date": Date,
    "image": String,
    "summary": String
    
});

exports.Project = Mongoose.model('Project', ProjectSchema);


