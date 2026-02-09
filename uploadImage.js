const fs = require("fs");
const imagekit = require("./imagekit");

async function uploadImage(file) {
  const response = await imagekit.upload({
    file: fs.readFileSync(file.path), // buffer
    fileName: file.originalname,
    folder: "/uploads", // optional
  });

  return {
    url: response.url,          // 🔥 PUBLIC IMAGE URL
    name: response.name || file.originalname // image name
  };
}

module.exports = uploadImage;
