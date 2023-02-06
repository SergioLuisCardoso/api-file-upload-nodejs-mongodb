const multer = require("multer");

/* Chamando o path - pacote do próprio Node, que nos permite acesso as pastas do servidor */
const path = require("path");

/* Destination - onde o arquivo será salvo, com função: requisição, file, cb (invocando função de callBack) */
/* Filename - configura o nome do arquivo no servidor */

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

module.exports = upload;