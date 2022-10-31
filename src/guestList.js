const people = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];

const admitList = document.querySelector(".admit-list");
const refuseList = document.querySelector(".refuse-list");

admitList.textContent = "Admit: ";
refuseList.textContent = "Refuse: ";

for (var person of people) {
  if (person === "Phil" || person === "Lola") {
    refuseList.textContent += ` ${person},`;
  } else {
    admitList.textContent += ` ${person}, `;
  }
}

admitList.textContent =
  admitList.textContent.slice(0, admitList.textContent.length - 2) + ".";

refuseList.textContent =
  refuseList.textContent.slice(0, refuseList.textContent.length - 1) + ".";
