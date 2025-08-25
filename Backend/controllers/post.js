
module.exports.renderPosts = (req, res) => {
    res.send("List of posts : ");
};

module.exports.createPost = (req, res) => {
    res.send("Post adding form ");
};

module.exports.updatePost = (req, res) => {
    res.send("Updation Form");
};

module.exports.deletePost = (req, res) => {
    res.send("Post Deleted Successfully");
};
