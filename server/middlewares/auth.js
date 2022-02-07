const { User } = require("../models");
const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const access_key = process.env.access_key;
  const { refresh_token } = req.cookies;
  const access_token = req.headers.authorization;
  try {
    if (access_token) {
      const decoded = jwt.verify(access_token, access_key);

      req.user = {
        id: decoded.id,
        email: decoded.email,
        name: decoded.name,
      };

      const user = await User.findOne({ _id: req.user.id });
      if (!refresh_token || refresh_token !== user.token) {
        throw new Error("wrong access");
      }
      return next();
    }
    throw new Error("wrong access");
  } catch (err) {
    switch (err.message) {
      case "jwt expired":
        res.clearCookie("refresh_token");
        res.json({
          isOk: false,
          isAuthorize: false,
          message: "인증이 만료되었습니다.",
        });
        return;
      case "wrong access":
        res.json({
          isOk: false,
          isAuthorize: false,
          message: "잘못된 접근입니다.",
        });
        return;
      default:
        next(err);
    }
  }
};
