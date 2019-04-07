const envVars = require("../configs/envVars").getEnvVars();
let assetPrefix = "";

if (envVars.STAGE !== "dev") {
  assetPrefix = `https://s3-ap-southeast-1.amazonaws.com/gowind-${
    envVars.STAGE
  }`;
}

module.exports = {
  assetPrefix,
  env: envVars
};
