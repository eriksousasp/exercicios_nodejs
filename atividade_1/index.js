var utf8 = require('utf8');
var readlineSync = require('readline-sync');

// Wait for user's response.
var numeroVoo = readlineSync.question('Qual o numero do seu voo? ');

// Handle the secret text (e.g. password).
var fileiraSentar = readlineSync.question('Qual a fileira deseja se sentar? ');
console.log('Seu vôo de número ' + numeroVoo + ' está reservado na fileira ' + fileiraSentar + ' Obrigado! ');