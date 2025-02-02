const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.use(express.static("public")); // 讓 Express 直接提供 public 資料夾內的靜態檔案

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/api/images", (req, res) => {
    const imagesDir = path.join(__dirname, "public", "images"); // 你的圖片資料夾
    fs.readdir(imagesDir, (err, files) => {
        if (err) {
            return res.status(500).json({ error: "無法讀取資料夾" });
        }
        res.json(files.filter(file => file.endsWith(".jpg") || file.endsWith(".png"))); // 只回傳圖片
    });
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
