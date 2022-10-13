// EXERCICIO 01
const minhaIdade = prompt('Qual sua idade?')
const idadeAmiga = prompt('Qual a idade da sua amiga ou amigo?')

// EXERCICIO 02
const a = 'vou pra praia'
const b = 'sou maior de idade'
const c = 'posso tomar uma cervejinha'
const d = 'quero passear de carro'

//Não sou maior de idade e quero passear de carro - Resposta: !b && d
//Sou maior de idade e vou para a praia, e não quero passear de carro - Resposta: (b && a) && !d
//Vou para a praia ou quero passear de carro - Resposta: a || d344333255544333222
//Posso tomar uma cervejinha e não vou passear de carro

/*Respostas:
!b && d
(b && a) && !d
a || d
c && !d*/