const mongoose = require("mongoose");
const Post = require("./post"); 

const facultySchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true   
  }
});

facultySchema.post("findOneAndDelete", async function(faculty) {
  if (faculty) {
    await Post.deleteMany({ owner: faculty._id, ownerModel: "Faculty" });

    await Post.updateMany(
      {},
      { $pull: { comments: faculty._id } }
    );
  }
});

const Faculty = mongoose.model("Faculty", facultySchema);

module.exports = Faculty;
