const dotenv = require("dotenv");
dotenv.config();

exports.mongoURL = process.env.MONGODB_URL;
