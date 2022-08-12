const morgan = require('morgan');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const history = require('connect-history-api-fallback');
const path = require('path');
const personaRouter = require('./routes/personas');
const trabajadorRouter = require('./routes/trabajador');
const usuarioRouter = require('./routes/usuario');
const trabajoRouter = require('./routes/trabajo');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middlewares
app.use(morgan('tiny'));
app.use(cors({
    origin: ["http://localhost:5000","http://127-0.0.1:5000"]
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(fileUpload({useTempFiles: true}));
app.use(bodyParser.urlencoded({extended: true}))
app.use('/persona', personaRouter);
app.use('/trabajador', trabajadorRouter);
app.use('/usuario', usuarioRouter);
app.use('/trabajo', trabajoRouter);
// Middlewares for Vue
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

// Settings


app.listen(app.get('port'), ()=>{
    console.log('Server on port ' + app.get('port'));
});

module.exports = app;
