let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
];

while (numbers.length !== letters.length) {
  if (numbers.length < letters.length) {
    numbers.push(numbers[Math.floor(Math.random() * numbers.length)]);
  } else {
    letters.push(letters[Math.floor(Math.random() * letters.length)]);
  }
}
console.log(numbers);
