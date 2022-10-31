const selector = document.querySelector(".dropdown");
const header = document.querySelector(".header");

selector.addEventListener("change", selectTheme);

function selectTheme() {
  const choice = selector.value;
  let bgColor;
  let textColor;

  switch (choice) {
    case "Black":
      bgColor = "black";
      textColor = "white";
      break;
    case "White":
      bgColor = "white";
      textColor = "black";
      break;
    case "Green":
      bgColor = "green";
      textColor = "black";
      break;
    case "Purple":
      bgColor = "purple";
      textColor = "black";
      break;
    case "Random":
      const randomBgColor = Math.floor(Math.random() * 16777215).toString(16);
      const randomTextColor = Math.floor(Math.random() * 16777215).toString(16);

      bgColor = `#${randomBgColor}`;
      textColor = `#${randomTextColor}`;
      break;
  }

  updateTheme(bgColor, textColor);
}

function updateTheme(bgColor, textColor) {
  document.body.style.backgroundColor = bgColor;
  header.style.color = textColor;
}
