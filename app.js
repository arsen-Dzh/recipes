const express = require('express');
// const morgan = require('morgan');
const path = require('path');
// const hbs = require('hbs');
// const fetch = require('node-fetch');
const app = express();
const PORT = 3000;
const indexRouter = require('./routes/index.route');

app.set('view engine', 'hbs');
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // если используем дефолтное поведение формы
app.use(express.static(path.join(process.env.PWD, 'public')));
app.use('/', indexRouter);



app.listen(PORT, () => {
  console.log('start');
});

