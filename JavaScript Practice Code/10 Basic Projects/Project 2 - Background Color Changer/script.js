const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "purple",
  "pink",
  "cyan",
  "lime",
  "gold",
];

const button = document.getElementById("btn");

const colorName = document.getElementById("colorName");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * colors.length);

  const randomColor = colors[randomIndex];

  document.body.style.backgroundColor = randomColor;

  colorName.textContent = `Current Color: ${randomColor}`;
});
