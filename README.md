# API File Upload Nodejs Mongodb


<img src="/images/folder.png" alt="project folder">

Esta API tem por finalidade enviar arquivos de uma máquina local, para o banco de dados MongoDB Atlas.


<img src="/images/routes.png" alt="terminal image">

> Rotas da aplicação (POST /pictures, GET /pictures e DELETE / pictures/id:).

## 🛸 Sobre a aplicação

O objetivo dessa aplicação foi criar uma API que pudesse enviar arquivos de uma máquina local, para um banco de dados em nuvem.
Como tecnologia de back-end, foi utilizado o [Node.js](https://nodejs.org/en/) com [Express](https://expressjs.com/pt-br/) e o banco de dados [MongoDB Atlas](https://www.mongodb.com/), juntamente com as dependências [DotEnv](https://www.dotenv.org/), [Mongoose](https://mongoosejs.com/) e [Multer](https://www.npmjs.com/package/multer). 
A extensão [Thunder Client](https://www.thunderclient.com/), presente no [VS Code](https://code.visualstudio.com/), foi adicionada para criar as requisições e testar as rotas.


### Rotas

- `POST /pictures`: A rota recebe do usuário o `name` do arquivo: `"Imagem 1"` por exemplo - mostra a sua localização em `src` onde é gerado um `id`, automaticamente. Sua exibição é no seguinte formato: `{"picture": {"name": "Imagem 2", "src": "uploads\\1675816370496.png","_id": "63e2edb293f9d4d01e1f573b","__v": 0}, "msg": "Imagem salva com sucesso"}`. O ID é gerado automaticamente, dentro do código, e neste estágio o status exibe a mensagem "Imagem salva com sucesso".

- `GET /pictures`: Essa rota lista todos as imagens salvas no MongoDB.

- `DELETE /order/:id`: Essa rota deleta uma imagem salva no banco de dados via `id`, enviado nos parâmetros da rota.


### Exemplo:

Se chamarmos a rota `POST /pictures` repassando `{ Form Fields, name: Imagem 1 }`,
teremos:

```js
{
  "picture": {
    "name": "Imagem 1",
    "src": "uploads\\1675815114935.jpg",
    "_id": "63e2e8ca93f9d4d01e1f5733",
    "__v": 0
  },
  "msg": "Imagem salva com sucesso"
}
```


Se chamarmos a rota "delete /pictures/" `http://localhost:4000/pictures/63e2e8ca93f9d4d01e1f5733`,
deletaremos o arquivo pelo seu id:

```js
{
  "message": "Imagem removida com sucesso!!"
}
```


#### 📝 Licença

Esse projeto está sob licença. 
Veja o arquivo [LICENÇA](LICENSE.md) para mais detalhes.

[⬆ Voltar ao topo](#api-file-upload-nodejs-mongodb)<br>

 