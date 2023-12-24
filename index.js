let number = [55, 12, 3, 32, 10, 5, 6, 70, 8, 9, 100, 11, 12, 134, 14];

let maxNumber = number[0];

for (let i = 0; i < number.length; i++) {
  if (number[i] < maxNumber) {
    maxNumber = number[i];
  }
}
console.log(maxNumber);
