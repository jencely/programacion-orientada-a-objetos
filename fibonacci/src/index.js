/*const express = require('express');
const app = express();
const morgan = require('morgan');

//settings
app.set('port', process.env.PORT || 4000);
//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// rutas
app.get ('/', (req, res) =>{
   res.send('fibonacci');
})
//empieza el servidor
app.listen(app.get('port'), () => {
   console.log(`Server on port ${app.get('port')}`);
});*/

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
var cors = require('cors')
var rutas = require('./fibonacci.js')
// expoFibo = require('./codefibo')


const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
var cors = require('cors')
var rutas = require('./fibonacci.js')
// expoFibo = require('./codefibo')


const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors())

var corsOptions = {
    origin: 'http://127.0.0.1:5500/',
    optionsSuccessStatus: 200 
}


app.use( '' , rutas)
// app.post('/fibo', function (req,res) {
//     var data1 =req.body.valor1
// var data2= req.body.valor2
//     let valoresSuma = data1 + data2
//     res.json(valoresSuma)
//     // res.send(suma);
// });
    
app.get('/fibonacci', function (req,res) {
    res.send('hola');
});

app.get('/', (req,res) => {
    res.send('Pagina principal')
})
app.listen( 8080, () => {
    console.log('Welcome http://localhost:' + 8080)
})
