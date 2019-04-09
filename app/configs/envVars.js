// Only needed in local with .env file. In Gitlab CI server, 
// we can predefine and access enviroment variables directly via .gitlab-ci.yml 
require("dotenv").config();

// We export enviroment variables so we can use them in serverless.yml
module.exports.getEnvVars = () => ({
  STAGE: process.env.STAGE || "dev",
  DOMAIN: process.env.DOMAIN || "localhost:3000",
  API_DOMAIN: process.env.API_DOMAIN || "localhost:8000"
});
