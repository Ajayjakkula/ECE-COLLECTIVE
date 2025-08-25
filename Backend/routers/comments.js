const express = require("express");
const router = express.Router();
const { renderComments, createComment, updateComment, deleteComment } = require("../controllers/comments");

router.route("/")
  .get(renderComments)
  .post(createComment)
  .put(updateComment)
  .delete(deleteComment);

module.exports = router;
