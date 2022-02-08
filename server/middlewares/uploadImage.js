const multer = require("multer");
const path = require("path");

const allowedTypeList = ["image/gif", "image/jpeg", "image/heic", "image/png"];
const fileSize = 2 ** 20 * 20;
const maxCount = 5;
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize,
  },
  filefilter: (req, file, cb) => {
    if (allowedTypeList.includes(file.mymetype)) {
      return cb(null, true);
    }
    cb("지원하지 않는 확장자");
  },
});

const uploadImage = (req, res, next) => {
  upload.array("userfiles", maxCount)(req, res, err => {
    if (err) {
      console.log(err);
      return res.json({ isOk: false, message: "이미지 업로드 실패" });
    }
    next();
  });
};

module.exports = uploadImage;
