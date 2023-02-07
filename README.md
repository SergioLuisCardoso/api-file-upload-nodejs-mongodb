# API File Upload Nodejs Mongodb


<img src="/images/folder.png" alt="project folder">

Esta API tem por finalidade enviar arquivos de uma máquina local, para o banco de dados MongoDB Atlas.

<!--
> Routes screen: 
GET /order, PUT / order/:id, DELETE / Order/:id, GET / Order/:id, PATCH / and Order/:id using Insomnia.
-->
> Rotas da aplicação (GET /order, PUT / order/:id, DELETE / Order/:id, GET / Order/:id, PATCH / and Order/:id) exibidos na tela do Insomnia.

<img src="/assets/image-terminal.jpg" alt="terminal image">

> Exibição dos Middlewares "checkOrderId" e "methUrl" no terminal do VSCode.

## 🛸 Sobre a aplicação

O objetivo dessa aplicação foi criar uma API que pudesse enviar arquivos de uma máquina local, para um banco de dados em nuvem.
Como tecnologia de back-end, foi utilizado o [Node.js](https://nodejs.org/en/) com [Express](https://expressjs.com/pt-br/) e o banco de dados [MongoDB Atlas](https://www.mongodb.com/), juntamente com as dependências [DotEnv](https://www.dotenv.org/), [Mongoose](https://mongoosejs.com/) e [Multer](https://www.npmjs.com/package/multer). 
A extensão Thunder Client, presente no VS Code, foi adicionada para criar as requisições e testar as rotas.


### Rotas

- `POST /order`: A rota recebe o `pedido do cliente`, o `nome do cliente` e `o valor do pedido`, essas informações são passadas dentro do corpo(body) da requisição, e com esses dados registra-se o novo pedido dentro de um array no seguinte formato: `{ id: "ac3ebf68-e0ad-4c1d-9822-ff1b849589a8", order: "X- Salada, 2 batatas grandes, 1 coca-cola", clientName:"José", price: 44.50, status:"Em preparação" }`. O ID é gerado automaticamente, dentro do código utilizando UUID V4 assim que o pedido é criado, neste estágio o status exibe a mensagem "Em preparação".


- `GET /order`: Essa rota lista todos os pedidos já feitos.

- `PUT /order/:id`: Essa rota altera um pedido já feito. Pode-se alterar,um ou todos os dados do pedido.O `id` do pedido, por padrão, é enviado nos parâmetros da rota.

- `DELETE /order/:id`: Essa rota deleta um pedido já realizado, com o `id` enviado nos parâmetros da rota.

- `GET /order/:id`: Essa rota recebe o `id` nos parâmetros e retorna um pedido específico.

- `PATCH /order/:id`: Essa rota recebe o `id` nos parâmetros e sempre que acionada, altera o status do pedido recebido, pelo id para "Pronto".


### Exemplo:

Se chamar a rota `POST /order` repassando `{ order: "X- Salada, 2 batatas grandes, 1 coca-cola", clienteName:"José", price: 44.50 }`,
o array deve fica desta forma:

```js
[
  {
    id: "ac3ebf68-e0ad-4c1d-9822-ff1b849589a8",
    order: "X- Salada, 2 batatas grandes, 1 coca-cola",
    clienteName:"José", 
    price: 44.50,
    status:"Em preparação"
  }
];
```


Se chamar a rota `PATCH /order/ac3ebf68-e0ad-4c1d-9822-ff1b849589a8`,
o array sofre a seguinte alteração:

```js
[
  {
    id: "ac3ebf68-e0ad-4c1d-9822-ff1b849589a8",
    order: "X- Salada, 2 batatas grandes, 1 coca-cola",
    clienteName:"José", 
    price: 44.50,
    status:"Pronto"
  }
];
```

### Middlewares

- Middleware checkOrderId:
Utilizado em todas rotas que recebem o parâmetro ID, verifica se o ID passado existe. Caso não exista, retorne uma mensagem de erro, caso contrário permite que requisição continue normalmente;

- Middleware methUrl:
Chamado em todas requisições que tenha um console.log.
Mostra o método da requisiçao (GET, POST, PUT, DELETE e PATCH) seguido da url da requisição.

### Exemplo:
[POST] - /order




#### 📝 Licença

Esse projeto está sob licença. 
Veja o arquivo [LICENÇA](LICENSE.md) para mais detalhes.

[⬆ Voltar ao topo](#api-file-upload-nodejs-mongodb)<br>

 