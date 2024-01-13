  import express from 'express';
  import bodyParser from 'body-parser';
  import helmet from 'helmet';
  import expressSession from 'express-session';
  import cookieParser from 'cookie-parser';
  import useragent from 'express-useragent';

  // Outros imports aqui, se necessário

  // Configurações do ambiente
  const app = express();
  // Configurações do aplicativo
  app.use(cookieParser());
  app.use(express.static('./public/'));
  app.use(helmet({ contentSecurityPolicy: false, crossOriginResourcePolicy: false }));
  app.set('view engine', 'ejs');
  app.set('views', './src/view');
  app.use(useragent.express());
  app.use(expressSession({
    secret: 'Iiji$@#@#FKD@$',
    resave: false,
    saveUninitialized: true
  }));

  // Middleware sobre dados via post
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));



  // Configuração de rotas e outros módulos
import route from '../src/routes/anonymoys.js';
app.use('/', route);

  // import models from '../src/models';
  // import controllers from '../src/controllers';

  // app.use('/', route);
  // route(route)
  // route(app)
  // dataBase(app)
  // models(app)
  // controllers(app)

  // consign()
  //   .include('./src/routes')
  //   // .then('config/dataBase.js')
  //   // // .then('config/dbFirebaseAdm.js') 
  //   // // .then('config/MercadoPago.js')   
  //   // .then('./src/models')
  //   // // .then('./botTelegram.js')
  //   // .then('./src/controllers')
  //   .into(app);

  // Inicia o servidor

  export default app;