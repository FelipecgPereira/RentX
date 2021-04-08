<h2 align="center">
 <img src="https://i.imgur.com/oUAKMC5.png" alt="">
</h2>

# Indice

- [Sobre](#-sobre)
- [Tecnologia](#-tecnologia)
- [Libs](#-libs)
- [Banco de Dados](#-banco-de-dados)
- [Como baixar](#-como-baixar)
- [Script de testes](#-script-de-testes)
- [Swagger](#-Swagger)
---

## 📋 Sobre

Aplicação back-end construida no ignite da [Rocketseat](https://rocketseat.com.br/) com uso do nodeJS com TypeScript, onde  foi abordado conceitos de SOLID, desenvolvimento voltado a TDD (TEST DRIVEN DEVELOPMENT).

Rentx é uma aplicação para aluguel de carros, possui swagger configurado para documentação de suas rotas e funcionalidades, tambem faz uso de diversas blibiotecas como o tsyringe para injenção de dependencia dentro da aplicação usando o conceito de singleton, conta também com o TypeOrm para integração  com banco de dados, aplicando conceito de migrations e para testes utiliza o Jest entre outras blibiotecas integradas citadas abaixo.


## 💻 Tecnologia

- [nodeJs](https://nodejs.org/)

## 📦 Libs

- [dayjs](https://github.com/iamkun/dayjs)
- [Express](https://expressjs.com/)
- [handlebars](https://handlebarsjs.com/)
- [Jest](https://jestjs.io/)
- [jsonwebtoken](https://jwt.io/)
- [swagger-ui-express](https://swagger.io/)
- [tsyringe](https://github.com/microsoft/tsyringe)
- [TypeORM](https://typeorm.io/)

## 📎 Banco de dados

- [Postgress](https://www.postgresql.org/)


## 📝 Como baixar

```bash 
# Clonar o repositório
$ git clone https://github.com/FelipecgPereira/RentX.git

# Entrar no diretorio
$ cd pet-angular

# Instalar as dependencias caso use Yarn
$ yarn

# Instalar as dependencias caso use npm
$ npm install

# Iniciar o projeto local
$ yarn dev

# Para utilizar docker
$ docker-compose up

```
---

## 📜 Stript de testes



```bash 
# Comando para executar testes unitarios e de integração
$ yarn test
```

Aplicação tem o coverage configurado, acesse o a pasta **/coverage** e abra o index.html localizado dentro da pasta **/lcov-report**


---

## 📖 Swagger

Após executar aplicação, o link para acesso do swagger abaixo

```bash 
http://localhost:3333/api-docs/
```
Tela exibição

<h2>
<img src="https://i.imgur.com/zAR0hoH.png" alt=""/>
</h2>

---
Desenvolvido 🚀 por Felipe Pereira
