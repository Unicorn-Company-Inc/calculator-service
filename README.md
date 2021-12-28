
## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## API
Default port: 3003

```properties
# Hello World
GET /calculator

# Calculate default mwst
GET /calculator/mwst/<price>

# Calculate mwst using custom percentage
GET /calculator/mwst/<price>?percentage=10 
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
