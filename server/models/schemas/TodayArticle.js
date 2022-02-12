const { Schema } = require("mongoose");

const TodayArticleSchema = new Schema({
  postId: String,
  imgUrl: String,
  content: String,
});

module.exports = TodayArticleSchema;
