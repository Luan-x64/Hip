const app = require('./config/server');
const fs = require('fs')
var chamaBot = require('./config/configTelegram.js');
var { getAuth, signInWithEmailAndPassword } = require("firebase/auth");






var privateKey = fs.readFileSync( './ssl/private.key' );
var certificate = fs.readFileSync( './ssl/certificate.crt' );
const https = require('https');

// const webpack = require('webpack');
// const webpackMiddleware = require('webpack-dev-middleware');
// const webpackConfig = require('./webpack.config');
// const compiler = webpack(webpackConfig);

// app.use(webpackMiddleware(compiler));



app.locals.email_contato = 'contato@meusite.com.br';

var server =  app.listen(8080, '0.0.0.0', function(){
  console.log("Servidor online");
});

 https.createServer({
    key: fs.readFileSync( './ssl/private.key'),
    cert: fs.readFileSync( './ssl/certificate.crt' ),
  },app).listen(443, () => {
      console.log("serever is runing at port 80");
});



//responsavel por todo link enixistente, avisa o sistema
app.use(function(req, res, next) {
           
 chamaBot.msgAlerta(req)

 //console.log(req.path)
 res.status(404).send("Esta rota não existe");
});



// INICIA PAYPAL RECEBE AUTH



// var express = require('express');
// var appPayPal = express()

// appPayPal.post('/webhook', (req, res) => {
//   const payment = req.body;

//   // Processar a informação do pagamento e atualizar o estado da compra no seu banco de dados

//   res.sendStatus(200);
// });

// appPayPal.listen(3000, () => {
//   console.log('Servidor iniciado na porta 3000');
// });







