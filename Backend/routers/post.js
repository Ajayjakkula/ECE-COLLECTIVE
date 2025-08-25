const express = require("express");
const router = express.Router();
const { renderPosts, createPost, updatePost, deletePost } = require("../controllers/post");

router.route("/")
  .get(renderPosts)
  .post(createPost)
  .put(updatePost)
  .delete(deletePost);

module.exports = router;
