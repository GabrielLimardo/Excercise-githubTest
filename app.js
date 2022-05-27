const express = require('express');
const bodyParser = require('body-parser')



const app = express();

const port = 3001;

// app.get('/', (req, res) => res.send('Hello World!'));


app.listen(port,()=>{
    console.log('la aplicacion esta en linea! \nLa aplicacion se esta ejecutando en http://localhost:'+ port);

    
})

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

global.config = require('./config');


 const indexRoutes = require(global.config.routes.route + 'index');
 app.use('/', indexRoutes);


