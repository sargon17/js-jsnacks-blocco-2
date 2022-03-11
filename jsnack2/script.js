// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.

// First version (for)

// let sum = 0;

// for (let index = 0; index < 5; index++) {
//   const number = parseInt(prompt(`Input the ${index + 1} number: `));
//   if (isNaN(number)) {
//     index--;
//   }
//   sum += number;
// }
// console.log(sum);

// Second version (while)

let isNumbersValid = false;
let i = 0;
let sum = 0;

while (!isNumbersValid) {
  const number = parseInt(prompt(`Input the ${i + 1} number: `));

  if (!isNaN(number)) {
    i++;
    sum += number;
  }
  if (i === 5) {
    isNumbersValid = true;
  }
}
console.log(sum);
