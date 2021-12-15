//logic to upload image
const multer = require("multer");

const diskStorage = multer.diskStorage({
    destination: (req, file, callBack) =>{
        callBack(null,"uploads/")
    },
    filename: (req, file, callBack) =>{
        const filename = file.originalname;
        callBack(null,filename)
    }
});

const filefilter = (req,file, callBack) =>{
    const allowedFileTypes = ["image/png", "image/jpeg", "image/jpg"];
    allowedFileTypes.includes(file.mimetype) ? callBack(null,true) : callBack(null,false);
}
var storage = multer({storage: diskStorage, fileFilter: filefilter}).single('image');

module.exports = storage; 