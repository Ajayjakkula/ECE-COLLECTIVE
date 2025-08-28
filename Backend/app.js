const express = require("express");
const cors = require("cors");
const methodOverride = require("method-override");
const mongoose=require("mongoose");
const ExpressError=require("./utils/ExpressError");
const wrapAsync = require("./utils/wrapAsync");




const app = express();

// Middleware
app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 
app.use(methodOverride("_method")); 

// app.use(cors({
//   origin: "http://localhost:5173",  
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   credentials: true
// }));

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

app.use((req,res,next)=>{
  next(new ExpressError(404, "Page Not Found"));
})

app.use((err, req, res, next) => {
    const { statusCode = 500, message = "Something went wrong" } = err;
    res.status(statusCode).json({ error: message });
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
