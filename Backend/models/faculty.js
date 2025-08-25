const mongoose = require("mongoose");

const facultySchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true   
  }
});


const Faculty = mongoose.model("Faculty", facultySchema);

module.exports = Faculty;
