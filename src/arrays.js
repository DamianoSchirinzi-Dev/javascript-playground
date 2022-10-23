const words = ["harder", "super", "amazing!", "exhilirating!", "sadness!"];
const longWords = words.filter(isLong);

const numbers = [6, 2, 12, 53, 1, 3, 7];
const tripledNumbers = numbers.map(triple);

function isLong(word) {
  if (word.length > 7) {
    return word;
  }
}

function triple(number) {
  return number * 3;
}

console.log(numbers);
console.log(tripledNumbers);
