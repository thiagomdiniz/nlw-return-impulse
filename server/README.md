# BACKEND

Commands that I used during the development process:

```
mkdir server && cd server
npm init -y
npm i typescript @types/node ts-node-dev -D
npx tsc --init #adjust tsconfig.json
npm i express
npm i -D @types/express
npm i prisma -D
npm i @prisma/client
npx prisma init
npx prisma migrate dev #create database/tables
npx prisma studio #tool to interact with the database through the browser
npm i nodemailer #send emails
npm i @types/nodemailer -D
#service to test sending email https://mailtrap.io/
npm i jest -D
npx jest --init
npm i ts-node -D
npm i -D @swc/jest #compiler, jest doesn't understand typescript
npm i @types/jest -D
npm run test
npm i cors
npm i @types/cors -D
npm install dotenv
```

Platform used for deployment: https://railway.app/