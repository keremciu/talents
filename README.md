# Talents

It aims to provide a platform for managing and showcasing talents.

## Prerequisites

- Node = 18.x
- NPM >= 9.x
- Git

## Node version

To successfully run the project, you'll need to ensure you have Node.js version 18.x installed. If you currently have a different Node.js version installed on your local system, you can make use of [nvm (Node Version Manager)](https://github.com/nvm-sh/nvm) to temporarily install the required Node.js version specifically for this project.

## Getting started

1. Clone the project repository
2. Install the dependencies `npm install`

## About the project

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Project stack

- React (Create React App)
- CSS with Styled-Components
- Tests with React Testing Library

### Project structure

```bash
src/
  components
  server
  theme
  Playground.js
```

## Available scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3002](http://localhost:3002) to view it in the browser.

[JSON server](https://github.com/typicode/json-server) will run concurrently in watch mode on port 4002 - [http://localhost:4002](http://localhost:4002).

### `npm test`

Launches the test runner in the interactive watch mode.\
Read the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run seed-db`

Resets `db.json` to the original initial data (`db.base.json`).\
This script runs automatically after `npm install`.

## Available endpoints

- `GET http://localhost:4002/people`: get the full list of people
- `GET http://localhost:4002/people?name_like={substring}`: search for people where the name includes `{substring}`
- `GET http://localhost:4002/people?employment={string}`: search for people where the employment type matches `string`
- `GET http://localhost:4002/people?name_like={substring}&employment={string}`: search for people by name and employment type
- `GET http://localhost:4002/people/{id}`: get the person with id `{id}`
- `POST http://localhost:4002/people`: create a new person
- `PATCH http://localhost:4002/people/{id}`: update the person with id `{id}`
- `DELETE http://localhost:4002/people/{id}`: delete the person with id `{id}`
