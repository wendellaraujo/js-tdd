// import método from 'biblioteca';
// * carrega tudo da lib
// as => alias para o método (novo nome)

import soma, { sub, multiplicacao, div as dividir } from './utils';

console.log(soma(3, 2));

console.log(sub(3, 2));

console.log(multiplicacao(7, 2));

console.log(dividir(4, 2));