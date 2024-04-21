// Exercício 01
const prompt = require('prompt-sync')();
let celsius = prompt("Digite uma temperatura em graus Celsius:  ");
let fahrenheit = 0;

fahrenheit = celsius * 1.8 + 32

console.log("A temperatura equivale a", fahrenheit, "Fahrenheit.");

//Exercício 02
const prompt = require('prompt-sync')();
let eleitores = parseInt(prompt("Digite a quantidade de eleitores:  "));
let brancos = parseInt(prompt("Digite a quantidade de votos brancos:  "));
let nulos = parseInt(prompt("Digite a quantidade de votos nulos:  "));
let validos = parseInt(prompt("Digite a quantidade de votos válidos:  "));

console.log ("A porcentagem de votos brancos é de " + brancos / eleitores * 100 + "%")
console.log ("A porcentagem de votos nulos é de " + nulos / eleitores * 100 + "%")
console.log ("A porcentagem de votos validos é de " + validos / eleitores * 100 + "%")

//Exercício 03
const prompt = require('prompt-sync')();
let primeiro = parseInt(prompt("Digite o primeiro algoritmo: "));
let segundo = parseInt(prompt("Digite o segundo algoritmo: "));
let terceiro = parseInt(prompt("Digite o terceiro algoritmo: "));
let quarto = parseInt(prompt("Digite o quarto algoritmo: "));

console.log(primeiro + 25) 
console.log(segundo * 3) 
console.log(terceiro * 12 / 100) 
console.log(primeiro + segundo + terceiro + quarto)

//Exercício 04 e 05
const prompt = require('prompt-sync')();
let primeira = parseInt(prompt("Digite a primeira avaliação: "));
let segunda = parseInt(prompt("Digite a segunda avaliação: "));
let media = primeira + segunda / 2

if (media >= 6.0){
    console.log("PARABÈNS! Você foi aprovado.")
}else{
    console.log("Você foi REPROVADO! Estude mais.")
}

//Exercício 06
const prompt = require('prompt-sync')();
let a = parseInt(prompt("Insira o primeiro lado: "));
let b = parseInt(prompt("Insira o segundo lado: "));
let c = parseInt(prompt("Insira o terceiro lado: "));

if (b + c > a > b - c && a + c > b > a - c && a + b > c > a - b && c + b > a > c - b && c + a > b > c - a && b + a > c > b - a){
    if (a === b && a !== c || b === c && b !== a || c === a && c !== b){
       console.log("Triângulo isoscêles.")
    } else if ( a === b && a === c){
        console.log("Triãngulo equilátero.")
    } else if ( a !== b && a !== c && a !== c){
        console.log("Triângulo escaleno.")
    }
} else {
    console.log("Não é possível formar um triângulo.")
}

//Exercício 07
const prompt = require('prompt-sync')();
let maca = parseInt(prompt("Insira o número de maças: "));

if (maca < 12){
    console.log("O total da compra é de R$" + maca * 0.30 )
} else {
    console.log("O valor total da compra é de R$" + maca * 0.25)
}

//Exercício 08
const prompt = require('prompt-sync')();
let valor1 = parseInt(prompt("Insira o primeiro valor: "));
let valor2 = parseInt(prompt("Insira o segundo valor: "));

if (valor1 !== valor2) {
    if (valor1 > valor2){
        console.log("O primeiro valor é o maior.")
    }else {
        console.log("O segundo valor é o maior.")
    }
} else {
    console.log("Erro. Os valores são iguais.")
}

//Exercício 09
const prompt = require('prompt-sync')();
let codigo = parseInt(prompt("Insira o código de origem: "));
let origem;

switch (codigo) {
    case 1:
        origem = console.log("Sul");
        break;
    case 2:
        origem = console.log("Norte");
        break;
    case 3:
        origem = console.log("Leste");
        break;
    case 4:
        origem = console.log("Oeste");    
        break;
    case 7: case 8: case 9:
        origem = console.log("Sudeste");
        break;
    case 10: case 11: case 12: case 13: case 14: case 15: case 16: case 17: case 18: case 19: case 20:
        origem = console.log("Centro-Oeste")
        break;
    case 5: case 6: case 25: case 26: case 27: case 28: case 29: case 30: case 31: case 32: case 33: case 34: case 35: case 36: case 37: case 38: case 39: case 40: case 41: case 42: case 43: case 44: case 45: case 46: case 47: case 48: case 49: case 50: 
        origem = console.log("Nordeste")
        break;
    default:
        console.log("Produto Importado.")
        break;
}

//Exercício 10
const prompt = require('prompt-sync')();
let contador = parseInt(prompt("Insira um número: "));

for (let i = 0; i < 10; i++){
      console.log (contador);
}

// Exercício 11
const prompt = require('prompt-sync')();
let valor = 0;

do{
      valor = parseInt(prompt("Digite um valor:"));
      if (valor % 2 === 0){
            console.log("Número par.")
      }else{
            console.log("Número ímpar.")
      }
  }while (valor > 0);
  
Exercício 12
const prompt = require('prompt-sync')();
let numero = 0;

for (numero = 1000; numero <= 1999; numero++) {
      if (numero % 11 === 5) {
          console.log(numero);
      }
  }
  
//Exercício 13
const prompt = require('prompt-sync')();
let n1 = parseInt(prompt("Insira o primeiro número: "));
let n2 = parseInt(prompt("Insira o segundo número: "));
let n3 = parseInt(prompt("Insira o terceiro número: "));
let n4 = parseInt(prompt("Insira o quarto número: "));
let n5 = parseInt(prompt("Insira o quinto número: "));
let valor = 0;

for (valor = 0; valor <= n1; valor++) {
      console.log(`${n1} * ${valor} =`, n1 * valor);
}
for (valor = 0; valor <= n2; valor++) {
      console.log(`${n2} * ${valor} =`, n2 * valor);
}
for (valor = 0; valor <= n3; valor++) {
      console.log(`${n3} * ${valor} =`, n3 * valor);
}
for (valor = 0; valor <= n4; valor++) {
      console.log(`${n4} * ${valor} =`, n4 * valor);
}for (valor = 0; valor <= n5; valor++) {
      console.log(`${n5} * ${valor} =`, n5 * valor);
}

//Exercício 14
const prompt = require('prompt-sync')();
let valor = 0;
let soma = 0;
let quantidade = 0;

do{
      valor = parseFloat(prompt("Digite um número decimal:"));
      soma += valor;
      quantidade++;
  }while (valor !== 0);
      console.log("A média dos números apresentados é " + soma / (quantidade - 1));

// Exercício 15
const prompt = require('prompt-sync')();
let numero = 0;
let peso = 0;
let somaDosNumeros = 0;
let somaDosPesos = 0;

do{
      numero = parseFloat(prompt("Digite um número decimal:"));
      peso = prompt("Digite o peso: ")
      somaDosNumeros += numero;
      somaDosPesos += peso;
  }while (numero !== 0);
      console.log("A média ponderada dos números apresentados é " + somaDosNumeros / (somaDosPesos));

//Exercício 16
let contador = 0;
let numero = 100;
let i = 0;

function primo(num) {
    if (num <= 1) {
        return false;
      }
    for (i = 2; i <= 100; i++) {
        if (num % i === 0) {
            return false;
            }
      }
    return true;
}

while (contador < 50) {
    if (primo(numero)) {
        console.log(numero);
        contador++;
      }
    numero++;
}
