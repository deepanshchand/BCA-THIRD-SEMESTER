const quizData = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Transfer Markup Language",
      "Hyper Tool Machine Language",
    ],
    answer: "Hyper Text Markup Language",
  },

  {
    question: "Which language runs in browser?",
    options: ["Java", "Python", "JavaScript", "C++"],
    answer: "JavaScript",
  },

  {
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Google", "Netscape", "Apple"],
    answer: "Netscape",
  },

  {
    question: "Which symbol is used for comments in JS?",
    options: ["//", "**", "##", "%%"],
    answer: "//",
  },
];

const questionElement = document.getElementById("question");

const optionButtons = document.querySelectorAll(".option");

const nextBtn = document.getElementById("nextBtn");

const scoreElement = document.getElementById("score");

let currentQuestion = 0;

let score = 0;

let answered = false;

// =========================
// LOAD QUESTION
// =========================

function loadQuestion() {
  answered = false;

  const currentQuiz = quizData[currentQuestion];

  questionElement.textContent = currentQuiz.question;

  optionButtons.forEach((button, index) => {
    button.textContent = currentQuiz.options[index];
  });
}

loadQuestion();

// =========================
// OPTION CLICK
// =========================

optionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (answered) {
      return;
    }

    answered = true;

    const currentQuiz = quizData[currentQuestion];

    if (button.textContent === currentQuiz.answer) {
      score++;

      button.style.backgroundColor = "lightgreen";
    } else {
      button.style.backgroundColor = "tomato";
    }
  });
});

// =========================
// NEXT QUESTION
// =========================

nextBtn.addEventListener("click", () => {
  optionButtons.forEach((button) => {
    button.style.backgroundColor = "";
  });

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

// =========================
// SHOW RESULT
// =========================

function showResult() {
  questionElement.textContent = "Quiz Finished 🎉";

  document.getElementById("options").innerHTML = "";

  nextBtn.style.display = "none";

  scoreElement.textContent = `Your Score:
         ${score} / ${quizData.length}`;
}
