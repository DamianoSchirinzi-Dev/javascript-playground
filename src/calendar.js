const monthsDropdown = document.getElementById("dropdown");
const monthsDisplay = document.getElementById("months-display");
const daysDisplay = document.getElementById("days-display");

monthsDropdown.addEventListener("change", () => {
  const month = monthsDropdown.value;

  let days = 31;
  switch (month) {
    case "February":
      days = 28;
      break;
    case "April" || "June" || "September" || "November":
      days = 30;
      break;
  }

  createCalender(days, month);
});

function createCalender(days, month) {
  daysDisplay.innerHTML = "";
  monthsDisplay.textContent = `Month: ${month}`;

  for (let i = 0; i <= days; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i;
    daysDisplay.appendChild(listItem);
  }
}
