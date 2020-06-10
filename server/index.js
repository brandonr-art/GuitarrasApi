var express = require('express');
var morgan = require('morgan');
var app = express();
var {mongoose} = require('./db')

var guitarraRouter = require('./routes/guitarras.routes');

//Configuración
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/guitarras', guitarraRouter);

//Iniciar server
app.listen(app.get('port'),()=>{
    console.log('Conectado al puerto', app.get('port'));
});