// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari.

const numbersList = [
  1, 22, 4, 66, 12, 3, 54, 12, 0, 3, 423, 1, 22, 32, 12, 34, 12,
];

for (let index = 0; index < numbersList.length; index++) {
  if (index % 2 !== 0) {
    console.log(numbersList[index]);
  }
}
