# Frontend Casino Template

Casino template

## Contents

- [Frontend Casino Template](#frontend-casino-template)
  - [Contents](#contents)
  - [Development environment](#development-environment)
  - [Setup](#setup)
  - [CLI](#cli)
  - [Docker](#docker)
  - [Style Guide](#style-guide)
  - [Software stack](#software-stack)
    - [Libs](#libs)

## Development environment

- OS: MacOS, Linux. In case of Windows, it is more practical to use WSL
- nodejs version: 10.16.0
- npm version: 6.9.0
- yarn version: ^1.16.0

## Setup

Clone repo
 [sample-casino-frontend](https://github.com/DaoCasino/sample-casino-frontend)

```bash
  git clone https://github.com/DaoCasino/sample-casino-frontend.git
```
Install dependencies using yarn

```bash
cd sample-casino-frontend
yarn
```
For local development create `.env` file
```
BACKEND_ADDR=YOUR_BACKEND_ADDR
```

## CLI 

- `yarn start` - start the project (development)
- `yarn build` - build the project
- `yarn test` - test the project
- `yarn lint` - lint the javascript files
- `yarn lint --fix` - linting, formating и error fix javascript

## Docker
Container build and launch web server at port 8888
```bash
docker build -t casino-frontend --build-arg BACKEND_ADDR=localhost:8080 .
docker run -it --rm -p 8888:80 casino-frontend
```
## Style Guide

Formatting rules to be appliied:

- [ESlint](https://eslint.org/) - javascript linter
- [Prettier](https://prettier.io/) - code formatting

See formatting rules [.eslintrc.json](./.eslintrc.json)

VScode extensions:

- [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [prettier - code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Software stack
### Libs

- [react-scripts](https://www.npmjs.com/package/react-scripts) - create-react-app
- [react](https://reactjs.org/)
- [react-router v5](https://reacttraining.com/react-router/web/guides/quick-start)
- [redux](https://redux.js.org/)
- [react-redux](https://github.com/reduxjs/react-redux)
- [redux-saga](https://redux-saga.js.org/) - lib (middleware) based on [generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators) to handle side effects better
- [reselect](https://github.com/reduxjs/reselect) - library of [selectors](https://medium.com/@matthew.holman/what-is-a-redux-selector-a517acee1fe8) for redux with [memoization](https://en.wikipedia.org/wiki/Memoization)
- [seamless-immutable](https://github.com/rtfeldman/seamless-immutable) - immutable structure
- [material-ui](https://material-ui.com/) - material UI framework

