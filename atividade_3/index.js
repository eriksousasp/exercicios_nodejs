let readlineSync = require('readline-sync');

console.log('Vamos calcular a area do quadrado? (Isso pode ser muito util se voce quer saber a area do seu terreno)');
let area1 = readlineSync.question('Qual o valor da largura? ');
let area2 = readlineSync.question('Qual o valor do comprimento? ');

area1 = Number(area1);
area2 = Number(area2);

if (area1 == Number(area1) && area2 == Number(area2)) {
    console.log('A área do seu quadrado é ' + area1 * area2 + ' m²');
} else {
    console.log('Por favor, coloque apenas números como resposta')
}