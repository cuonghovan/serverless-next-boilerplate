Install serverless framework globally: npm install -g serverless

1. Copy and create new .env file from secrets.example.json
2. Install dependencies: 
    ```
    yarn install
    ```
3. Run in dev mode:
    ```
    yarn start
    ```
4. To deploy to staging or production, edit .env file in /app and /apis folder and run bellow commands

    ```
    yarn deploy
    ```
