const { version } = require("../package.json");
const { sortTokens } = require("builder");

module.exports = function () {
  const parsed = version.split(".");
  return {
    name: "Sushi Community List",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI:
      "https://raw.githubusercontent.com/nevellusdex/art/master/sushi/logo-256x256.png",
    keywords: ["sushiswap", "default"],
    tokens: sortTokens([...require("../tokens/ethereum.json")]),
  };
};
