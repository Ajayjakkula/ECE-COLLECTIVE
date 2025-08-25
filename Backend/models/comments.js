const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  commentcontent: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student", 
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now  
  }
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
