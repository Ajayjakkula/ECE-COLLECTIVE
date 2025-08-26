const express = require("express");
const router = express.Router();
const commentController = require("../controllers/comments");

router.get("/", commentController.renderComments);
router.get("/:ownerid/:postId", commentController.renderComments);

router.post("/", commentController.createComment);

router.put("/:ownerid/:postId", commentController.updateComment);

router.delete("/:ownerid/:postId", commentController.deleteComment);

module.exports = router;
