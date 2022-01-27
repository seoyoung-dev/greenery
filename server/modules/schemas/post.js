const { Schema } = require("mongoose");
const shortId = require("./types/shortId");
const PostSchema = new Schema({
  shortId,
});

module.exports = PostSchema;
