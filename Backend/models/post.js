const mongoose = require("mongoose");
const Comment = require("./comments");  

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
    required: true,
    refPath: "ownerModel"
  },
  ownerModel: {
    type: String,
    required: true,
    enum: ["Student", "Faculty"]  
  },
  image: {
    type: String,
    default: "https://media.istockphoto.com/id/1442179368/photo/maldives-island.jpg"
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment" 
    }
  ]
});

postSchema.post("findOneAndDelete", async function(post) {
  if (post) {
    await Comment.deleteMany({ _id: { $in: post.comments } });
  }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
