# Blogs API Project

Aplicação realizada enquanto aluno da [Trybe](https://www.betrybe.com/) para reforçar os conhecimentos sobre [Node.js](https://nodejs.org/en/)
conectado à um banco de dados [MySQL](https://www.mysql.com/) com [Sequelize](https://sequelize.org/) através de uma [API RESTful](https://blog.betrybe.com/desenvolvimento-web/api-rest-tudo-sobre/).
O projeto consiste em desenvolver o back-end de blogonde é possível procurar, criar, visualizar e deletar usuários e posts no blog. A aplicação utiliza uma API RESTful com arquitetura MSC (Model-Service-Controller), que é um modelo de arquitetura de software baseado em camadas:

- `Model`: Esta camada é responsável por abrigar todo o código que pode acessar os dados no banco de dados ou no sistema de arquivos. Ela está sendo utilizada com o pacote [Sequelize](https://sequelize.org/).
- `Service`: Esta camada é responsável por validar as regras de negócio da aplicação.
- `Controller`: Essa camada é responsável por validar os valores recebidos de uma aplicação cliente.

<br>

## Utilização

A aplicação possui as seguintes rotas para realizar as operações de CRUD de posts:

- `GET` /posts ou /user: Retorna a lista de todos os posts existentes no banco de dados
- `GET` /posts/search: Retorna o post pesquisado através de uma query
- `GET` /posts/:id ou /user/:id : Retorna o post com o id especificado na rota
- `POST` /posts ou /user: Cria um novo post com os dados enviados no corpo da requisição
- `PUT` /posts/:id ou /user/:id : Atualiza o post com o id especificado na rota com os dados enviados no corpo da requisição
- `DELETE` /posts/:id ou /user/:id : Exclui o post com o id especificado na rota

<br>

<details>
  <summary><strong>Como instalar o Projeto Blogs API</strong></summary><br />

## Instalação
 
<hr>
 
### Rodando a aplicação via [Docker](https://www.docker.com/)

> - :warning: Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.

> - :warning: Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run debug, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima

> - :warning: Se você se deparar com o erro abaixo, quer dizer que sua aplicação já esta utilizando a `porta 3000`, seja com outro processo do Node.js (que você pode parar com o comando `killall node`) ou algum container! Neste caso você pode parar o container com o comando `docker stop <nome-do-container>`

<br>

- Clone o repositório `git@github.com:Rafael-Souza-97/blogs-api.git`:

```bash
git clone git@github.com:Rafael-Souza-97/blogs-api.git
```

<br>

- Entre na pasta do repositório que você acabou de clonar:

```bash
cd blogs-api
```

<br>

- Rode o serviço `node` com o comando `docker-compose up -d --build`:

 > - Esse serviço irá inicializar um container chamado `blogs_api` e outro chamado `blogs_api_db`.
 > - A partir daqui você pode rodar o container via CLI ou abri-lo no VS Code.
 
```bash
docker-compose up -d --build
```

<br>

- Use o comando `docker exec -it store_manager bash`:

 > - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.
 > - As credencias de acesso ao banco de dados estão definidas no arquivo `docker-compose.yml`, e são acessíveis no container através das variáveis de ambiente `MYSQL_USER` e `MYSQL_PASSWORD`.

```bash
docker exec -it blogs_api bash
```

<br>

- Instale as depëndencias, caso necessário, com `npm install` (dentro do bash do container):

```bash
npm install
```

 > Execute a aplicação com `npm start` ou `npm run debug`

<br>
<hr>
 
### Rodando a aplicação SEM [Docker](https://www.docker.com/)

 > :warning: Para rodar a aplicação desta forma, obrigatoriamente você deve ter o [Node](https://nodejs.org/en/) instalado em seu computador.
 
<br>

- Clone o repositório `git@github.com:Rafael-Souza-97/blogs-api.git`:

```bash
git clone git@github.com:Rafael-Souza-97/blogs-api.git
```

<br>

- Entre na pasta do repositório que você acabou de clonar:

```bash
cd blogs-api
```

 > Execute a aplicação com `npm start` ou `npm run debug`

<hr>

### Scripts

- Criar o banco de dados, migrar e popular as tabelas:

```sh
  npm run build
```

<br>

</details>
  
## Autor

- [Rafael Souza](https://github.com/Rafael-Souza-97)

## Referências

 - [Trybe](https://www.betrybe.com/)

## Tecnologias / Ferramentas utilizadas

- [API REST](https://blog.betrybe.com/desenvolvimento-web/api-rest-tudo-sobre/)
- [Express](https://expressjs.com/)
- [Node](https://nodejs.org/en/)
- [MySQL](https://www.mysql.com/)
- [MySQL Workbench](https://www.mysql.com/products/workbench/)
- [Sequelize](https://sequelize.org/)
- [Docker](https://www.docker.com/)
- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Zoom](https://zoom.us/)
- [Slack](https://slack.com/intl/pt-br/)
- [VsCode](https://code.visualstudio.com/)
- [Git](https://git-scm.com/) & [GitHub](https://github.com/)
- [Linux - Ubuntu](https://ubuntu.com/)

## Infos Adicionais

- ###### Percentual de cumprimento de requisitos ([Trybe](https://www.betrybe.com/))- 100%

## Preview

https://user-images.githubusercontent.com/99055008/205993165-043ad815-3527-490e-984c-fbafd825d19e.mp4

