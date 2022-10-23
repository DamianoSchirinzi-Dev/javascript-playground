//Get some user input values
const numberField = document.querySelector(".guessField");
const numberSubmit = document.querySelector(".guessSubmit");

numberSubmit.addEventListener("click", doMaths);

//Do something with the input
function doMaths() {
  const value = Number(numberField.value);

  console.log(`Modulo is: ${value % 32}`);
  console.log(`Exponent is: ${Math.pow(value, 7)}`);
}
