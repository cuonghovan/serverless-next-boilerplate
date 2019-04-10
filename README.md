### Purpose

A boilerplate for building apllication with serverless and nextjs framework.
It supports auto deployment with Gitlab-CI.

### Usage

1. Install serverless framework globally:
   ```
   npm install -g serverless
   ```
2. Copy and create a new .env file from .env.example in ./app and ./apis folder.
3. Install dependencies:

   ```
   yarn install
   ```

4. Run in dev mode:

   ```
   yarn start
   ```

   We use a custom server with Express to handle custom routing of the Next app in server side. Beside, the apis are served with the help of serverless-offline plugin.

5. To deploy to staging or production add the environment variables in .env files in ./app and ./apis folder corresponding to the deployment environment and run bellow command.

   ```
   yarn deploy
   ```

   It will deploy the Next app and also the apis to AWS Lambda. Each page in the Next app will become one Lambda function.
   All static resources will be uploaded to S3.
