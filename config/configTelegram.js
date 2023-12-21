const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(process.env.BOT_TOKEN, {polling: true});
const axios = require('axios');
const cheerio = require('cheerio');
var acessos = 0;


async function obterCidadePorIP(ip) {
  try {
    const response = await axios.get(`http://ip-api.com/json/${ip}`);

    // Retornar a cidade
    return response.data;
  } catch (error) {
    console.error('Erro ao obter informações da cidade:', error.message);
    throw error;
  }
}



const msgBemvindo = 'Olá! Bem-vindo ao bot integrado ao sistema.\n' +
  'Lista de comandos disponíveis:\n' +
  '[ /lista] - lista todos os usuários cadastrados no sistema\n' +
  '[ /bann ] - teste';


  
  bot.on('message', (msg) => {

    var bye = "bye";
    if (msg.text.toString().toLowerCase().includes(bye)) {
    bot.sendMessage(msg.chat.id, "Have a nice day " + msg.from.first_name);
    }
    
    });

  bot.on('message', (msg) => {
    var location = "location";
    console.log(msg.text)
    if (msg.text.indexOf(location) === 0) {
        bot.sendLocation(msg.chat.id,44.97108, -104.27719);
        bot.sendMessage(msg.chat.id, "Here is the point");

    }
});



bot.onText(/\/start/, (msg, match) => {
    bot.sendMessage(msg.chat.id, "Lista de comandos disponíveis:\n", {
        "reply_markup": {
            "keyboard": [["Sample text", "Second sample"],   ["Keyboard"], ["I'm robot"]]
            }
        });
        
      

    const chatId = msg.chat.id;
    bot.sendMessage(chatId, msgBemvindo);
    console.log(msg.chat.id)
  });

  bot.onText(/\/lista (.+)/, (msg, match) => {
    const ip = match[1];
    
    //const ip = '24.199.98.1'; // Substitua pelo IP desejado
    const chatId = msg.chat.id;
    obterCidadePorIP(ip)
        .then(data => {
            var datar = JSON.stringify(data);

            
            var msg = ` <b>DADOS!!</b> \n <b>IP:${ip}</b> \n Páis-Código:  ${data.countryCode}  \n Páis: ${data.country} \n  Região: ${data.region} \n Cidade: ${data.city} `; 
            bot.sendLocation(chatId, data.lat, data.lon);
            bot.sendMessage(chatId, msg, {parse_mode : "HTML"});
          
            
        })
        .catch(error => {
            console.error('Erro:', error);
        });
});

  
  


var returnBot = function() {
    return bot;
};







var msgAlertaBackup = function(req){

    var msg = ` <b>ATENÇÃO!!</b> \n <b>IP:${req.ip}</b> \n TENTOU SOLICITAR ENDREÇO ${req.path} \n  `;        
    bot.sendMessage(process.env.CHAT_ID_GRUPO_ADM, msg, {parse_mode : "HTML"});
 return true;

}


//responsavel por exibir a mensagem de acesso nao autorizado 404
var msgAlerta = function(req){
    obterCidadePorIP(req.ip)
    .then(data => {
       
        acessos =  acessos + 1;
        var msg = ` <b>ATENÇÃO!!</b> \n <b>IP:${req.ip}</b> \n TENTOU SOLICITAR ENDREÇO \n ${req.path}   \n <b>Informações!!</b> \n <b>IP:${req.ip}</b> \n Páis-Código:  ${data.countryCode}  \n Páis: ${data.country} \n  Região: ${data.region} \n Cidade: ${data.city} \n\n Número de acessos: ${acessos} `; 
        bot.sendLocation(process.env.CHAT_ID_GRUPO_ADM, data.lat, data.lon);

        bot.sendMessage(process.env.CHAT_ID_GRUPO_ADM, msg, {parse_mode : "HTML"});
        //bot.sendMessage(process.env.CHAT_ID_GRUPO_ADM, msg, {parse_mode : "HTML"});
     
    })
    .catch(error => {
        console.error('Erro:', error);
    });
    
   
 return true;

}

module.exports = {
    returnBot, msgAlerta
}


