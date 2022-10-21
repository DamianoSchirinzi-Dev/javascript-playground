const players = document.querySelectorAll("button");
const section = document.querySelector(".text-section");

for (const player of players) {
  player.addEventListener("click", () => {
    const para = document.createElement("p");

    para.innerHTML = `This is about ${player.innerHTML}`;
    section.appendChild(para);
  });
}
