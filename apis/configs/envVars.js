require("dotenv").config();

module.exports.getEnvVars = () => ({
  STAGE: process.env.STAGE || "dev",
  API_DOMAIN: process.env.API_DOMAIN
});
