## HOW TO RUN APPLICATION (SET-UP)

1. Clone the repo into your IDE

2. Open your terminal and navigate to the directory.

3. RUN 'npm install' on your terminal

4. RUN 'npx nodemon ./index.ts' or 'npm run dev' to start the server @ port 3001. You should see the msg below:
   ⚡️[server]: Server is running at http://localhost:3001

5. Open postman, and make a POST request to http://localhost:3001/api/v1/sorter

6. You should get a 401, and the error message displayed will contain a Bearer Token.
   Set the bearer token under Authorization.

7. Select Body > Raw > Json and then copy the const testdata from ./testData.ts
   Send the request.

8. The result will show on both the terminal and the response.

## HOW TO RUN TEST

1. Open your terminal.

2. RUN 'npm run test'.
