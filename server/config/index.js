const dotenv = require("dotenv");
dotenv.config();
const mongoURL = process.env.MONGODB_URL;

const accessTokenExpireTime = Number(process.env.access_token_expire_time);
const accessTokenExpires = Date.now() + accessTokenExpireTime * 3600000;

const refreshTokenExpireTime = Number(process.env.refresh_token_expire_time);
const refreshTokenExpires = Date.now() + refreshTokenExpireTime * 3600000;

const accessKey = process.env.access_key;
const refreshKey = process.env.refresh_key;

module.exports = {
  accessTokenExpires,
  refreshTokenExpires,
  accessKey,
  refreshKey,
  mongoURL,
};
