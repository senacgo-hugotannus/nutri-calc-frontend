# Nutri Calc

> Trabalho da turma Técnico em Informática - 2023.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Documentação

A documentação dete projeto está organizada pela biblioteca [Docsify](https://docsify.js.org/#/).

Portanto, antes de mais nada, será preciso instalar o pacote `docsify-cli` para realizar a inicialização / visualização de seu conteúdo.

Para instalar o `docsify-cli` em escopo global, basta executar o seguinte comando no terminal:

````bash
npm i docsify-cli -g
````

A seguir, iremos abordar como utilizar o `docsify-cli` para gerar um servidor local para visualizarmos o conteúdo da documentação.

## Visualizando a documentação

Uma vez instalado o `docsify-cli`, e tendo um projeto já inicializado, é hora de compilar/executar a nossa documentação, que está localizada na pasta `./docs`. Portano, para criar um servidor local, iremos executar o seguinte comando:

````bash
docsify serve docs
````

Caso tudo tenha dado certo, a documentação estará disponível pelo endereço `http://localhost:3000`.
