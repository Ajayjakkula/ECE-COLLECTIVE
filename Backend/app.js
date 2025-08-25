const express = require("express");
const methodOverride = require("method-override");
const mongoose=require("mongoose")

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 
app.use(methodOverride("_method")); 

const facultyRouter = require("./routers/faculty");
const studentRouter = require("./routers/student");
const postsRouter = require("./routers/post");
const commentRouter = require("./routers/comments");


mongoose.connect('mongodb://127.0.0.1:27017/ECE-COLLECTIVE')
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error(err));

app.use("/ece/faculty", facultyRouter);
app.use("/ece/student", studentRouter);
app.use("/ece/post", postsRouter);
app.use("/ece/post/comment", commentRouter);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
