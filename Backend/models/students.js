const mongoose = require("mongoose");
const Post = require("./post"); 

const studentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true   
  },
  year: {
    type: Number,
    required: true
  },
  class: {
    type: Number,
    required: true
  }
});

studentSchema.post("findOneAndDelete", async function(student) {
  if (student) {
    await Post.deleteMany({ owner: student._id, ownerModel: "Student" });

    await Post.updateMany(
      {},
      { $pull: { comments: student._id } }
    );
  }
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
