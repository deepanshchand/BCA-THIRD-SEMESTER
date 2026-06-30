const input = document.getElementById("secondsInput");

const startBtn = document.getElementById("startBtn");

const timer = document.getElementById("timer");

let intervalId;

startBtn.addEventListener("click", () => {
  clearInterval(intervalId);

  let totalSeconds = Number(input.value);

  if (totalSeconds <= 0) {
    alert("Enter Valid Seconds");

    return;
  }

  updateTimer(totalSeconds);

  intervalId = setInterval(() => {
    totalSeconds--;

    updateTimer(totalSeconds);

    if (totalSeconds <= 0) {
      clearInterval(intervalId);

      timer.textContent = "Time Up! ⏰";
    }
  }, 1000);
});

function updateTimer(seconds) {
  const minutes = Math.floor(seconds / 60);

  const remainingSeconds = seconds % 60;

  const formattedMinutes = String(minutes).padStart(2, "0");

  const formattedSeconds = String(remainingSeconds).padStart(2, "0");

  timer.textContent = `${formattedMinutes}:${formattedSeconds}`;
}
