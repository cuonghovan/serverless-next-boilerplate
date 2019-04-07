require("dotenv").config();

module.exports.getEnvVars = () => ({
  STAGE: process.env.STAGE || "dev",
  DOMAIN: process.env.DOMAIN
});
