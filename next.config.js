const envVars = require("./config/envVars");

module.exports = () => {
  let assetPrefix = "";
  const nodeEnv = envVars.getEnvVars.node_env;

  if (nodeEnv !== "dev") {
    assetPrefix = `https://s3-ap-southeast-1.amazonaws.com/gowind-${nodeEnv}`;
  }

  return {
    assetPrefix
  };
};
