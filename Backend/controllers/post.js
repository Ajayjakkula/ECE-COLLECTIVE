const Post=require("../models/post");
const wrapAsync = require("../utils/wrapAsync");

module.exports.renderPosts = wrapAsync(async (req, res) => {
  try {
    const posts = await Post.find().populate("owner");

    res.json({
      message: "List of posts",
      posts
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports.createPost = wrapAsync(async (req, res) => {
  try {
    const { ownerid } = req.params;
    const newPost = new Post({
      ...req.body,   
      owner: ownerid, 
      ownerModel: req.body.ownerModel || "Student" 
    });
    await newPost.save();
    res.status(201).json({ message: "Post created successfully", post: newPost });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports.updatePost = wrapAsync(async (req, res) => {

    const { ownerid,postid } = req.params; 
    const updatedPost = await Post.findByIdAndUpdate(postid, req.body, { new: true });

    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.json({ message: "Post updated successfully", post: updatedPost });
  
});


module.exports.deletePost = wrapAsync(async (req, res) => {

    const { ownerid,postid } = req.params; 
    const deletedPost = await Post.findByIdAndDelete(postid);

    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.json({ message: "Post deleted successfully" });
  
});

