const Comment = require("../models/comments");
const wrapAsync = require("../utils/wrapAsync");

module.exports.renderComments = wrapAsync(async (req, res) => {
  const { postId } = req.params;
  const filter = postId ? { post: postId } : {};

  const comments = await Comment.find(filter)
    .populate("owner")
    .populate("post");

  res.json({
    message: "List of Comments",
    comments
  });
});

module.exports.createComment = wrapAsync(async (req, res) => {
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
});

module.exports.updateComment = wrapAsync(async (req, res) => {
  const { postid } = req.params;

  const updatedComment = await Comment.findByIdAndUpdate(postid, req.body, { new: true });

  if (!updatedComment) throw new Error("Comment not found");

  res.json({ message: "Comment updated successfully", comment: updatedComment });
});

module.exports.deleteComment = wrapAsync(async (req, res) => {
  const { postid } = req.params;

  const deletedComment = await Comment.findByIdAndDelete(postid);

  if (!deletedComment) throw new Error("Comment not found");

  res.json({ message: "Comment deleted successfully" });
});
