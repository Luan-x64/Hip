var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var helmet = require("helmet");
var expressSession = require('express-session');
var cookieParser = require('cookie-parser');
const useragent = require('express-useragent');


// const multer = require('multer');

require('dotenv').config();

console.log(process.env.BOT_TOKEN)
var app = express();
app.use(cookieParser());
app.use(express.static('./public'));

app.use(express.static(__dirname))
app.use(helmet({contentSecurityPolicy: false, crossOriginResourcePolicy: false}));
app.set('view engine', 'ejs');
app.set('views', './src/view/');
app.use(useragent.express());
app.use(expressSession({
    secret: 'Iiji$@#@#FKD@$',
    resave: false,
    saveUninitialized: true
}));

//middlware sobre dados via post
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('*.vue', (req, res, next) => {
    console.log(req)
    res.type('application/javascript'); // Define o MIME type como JavaScript
    next();
  });
consign()
        .include('./src/routes')
        //.then('config/dbFirebaseUsers.js')
        // .then('config/dbFirebaseAdm.js') 
        //.then('config/MercadoPago.js')   
        .then('./src/models')
        // .then('./botTelegram.js')
        .then('./src/controllers')
        .into(app);


 




module.exports = app;