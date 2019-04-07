const dotenv = require("dotenv");

dotenv.config();

module.exports.getEnvVars = () => ({
  node_env: process.env.NODE_ENV || "dev",
  domain: process.env.DOMAIN
});
