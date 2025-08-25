
module.exports.renderStudents = (req, res) => {
    res.send("List of Students : ");
};

module.exports.createStudent = (req, res) => {
    res.send("Student adding form ");
};

module.exports.updateStudent = (req, res) => {
    res.send("Updation Form");
};

module.exports.deleteStudent = (req, res) => {
    res.send("Student Deleted Successfully");
};
