import express from "express";
import authRouter from "./auth/auth.route.js";
import cors from "cors";
import multer from "multer";
import courseRouter from "./routes/course.route.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "temp/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname +
        "-" +
        uniqueSuffix +
        "." +
        file.originalname.split(".").at(-1)
    );
  },
});

const upload = multer({ storage });

const app = express();
app.use(cors());
app.use(express.json());
app.post("/file", upload.single("file"), function (req, res, next) {
  console.log(req.file);
  res.send(req.file.filename);
});

app.use("/courses", courseRouter);
app.use("/auth", authRouter);

export default app;
