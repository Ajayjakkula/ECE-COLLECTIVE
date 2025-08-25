const express = require("express");
const router = express.Router();
const { renderStudents, createStudent, updateStudent, deleteStudent } = require("../controllers/student");

router.route("/")
  .get(renderStudents)
  .post(createStudent)
  .put(updateStudent)
  .delete(deleteStudent);

module.exports = router;
