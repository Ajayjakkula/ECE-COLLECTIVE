const Comment = require("../models/comments");

module.exports.renderComments = async (req, res) => {
  try {
    const { postId } = req.params;
    const filter = postId ? { post: postId } : {};

    const comments = await Comment.find(filter)
      .populate("owner")
      .populate("post"); 

    res.json({
      message: "List of Comments",
      comments
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports.createComment = async (req, res) => {
  try {
    const { text, ownerModel, post } = req.body;
    const ownerId = req.user._id;

    const newComment = new Comment({
      text,
      owner: ownerId,
      ownerModel,
      post
    });

    await newComment.save();
    res.status(201).json({ message: "Comment added successfully", comment: newComment });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports.updateComment = async (req, res) => {
  try {
    const { ownerid,postid } = req.params;
    const updatedComment = await Comment.findByIdAndUpdate(postid, req.body, { new: true });

    if (!updatedComment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    res.json({ message: "Comment updated successfully", comment: updatedComment });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports.deleteComment = async (req, res) => {
  try {
    const { ownerid,postid } = req.params;
    const deletedComment = await Comment.findByIdAndDelete(postid);

    if (!deletedComment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    res.json({ message: "Comment deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
