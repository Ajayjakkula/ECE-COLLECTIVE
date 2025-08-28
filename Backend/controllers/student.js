const Student = require("../models/students");
const wrapAsync = require("../utils/wrapAsync");

module.exports.renderStudents = wrapAsync(async (req, res) => {
        const students = await Student.find({});
        res.json(students);
   
});

module.exports.createStudent = wrapAsync(async (req, res) => {
        const { username, email, year, class: studentClass } = req.body;
        const newStudent = new Student({ username, email, year, class: studentClass });
        await newStudent.save();
        res.status(201).json(newStudent);
    
});


module.exports.updateStudent = wrapAsync(async (req, res) => {
    
        const { id } = req.params;
        const { username, email, year, class: studentClass } = req.body;
        const updatedStudent = await Student.findByIdAndUpdate(
            id,
            { username, email, year, class: studentClass },
            { new: true } 
        );
        if (!updatedStudent) return res.status(404).send("Student not found");
        res.json(updatedStudent);
   
});

module.exports.deleteStudent = wrapAsync(async (req, res) => {
  
        const { id } = req.params;
        const deletedStudent = await Student.findByIdAndDelete(id);
        if (!deletedStudent) return res.status(404).send("Student not found");
        res.json({ message: "Student deleted successfully" });
    
});
