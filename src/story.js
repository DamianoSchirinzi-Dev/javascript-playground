const customNameField = document.getElementById("customname");
const randomizeBtn = document.querySelector(".randomize");
const storySection = document.querySelector(".story");

randomizeBtn.addEventListener("click", result);

const baseStory =
  "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

const names = ["Bob", "Willy the Goblin", "Big Daddy", "Father Christmas"];
const places = ["the soup kitchen", "Disneyland", "the White House"];
const events = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away",
];

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

function fToC(fahrenheit) {
  var fTemp = fahrenheit;
  var fToCel = ((fTemp - 32) * 5) / 9;
  var roundedValue = Math.round((fToCel + Number.EPSILON) * 100) / 100;

  return roundedValue;
}

function lbsToKg(pounds) {
  const value = pounds / 2.2046;
  const roundedValue = Math.round((value + Number.EPSILON) * 100) / 100;

  return roundedValue;
}

function result() {
  const name = customNameField.value !== "" ? customNameField.value : names[0];
  const randomName = randomValueFromArray(names);
  const randomPlace = randomValueFromArray(places);
  const randomEvent = randomValueFromArray(events);

  let temp;
  let tempUnit;
  let weight;
  let weightUnit;

  if (document.getElementById("uk").checked) {
    temp = fToC(94);
    tempUnit = "celcius";
    weight = lbsToKg(300);
    weightUnit = "kg";
  } else {
    temp = 94;
    tempUnit = "fahrenheit";
    weight = 300;
    weightUnit = "pounds";
  }

  const randomStory = `It was ${temp} ${tempUnit} outside, so ${name} went for a walk. When they got to ${randomPlace}, they stared in horror for a few moments, then ${randomEvent}. ${randomName} saw the whole thing, but was not surprised — ${name} weighs ${weight} ${weightUnit}, and it was a hot day.`;

  storySection.textContent = `${randomStory}`;
  storySection.style.visibility = "visible";
}
