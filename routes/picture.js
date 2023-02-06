const express = require('express');
const router = express.Router();

const upload = require("../config/multer")

const PictureController = require("../controllers/pictureController")


router.post("/", upload.single("file"), PictureController.create);
router.get("/", PictureController.findAll);
router.delete("/:id", PictureController.remove);


/* Exportando as rotas */
module.exports = router;