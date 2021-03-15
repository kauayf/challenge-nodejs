
# Desafio de Node RocketSeat 🚀


##  ✅ Rotas da aplicação:
- [x] ```POST /repositories```: A rota deve receber title, ```url``` e ```techs``` dentro do corpo da requisição, sendo a URL o link para o github desse repositório. Ao cadastrar um novo projeto, ele deve ser armazenado dentro de um objeto no seguinte formato: 
```{ id: "uuid", title: 'Desafio Node.js', url: 'http://github.com/...', techs: ["Node.js", "..."], likes: 0 };```
Certifique-se que o ID seja um UUID, e de sempre iniciar os ```likes``` como 0.

- [x] ```GET /repositories``` : Rota que lista todos os repositórios;

- [x] ```PUT /repositories/:id``` : A rota deve alterar apenas o title, a url e as techs do repositório que possua o id igual ao id presente nos parâmetros da rota;

- [x] ```DELETE /repositories/:id``` :  A rota deve deletar o repositório com o id presente nos parâmetros da rota;

- [x] ```POST /repositories/:id/like``` :  A rota deve aumentar o número de likes do repositório específico escolhido através do id presente nos parâmetros da rota, a cada chamada dessa rota, o número de likes deve ser aumentado em 1;


##  ✅ Funcionalidades da aplicação

- [x] ```Listar os repositórios da sua API:``` Deve ser capaz de criar uma lista com o campo title de todos os repositórios que estão cadastrados na sua API.</li>

- [x] ```Adicionar um repositório a sua API:``` Deve ser capaz de adicionar um novo item na sua API através de um botão com o texto Adicionar e, após a criação, deve ser capaz de exibir o nome dele após o cadastro


##  ✅ Testes

- [x] ```should be able to create a new repository```: Para que esse teste passe, sua aplicação deve permitir que um repositório seja adicionado ao seu backend e listado no seu frontend dentro de uma LI.

- [x] ```should be able to list the repositories```: Para que esse teste passe, sua aplicação deve permitir que ao clicar no botão de remover que vai estar dentro da LI do repositório adicionado, o item seja removido da listagem. 

- [x] ```should be able to update repository``` :  Para que esse teste passe, sua aplicação deve permitir que sejam alterados apenas os campos ```url```, ```title``` e ```techs```.

- [x] ```should not be able to update a repository that does not exist``` : Para que esse teste passe, você deve validar na sua rota de update se o id do repositório enviado pela url existe ou não. Caso não exista, retornar um erro com ```status 400.```.

- [x] ```should not be able to update repository likes manually``` : Para que esse teste passe, você não deve permitir que sua rota de update altere diretamente os likes desse repositório, mantendo o mesmo número de likes que o repositório já possuia antes da atualização. Isso porque o único lugar que deve atualizar essa informação é a rota responsável por aumentar o número de likes.

- [x] ```should be able to delete the repository``` : Para que esse teste passe, você deve permitir que a sua rota de delete exclua um projeto, e ao fazer a exclusão, ele retorne uma resposta vazia, com ```status 204```.

- [x] ```should be able to give a like to the repository``` : Para que esse teste passe, sua aplicação deve permitir que um repositório com o id informado possa receber likes. O valor de likes deve ser incrementado em 1 a cada requisição, e como resultado, retornar um json contendo o repositório com o número de likes atualizado.

- [x] ```should not be able to like a repository that does not exist``` : Para que esse teste passe, você deve validar na sua rota de like se o id do repositório enviado pela url existe ou não. Caso não exista, retornar um erro com ```status 400```.


#### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js ⚡](https://nodejs.org/en/)
- [Insomnia ⚡](https://insomnia.rest/products/insomnia)
- [Express ⚡](https://expressjs.com/pt-br/)

#### Clonando o projeto
```sh
$ git clone https://github.com/kauayf/desafio-nodejs.git
$ cd desafio-nodejs
```

#### Iniciando Testes
```sh
$ yarn test
```


### :memo: Licença

Este projeto é desenvolvido sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para saber mais detalhes.

<p align="center" style="margin-top: 20px; border-top: 1px solid #eee; padding-top: 20px;">Feito com 💙 by <strong>  🌠 Kauay Felipe 🌠 </strong> </p>

 
[![The MIT License](https://img.shields.io/badge/license-MIT-green.svg?style=flat-square)](http://github.com/jvictorfarias/gobarber/LICENSE.md)
