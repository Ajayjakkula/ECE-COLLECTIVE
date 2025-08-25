const mongoose=require("mongoose")
const Faculty=require("../models/faculty")
const Student=require("../models/students")

const {students,faculties}=require("./data")

mongoose.connect('mongodb://127.0.0.1:27017/ECE-COLLECTIVE')
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error(err));

const initDB=async()=>{
   await Faculty.deleteMany({});
   await Student.deleteMany({});
   await Faculty.insertMany(faculties);
   await Student.insertMany(students);
}
initDB();