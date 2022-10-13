
//OPERADORES ARITMÉTICOS
console.log('OPERADORES ARITMÉTICOS');

let saldo 
saldo = 15
saldo = saldo + 22.40
console.log('soma', saldo);
saldo -= 12.34 // Ou saldo = saldo - 12.34. Ambas as formas trazem o mesmo resultado.
console.log('subtração', saldo);
saldo = saldo/3
console.log('divisão', saldo);
saldo = saldo*3.42
console.log('multiplicação', saldo);
saldo = saldo%3
console.log("resto", saldo);

//PRECEDÊNCIA MATEMÁTICA
console.log('PRECEDÊNCIA MATEMÁTICA');

const multESoma1 =  2*2+2
console.log('MS1', multESoma1);
const multESoma2 =  2*(2+2)
console.log('MS2', multESoma2);
//Nesse caso, primeiro é calculado o que está dentro dos parênteses, por isso o resultado é diferente da primeira. 

//IGUAL E DIFERENTE
console.log('IGUAL E DIFERENTE');

const resultado1 = 5===5
console.log('R1', resultado1);
const resultado2 = 5!==5
console.log('R2', resultado2);
const resultado3 = 5!=='5'
console.log('R3', resultado3);
const resultado4 = '5'==='cinco'
console.log('R4', resultado4);
const resultado5 = typeof 5 === typeof 20
console.log('R5', resultado5);
const resultado6 = typeof '5' === typeof 'cinco'
console.log('R6', resultado6);

//MENOR E MAIOR 
console.log('MENOR E MAIOR');

const primeiroNum = 5
const segundoNum = '5'  //Nesse caso o === deu false porque diferencia tipo (string) e número; já o <= deu true porque diferencia somente número.

console.log('O primeiro número é igual ao segundo?', primeiroNum === segundoNum);
console.log('O primeiro número é menor ou igual ao segundo?', primeiroNum <= segundoNum);
console.log('O primeiro número é maior que o segundo?', primeiroNum > segundoNum);
console.log('O primeiro número é menor que o segundo?', primeiroNum < segundoNum);

//LÓGICA

/*consta a= 'Quero dirigir um Celta 2012';
consta b= 'Sou maior de idade';
consta c= 'Consigo comprar o Celta por 22.000 reais';
consta d= 'Consigo alugar o Celta';
consta e= 'Tenho carteira de motorista';*/

// Quero dirigir o Celta 2012 - Resposta: a
// Não sou maior de idade - Resposta: !b
// Sou maior de idade e não tenho carteira de motorista - Resposta: b && !e
// Sou maior de idade e consigo comprar ou alugar o celta - Resposta: b && c || d
// Sou maior de idade e tenho carteira de motorista, mas não quero dirigir o Celta - Resposta: b && e && !a

/*Respostas:
             a
             !b
             b && !e
             b && c || d
             b && e && !a*/


//Exercício de Fixação 1
console.log('Exercício de Fixação 1');
const minhaIdade = prompt('Qual sua idade?');
const idadeMelhorAmigo = prompt('Qual é a idade do seu melhor amigo?');

console.log('Sua idade é maior do que a idade do seu melhor amigo?', minhaIdade > idadeMelhorAmigo);
const diferença = minhaIdade - idadeMelhorAmigo
console.log('A diferença da minha idade para a idade do meu melhor amigo é de', diferença, 'anos');



