const Student = require("../models/students");

module.exports.renderStudents = async (req, res) => {
    try {
        const students = await Student.find({});
        res.json(students);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports.createStudent = async (req, res) => {
    try {
        const { username, email, year, class: studentClass } = req.body;
        const newStudent = new Student({ username, email, year, class: studentClass });
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (err) {
        res.status(500).send(err.message);
    }
};


module.exports.updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const { username, email, year, class: studentClass } = req.body;
        const updatedStudent = await Student.findByIdAndUpdate(
            id,
            { username, email, year, class: studentClass },
            { new: true } 
        );
        if (!updatedStudent) return res.status(404).send("Student not found");
        res.json(updatedStudent);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports.deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedStudent = await Student.findByIdAndDelete(id);
        if (!deletedStudent) return res.status(404).send("Student not found");
        res.json({ message: "Student deleted successfully" });
    } catch (err) {
        res.status(500).send(err.message);
    }
};
