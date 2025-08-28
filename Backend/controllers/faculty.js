const Faculty = require("../models/faculty");
const wrapAsync = require("../utils/wrapAsync");

module.exports.renderFaculties = wrapAsync(async (req, res) => {
    const faculties = await Faculty.find({});
    res.json(faculties); 
});

module.exports.createFaculty = wrapAsync(async (req, res) => {
    const { username, email } = req.body; 
    const newFaculty = new Faculty({ username, email });
    await newFaculty.save(); 
    res.status(201).json(newFaculty); 
});

module.exports.updateFaculty = wrapAsync(async (req, res) => {
    const { id } = req.params;
    const { username, email } = req.body; 
    const updatedFaculty = await Faculty.findByIdAndUpdate(
        id,
        { username, email },
        { new: true } 
    );
    if (!updatedFaculty) throw new Error("Faculty not found"); 
    res.json(updatedFaculty);
});

module.exports.deleteFaculty = wrapAsync(async (req, res) => {
    const { id } = req.params;
    const deletedFaculty = await Faculty.findByIdAndDelete(id);
    if (!deletedFaculty) throw new Error("Faculty not found"); 
    res.json({ message: "Faculty deleted successfully" });
});
