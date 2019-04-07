const dotenv = require("dotenv");

dotenv.config();

module.exports.getEnvVars = () => ({
  node_env: process.env.NODE_ENV,
  domain: process.env.DOMAIN
});
