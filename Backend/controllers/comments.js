module.exports.renderComments = (req, res) => {
    res.send("List of Comments : ");
};

module.exports.createComment = (req, res) => {
    res.send("Comment adding form ");
};

module.exports.updateComment = (req, res) => {
    res.send("Updation Form");
};

module.exports.deleteComment = (req, res) => {
    res.send("Comment Deleted Successfully");
};
