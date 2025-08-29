const express = require("express");
const router = express.Router({mergeParams:true});
const { renderStudents, createStudent, updateStudent, deleteStudent } = require("../controllers/student");

router.route("/")
  .get(renderStudents)
  .post(createStudent)
router.route("/:id")
  .put(updateStudent)
  .delete(deleteStudent);

module.exports = router;
