const quotes = [
  "Honesty is best policy",
  
  "Success is the sum of small efforts repeated daily.",

  "Believe in yourself and all that you are.",

  "Do something today that your future self will thank you for.",

  "Discipline beats motivation.",

  "Dream big. Start small. Act now.",

  "Consistency is more important than perfection.",

  "Never stop learning.",

  "Your only limit is your mind.",
];

const button = document.getElementById("btn");

const quoteText = document.getElementById("quote");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);

  quoteText.textContent = quotes[randomIndex];
});
