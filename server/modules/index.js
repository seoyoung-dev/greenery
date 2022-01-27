const mongoose = require("mongoose");
const postSchema = require("./schemas/post");

exports.Post = mongoose.model("Post", postSchema);
