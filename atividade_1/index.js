var readlineSync = require('readline-sync');

var numeroVoo = readlineSync.question('Qual o numero do seu voo? ');

var fileiraSentar = readlineSync.question('Qual a fileira deseja se sentar? ');
console.log('Seu vôo de número ' + numeroVoo + ' está reservado na fileira ' + fileiraSentar + ' Obrigado! ');