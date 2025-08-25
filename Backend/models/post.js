const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",  
    required: true
  },
  image: {
    type: String,
    default: "https://media.istockphoto.com/id/1442179368/photo/maldives-island.jpg"
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student"   
    }
  ]
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
