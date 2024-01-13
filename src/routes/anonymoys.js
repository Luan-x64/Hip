// import { RecaptchaV3 } from 'express-recaptcha';
import express from 'express';
import supabase from '../../config/dataBase.js';
// import authController from '../controllers/authController.js';
// import { RecaptchaV3 } from 'express-recaptcha';
// import app from '../.config/server.js';
// import authController from '../controllers/authController.js';

const route = express.Router();

// const recaptcha = new RecaptchaV3(process.env.KEY_SITE_CAP_V2, process.env.KEY_PRIVATE_CAP_V2);

route.get('/', async (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  res.render('../view/index.ejs');
});

route.get('/info/:id', async (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(`Endereço IP: ${ip}`);
  res.render('ingresso');
});

route.get('/checkout/:id', async (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  res.render('checkout');
});

route.get('/login/', async (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  res.render('login');
});

route.post('/login', async (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const { email, pass } = req.body;

  res.status(200);
  
  //fazer alguma verificação para descobrir se a conexão é real antes de processa-la no servidor
  // Verifique se o email fornecido tem o formato correto
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'O e-mail fornecido não é válido' });
  }

 try {
   const { data, error } = await supabase.auth.signInWithPassword({
     email: email,
     password: pass,
   }) 
    if(data.role == authenticated)
   if(error.status == 400){
    
   }
  
   return res.status(400).json( error);

 } catch ([error]) {
    //corta a conexão para evitar qualquer tipo de erro
    console.log("ERRO LOGIN:"+Error);
    return res.status(400).end();

 }

});

route.get('/teste', async (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(`Endereço IP: ${ip}`);
});

export default route;
