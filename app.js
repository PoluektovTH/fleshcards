require('@babel/register');
const express = require('express');

const app = express();
const config = require('./config/config');
const mainRouter = require('./routes/main.routes');

const PORT = process.env.PORT ?? 3000;

config(app);

app.use('/', mainRouter)

app.listen(PORT, () => {
    console.log(`Server started at ${PORT} port`);
  });