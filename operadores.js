
  function dizerNome(){
    console.log("marcio");
  }
  // Faz um calculo ou operação e retorna algo
  dizerNome();
  function MultiplicarPorDois(valor){
    return valor * 2;
  }
  let resultado = MultiplicarPorDois(5);
  console.log(resultado);

//operadores Aretimeticos
let salario = 100;

// + , - , * , / , **
console.log(salario + salario);
console.log(salario * salario);
console.log(salario - salario);
console.log(salario / salario);
console.log(salario ** salario);
let idade = 18;
console.log(idade--);
console.log(idade);
//operadores A tribuição

let valorTecladoGamer = 100;
// valorTecladoGamer = valorTecladoGamer + valorTecladoGamer;
// valorTecladoGamer = valorTecladoGamer + valorTecladoGamer;
valorTecladoGamer -= valorTecladoGamer;
console.log(valorTecladoGamer);

//operadores igualdade
console.log( 1 == 1 );
console.log ( '1' === 1);
//igualdade solta
console.log( 1 == 1);;

console.log( '1' == 1 );

//OPERADOR TERNÁRIO
//tem um client, 100 premium, comum
let pontos = 100;
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo);
//OPERADORES LÓGICOS

// Operadores Lógico  e (&&)
// Retorno TRUE se os dois operadores forem true
//console.log(false && true);
//operadores Lógicos ou ()
//retornar true se um dos operadores forem true
let maiorDeIdade = false;
let possuiCarteiraDeTrabalho = false;
let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;

console.log('pode aplicar:' ,podeAplicar);

// operador NOT (!)
let candidatoRecusado = !podeAplicar;

console.log('candidato recusado',candidatoRecusado);

COMPARAÇÕES NÃO BOLEANOS
// FALSY
//UNDEFINED
//NULL
//0
//''
// NAN - NOT A NUMBER
// TRUTHY

let corPersonalizada = 'vermelho';
let corPadrao = 'azul';
let corperfil = corPersonalizada || corPadrao;
console.log(corPerfil)
