var readlineSync = require('readline-sync');

console.log('Vamos ver o quanto você se preocupa com o Covid')

let pergutaUm = readlineSync.question('Está usando máscara ao sair de sua casa ? (Sim ou Não)     ')
let pergutaDois = readlineSync.question('Está lavando as mãos frequentemente? (Sim Ou Não)    ')

let sim = ('sim')
let nao = ('não')

if (pergutaUm == sim && pergutaDois == sim) {
    console.log('Que legal, está fazendo tudo conforme manda o protocolo :)')

} else if (pergutaUm == sim && pergutaDois == nao || pergutaUm == nao && pergutaDois == sim) {
    console.log('Puxa vida, isso ainda não é o suficiente ;) )')
} else {
    console.log('Eita, você deve começar a se previnir em :(')
}