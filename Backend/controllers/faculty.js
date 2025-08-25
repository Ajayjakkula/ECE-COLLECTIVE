const Faculty=require("../models/faculty")
module.exports.renderFaculties = async (req, res) => {
    try {
        const faculties = await Faculty.find({});
        res.json(faculties); 
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports.createFaculty = async (req, res) => {
    try {
        const { username, email } = req.body; 
        const newFaculty = new Faculty({ username, email });
        await newFaculty.save(); 
        res.status(201).json(newFaculty); 
    } catch (err) {
        res.status(500).send(err.message);
    }
};


module.exports.updateFaculty = async (req, res) => {
    try {
        const { id } = req.params;
        const { username, email } = req.body; 
        const updatedFaculty = await Faculty.findByIdAndUpdate(
            id,
            { username, email },
            { new: true } 
        );
        if (!updatedFaculty) return res.status(404).send("Faculty not found");
        res.json(updatedFaculty);
    } catch (err) {
        res.status(500).send(err.message);
    }
};


module.exports.deleteFaculty = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedFaculty = await Faculty.findByIdAndDelete(id);
        if (!deletedFaculty) return res.status(404).send("Faculty not found");
        res.json({ message: "Faculty deleted successfully" });
    } catch (err) {
        res.status(500).send(err.message);
    }
};



