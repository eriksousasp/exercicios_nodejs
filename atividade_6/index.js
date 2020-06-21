let readlineSync = require('readline-sync');
let pessoa1 = readlineSync.question('Nome do participante 1: ');
let digi1 = readlineSync.question('Digite o que quiser: ');
console.log('Você digitou ' + digi1.length + ' caracteres ');

let pessoa2 = readlineSync.question('Nome do participante 2: ');
let digi2 = readlineSync.question('Digite o que quiser: ');
console.log('Você digitou ' + digi2.length + ' caracteres ');

digi1 = String(digi1);
digi2 = String(digi2);

if (digi1 > digi2) {
    console.log('Parabéns ' + pessoa1 + ' digitou mais conteúdos neste jogo :)');
} else if (digi1 == digi2) {
    console.log('Uau, ambos digitaram a mesma quantidade e houve empate!');
} else {
    console.log('Parabéns ' + pessoa2 + ' digitou mais conteúdos neste jogo :)');
}