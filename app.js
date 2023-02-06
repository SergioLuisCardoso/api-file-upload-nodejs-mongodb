const express = require("express")
const app = express()

require("dotenv").config()
require("./db");

const port = process.env.PORT || 3000;

/* Chamando o roteador */
const pictureRouter = require("./routes/picture")

/* Inserindo na nossa aplicação */
app.use("/pictures", pictureRouter);

/* app.listen para 'escutar' a porta, disponibilizá-la para utilizarmos via rota*/
app.listen(port, () =>{
    console.log(`O servidor está rodando na porta ${port}!`)

})