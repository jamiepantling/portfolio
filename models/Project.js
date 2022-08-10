
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: String,
    description: String,
    class: String,
    techs: String
  });

// module.exports = mongoose.model('Project', projectSchema);
module.exports = mongoose.models.Project || mongoose.model('Project', projectSchema);