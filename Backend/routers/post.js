const express = require("express");
const router = express.Router();
const { renderPosts, createPost, updatePost, deletePost } = require("../controllers/post");

router.route("/")
  .get(renderPosts)
router.route("/:ownerid")
  .post(createPost)
router.route("/:ownerid/:postid")
  .put(updatePost)
  .delete(deletePost);

module.exports = router;
