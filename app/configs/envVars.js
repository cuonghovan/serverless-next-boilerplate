require("dotenv").config();

module.exports.getEnvVars = () => ({
  STAGE: process.env.STAGE || "dev",
  DOMAIN: process.env.DOMAIN || "localhost:3000",
  API_DOMAIN: process.env.API_DOMAIN || "localhost:8000"
});
