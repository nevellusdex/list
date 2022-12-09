const { version } = require("../package.json");
const { sortTokens } = require("builder");

module.exports = function () {
  const parsed = version.split(".");
  return {
    name: "Nevellus Community List",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI:
      "https://avatars.githubusercontent.com/u/118773832?s=200&v=4",
    keywords: ["nevellus", "default"],
    tokens: sortTokens([...require("../tokens/ethereum.json")]),
  };
};
