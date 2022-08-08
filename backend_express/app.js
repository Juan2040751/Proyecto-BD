const morgan = require('morgan');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const history = require('connect-history-api-fallback');
const path = require('path');
const personaRouter = require('./routes/personas');
const express = require('express');
const app = express();

// Middlewares
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(fileUpload({useTempFiles: true}));

app.use('/persona', personaRouter);

// Middlewares for Vue
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

// Settings


app.listen(app.get('port'), ()=>{
    console.log('Server on port ' + app.get('port'));
});

module.exports = app;
