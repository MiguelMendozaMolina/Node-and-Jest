const express = require('express');
const axios = require('axios');
const parser = require('body-parser');
const { users } = require('./src');
const app = express();
const port = 3000;

app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

/* inyecciones como dependencias : paso de argumento a una funcion */
/* se evita tener que tener que realizar un require */
/* paso de dependencias a un servicio */

//app.get('/', users.get);

const userHandlers = users({ axios });
app.get('/', userHandlers.get);
app.post('/', userHandlers.post);
app.put('/:id', userHandlers.put);
app.delete('/:id', userHandlers.delete);

app.listen(port, () => console.log(`Example app listening on port ${port}`));
