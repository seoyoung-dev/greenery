const { mongoURL } = require("./mongoUrl");
const {
  accessTokenExpires,
  refreshTokenExpires,
  accessKey,
  refreshKey,
} = require("./jwtCoinfig");

module.exports = {
  accessTokenExpires,
  refreshTokenExpires,
  accessKey,
  refreshKey,
  mongoURL,
};
