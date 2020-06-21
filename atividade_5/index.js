let readlineSync = require('readline-sync');

let contagemCaracteres = readlineSync.question('Digite o que quiser e vamos contar quantos caracteres voce digitou ');

console.log('O que você digitou possui ' + contagemCaracteres.length + ' caracteres ;)');