// resposta 1: Ao final do processamento SOMA = 91

let i = 13, SOMA = 0, K = 0;

while (K < i) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log(`Resposta 1: SOMA = ${SOMA}`);

// resposta 2:

function isFibonacci(num) {
  if (num < 0) return false;
  let a = 0, b = 1;
  while (b <= num) {
    [a, b] = [b, a + b];
    if (b === num) return true; 65
  }
  return false;
}

let num = 21; // número a ser verificado

if (isFibonacci(num)) {
  console.log(`Resposta questao 2: ${num} pertence à sequência de Fibonacci.`);
} else {
  console.log(`Resposta questao 2: ${num} não pertence à sequência de Fibonacci.`);
}

// resposta 3:

// a) 9. A sequência segue um padrão de adicionar 2 a cada elemento.

// b) 128. A sequência segue um padrão de multiplicar cada elemento por 2.

// c) 49. A sequência segue um padrão de elevar ao quadrado os números inteiros consecutivos começando do 0.

// d) 100. A sequência segue um padrão de elevar ao quadrado os números pares consecutivos começando do 2.

// e) 13. A sequência é a sequência de Fibonacci, onde cada elemento é a soma dos dois elementos anteriores.

// f) Resposta certa: 200. Padrão: Números Naturais que iniciam com a letra D



// resposta 4: Quando os dois veículos se cruzarem na rodovia, ambos estarão à mesma distância da cidade de Ribeirão Preto.



// resposta 5:

function reverseString(str) {
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

let originalString = 'target';
let reversedString = reverseString(originalString);

console.log(`Original string: ${originalString}`);
console.log(`Reversed string: ${reversedString}`);