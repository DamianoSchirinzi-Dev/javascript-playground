const list = document.querySelector(".output");
list.innerHTML = "";
const cities = ["lonDon", "ManCHESTer", "BiRmiNGHAM", "liVERpoOL"];

for (const city of cities) {
  const lowerCaseCity = city.toLowerCase();
  const firstLetter = lowerCaseCity.charAt(0);
  const capFirstLetter = firstLetter.toUpperCase();
  const finalCity = lowerCaseCity.replace(firstLetter, capFirstLetter);

  const result = finalCity;
  const listItem = document.createElement("li");
  listItem.textContent = result;
  list.appendChild(listItem);
}
