# Mathmaster foo


## Getting started

Clone the project:

```bash
git clone https://robsan@scm.prod.nordnet.se/scm/dl/app-interest-history.git
```

Install node and npm (recommended via nvm - https://www.npmjs.com/package/nvm).
Recommended versions:
* npm version - 2.7.4
* node version - v0.12.2


Install all dependencies

```bash
npm set registry http://sinopia.prod.nordnet.se
npm install
```

## npm scripts

* `npm start` - Build and start the app in dev mode at http://localhost:9000
* `npm test` - Run the tests once
* `npm run test:dev` - Run the in chrome so you can debug
* `npm run test:debug` - Run the tests and start watching for changes
* `npm run build` - Run a production build
* `npm run localbuild` - Run a production build for local testing
* `npm run lint` - Run a lint of the source code

