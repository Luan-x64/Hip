var Recaptcha = require('express-recaptcha').RecaptchaV3

var chamaBot = require('../../config/configTelegram.js');
module.exports = function(app){

  var recaptcha = new Recaptcha(process.env.KEY_SITE_CAP_V2, process.env.KEY_PRIVATE_CAP_V2);

  app.get('/', async function(req, res){
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(`Endereço IP: ${ip}`);
     res.render('index')

  });

  app.get('/info/:id', async function(req, res){
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(`Endereço IP: ${ip}`);
     res.render('ingresso')

  });

  app.get('/checkout/:id', async function(req, res){
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
   
     res.render('checkout')

  });

  // app.get('/login', async function(req, res){
    
  //   //app.app.controllers.anony_defaults.login(app, req, res);

  // });

  // app.get('/cadastro', async function(req, res){
  //   app.app.controllers.anony_defaults.cadastro(app, req, res);

    
  // });




  // //lado servidor  -------------------------------------===

  app.get('/teste', async function(req, res){
    //console.log(itemsModel.addItem('321312'))
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(`Endereço IP: ${ip}`);

    
  });
  // app.post('/cadastro/sendtospace', recaptcha.middleware.verify, async function(req, res){

  //   if (!req.recaptcha.error) {
  //     // success code
  //     app.app.controllers.anony_defaults.cadastro_salva(app, req, res);
  //   } else {
  //       // error code
  //       console.log("error recptcha")
  //       res.redirect('/cadastro')
  //   }


  // });

  // app.post('/login', async function(req, res){
  //   app.app.controllers.anony_defaults.login_auth(app, req, res);

  // });


  
  // app.post('/recEmail' , async function(req, res){
    
  //   app.app.controllers.anony_defaults.recSenha(app, req, res);

  //   return
  //  // req.session.destroy();
  // });
  



  



}