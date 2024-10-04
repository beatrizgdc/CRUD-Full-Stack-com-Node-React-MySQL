
#  API RESTful com Node.js, MongoDB e Mongoose

Este projeto é uma API RESTful desenvolvida com Node.js, Mongoose e MongoDB. A API permite realizar operações CRUD (Criar, Ler, Atualizar e Deletar) em um recurso chamado `Person`.

- Video do projeto: [API RESTfull NodeJS, MongoDB e Mongoose]()


## Funcionalidades

- **Criar**: Adiciona uma nova pessoa ao banco de dados.
- **Ler**: Recupera uma lista de todas as pessoas ou uma pessoa específica.
- **Atualizar**: Atualiza as informações de uma pessoa existente.
- **Deletar**: Remove uma pessoa do banco de dados.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.
- **Express**: Framework para Node.js que facilita a criação de APIs.
- **Mongoose**: Biblioteca para modelar dados em MongoDB.
- **MongoDB**: Banco de dados NoSQL para armazenamento dos dados.

## Documentação da API

#### Retorna todos os itens

```http
  GET /person
```

#### Retorna um item

```http
  GET /person/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

#### Cria um item

```http
  POST /person
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. Todas as informações do json|

json
{
    "name": "Novo Nome",
    "salary": 1200,
    "approved": true
}

#### Edita um item

```http
  PATCH /person/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer editar e Todas as informações do json|

json
{
    "name": "Novo Nome",
    "salary": 1200,
    "approved": true
}

#### Deleta um item

```http
  DELETE /person/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer deletar|






