let readlineSync = require('readline-sync');

let dia = readlineSync.question('Que dia voce nasceu? ');
let mes = readlineSync.question('E em qual mes? ');

dia = Number(dia);
mes = Number(mes);

if (dia >= 21 && mes == 03 || dia <= 19 && mes == 04) {
    console.log('Seu signo é: Áries');
}
if (dia >= 20 && mes == 04 || dia <= 20 && mes == 05) {
    console.log('Seu signo é: Touro');
}
if (dia >= 21 && mes == 05 || dia <= 20 && mes == 06) {
    console.log('Seu signo é: Gêmeos');
}
if (dia >= 21 && mes == 06 || dia <= 22 && mes == 07) {
    console.log('Seu signo é: Câncer');
}
if (dia >= 23 && mes == 07 || dia <= 22 && mes == 08) {
    console.log('Seu signo é: Leão');
}
if (dia >= 23 && mes == 08 || dia <= 22 && mes == 09) {
    console.log('Seu signo é: Virgem');
}
if (dia >= 23 && mes == 09 || dia <= 22 && mes == 10) {
    console.log('Seu signo é: Libra');
}
if (dia >= 23 && mes == 10 || dia <= 21 && mes == 11) {
    console.log('Seu signo é: Escorpião');
}
if (dia >= 22 && mes == 11 || dia <= 21 && mes == 12) {
    console.log('Seu signo é: Sagitário');
}
if (dia >= 22 && mes == 12 || dia <= 19 && mes == 01) {
    console.log('Seu signo é: Capricónio');
}
if (dia >= 20 && mes == 01 || dia <= 18 && mes == 02) {
    console.log('Seu signo é: Aquário');
}
if (dia >= 19 && mes == 02 || dia <= 20 && mes == 03) {
    console.log('Seu signo é: Peixes');
} else {
    console.log('Por favor digite sua data de nascimento em números de 01 a 31 para dia e 01 a 12 para mês');
}