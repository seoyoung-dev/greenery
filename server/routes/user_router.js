const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { User } = require("../models");
const auth = require("../middlewares/auth");
const uploadProfileImage = require("../middlewares/uploadProfile");
const {
  accessTokenExpires,
  refreshTokenExpires,
  accessKey,
  refreshKey,
} = require("../config");

//유저 정보 조회
router.get("/auth", auth, (req, res) => {
  res.json({
    isOk: true,
    isAuthorize: true,
    email: req.user.email,
    id: req.user.id,
    name: req.user.name,
  });
});

// 회원가입
router.post("/register", uploadProfileImage, async (req, res) => {
  try {
    const { email, name, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const userData = {
      email,
      name,
      password: hashedPassword,
    };
    if (req.file)
      userData.profileImg = `/images/userProfile/${req.file.filename}`;

    const user = new User(userData);
    await user.save();
    res.json({ isOk: true, isAuthorize: false, message: "회원가입 성공" });
  } catch (err) {
    if (err.code === 11000) {
      const keyPattern = Object.keys(err.keyPattern)[0];
      return res.json({
        isOk: false,
        isAuthorize: false,
        message: "중복",
        error: { code: err.code, keyPattern },
      });
    }
    res.json({
      isOk: false,
      message: "회원가입 실패",
    });
  }
});

// 로그인
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      res.json({
        isOk: false,
        message: "존재하지 않는 유저입니다.",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.json({
        isOk: false,
        message: "잘못된 비밀번호입니다.",
      });
    }
    console.log(accessKey);
    const access_token = jwt.sign(
      { id: user.id, email: user.email, name: user.name },
      accessKey,
      {
        expiresIn: accessTokenExpires,
      },
    );

    const refresh_token = jwt.sign({ id: user.id }, refreshKey, {
      expiresIn: refreshTokenExpires,
    });

    await user.updateOne({ token: refresh_token });

    res.cookie("refresh_token", refresh_token, {
      httpOnly: true,
      expires: new Date(refreshTokenExpires),
    });

    res.json({
      isOk: true,
      access_token,
      exp: accessTokenExpires,
      message: "로그인 성공",
    });
  } catch (err) {
    console.log(err);
    res.json({
      isOk: false,
      message: "로그인 실패",
    });
  }
});

// 로그아웃
router.get("/logout", auth, async (req, res) => {
  try {
    const { id } = req.user;
    const user = await User.findOne({ _id: id });
    await user.updateOne({ token: "" });
    res.clearCookie("refresh_token");
    res.json({
      isOk: true,
      message: "로그아웃 성공",
    });
  } catch (err) {
    console.log(err);
    res.json({
      isOk: false,
      message: "로그아웃 실패",
    });
  }
});

//silent refresh
router.post("/refresh", async (req, res) => {
  const { refresh_token } = req.cookies;

  try {
    if (refresh_token) {
      const { id } = jwt.verify(refresh_token, refreshKey);
      const user = await User.findOne({ _id: id });

      if (user.token !== refresh_token) throw new Error("wrong access");

      const access_token = jwt.sign(
        { id: user.id, email: user.email, name: user.name },
        accessKey,
        {
          expiresIn: accessTokenExpires,
        },
      );

      res.json({
        isOk: true,
        access_token,
        exp: accessTokenExpires,
        message: "access token 재발급",
      });
    }
  } catch (err) {
    switch (err.message) {
      case "jwt expired":
        res.json({
          isOk: false,
          isAuthorize: false,
          message: "access token 재발급 실패",
        });
        return;

      case "wrong access":
        res.json({
          isOk: false,
          isAuthorize: false,
          message: "잘못된 접근입니다.",
        });
        return;
    }
  }
});

module.exports = router;
