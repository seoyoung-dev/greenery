const mongoose = require("mongoose");

const CommentSchema = require("./schemas/Comment");
const PostSchema = require("./schemas/Post");
const UserSchema = require("./schemas/User");
const TodayArticleSchema = require("./schemas/TodayArticle");

exports.Comment = mongoose.model("Comment", CommentSchema);
exports.Post = mongoose.model("Post", PostSchema);
exports.User = mongoose.model("User", UserSchema);
exports.TodayArticle = mongoose.model("TodayArticle", TodayArticleSchema);
