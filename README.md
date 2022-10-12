# json5-jest

> Jest json5 transformer with support for Jest 29+

## Installation

```shell
npm i -D @talabes/json5-jest
```

## Jest integration

Please append to package.json

```json
"jest": {
  "transform": {
    "^.+\\.json5?$": "json5-jest"
  }
}
```

or append to jest.config.js

```js
module.exports = {
  transform: {
    "^.+\\.json5?$": "json5-jest"
  }
};
```

## Requirements

- node >= 6.9.0
- npm >= 2.x

## Licence

MIT
