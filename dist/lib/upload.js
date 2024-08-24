import multer from "multer";
const upload = multer({
    // limits: {
    //     fileSize: 100000000
    // },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('Please upload a valid image file'));
        }
        cb(null, true);
    }
});
export default upload;
