const json5 = require("json5");

module.exports = {
  process(sourceText) {
    return {
      code: `module.exports = ${JSON.stringify(json5.parse(sourceText))};`,
    };
  },
};