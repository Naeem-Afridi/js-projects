const containerEl = document.querySelector(".container");

const careers = [
  "Youtuber",
  "Software Engineer",
  "Web Developer",
  "Data Scientist",
  "Content Writer",
];
const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FFC733"]; // Add your desired colors here

let careerIndex = 0;
let characterIndex = 0;
autoTextAnimation();

function autoTextAnimation() {
  characterIndex++;
  containerEl.innerHTML = `<h1>I am ${
    careers[careerIndex].slice(0, 1) === "I" ? "an" : "a"
  } ${careers[careerIndex].slice(0, characterIndex)}</h1>`;
  document.body.style.backgroundColor = colors[careerIndex];

  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }
  if (careerIndex === careers.length) {
    careerIndex = 0;
  }

  setTimeout(autoTextAnimation, 400);
}
