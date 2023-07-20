const express = require('express');
const app = express();
const morgan = require('morgan');
const { mongoose } = require('./database');

app.set('nombreApp', 'para manejo de USUARIOS');
app.set('puerto', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/usuario', require('./routes/server.routes'));

app.listen(app.get('puerto'), () => {
    console.log('APP', app.get('nombreApp'));
    console.log('Puerto del servidor', app.get('puerto'));
})