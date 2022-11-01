const candidates = [
  "Timmy",
  "Bob",
  "George",
  "John",
  "Samuel",
  "Alex",
  "Dami",
  "Sarah",
];

const numbers = [1, 3, 55, 1, 3, 5, 7, 8, 4, 1];

//Filter
const acceptedCandidates = candidates.filter((child) => {
  return child.length <= 4;
});

//Map
const newNumbers = numbers.map((number) => number * 2);

console.log(acceptedCandidates);
console.log(newNumbers);
