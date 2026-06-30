const scoreElement = document.getElementById("score");

const clickBtn = document.getElementById("clickBtn");

const resetBtn = document.getElementById("resetBtn");

const message = document.getElementById("message");

let score = 0;

clickBtn.addEventListener("click", () => {
  score++;

  scoreElement.textContent = `Score: ${score}`;

  if (score === 10) {
    message.textContent = "🎉 Level 1 Complete!";
  }

  if (score === 25) {
    message.textContent = "🔥 Great Going!";
  }

  if (score === 50) {
    message.textContent = "🏆 You Are a Click Master!";
  }
});

resetBtn.addEventListener("click", () => {
  score = 0;

  scoreElement.textContent = "Score: 0";

  message.textContent = "";
});
