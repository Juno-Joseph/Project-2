let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 10;

// Load sounds once
const correctSound = new Audio("sounds/correct.mp3");
const incorrectSound = new Audio("sounds/incorrect.mp3");

// Load questions
fetch("questions.json")
  .then((response) => response.json())
  .then((data) => {
    questions = shuffleArray(data).slice(0, 10); // pick 10 random
    displayQuestion();
  });

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function displayQuestion() {
  resetState();

  const questionObj = questions[currentQuestionIndex];
  document.getElementById("question-text").innerText = questionObj.question;

  const answers = [
    questionObj.answer_A,
    questionObj.answer_B,
    questionObj.answer_C,
    questionObj.answer_D,
  ];

  const optionsContainer = document.getElementById("options-container");
  answers.forEach((answer) => {
    const btn = document.createElement("button");
    btn.innerText = answer;
    btn.classList.add("option-btn");
    btn.onclick = () => checkAnswer(btn);
    optionsContainer.appendChild(btn);
  });

  startTimer();
}

function checkAnswer(selectedBtn) {
  const correct = questions[currentQuestionIndex].correct_answer;

  disableAllOptions();

  if (selectedBtn.innerText === correct) {
    correctSound.pause();
    correctSound.currentTime = 0;
    correctSound.play();
    selectedBtn.classList.add("correct");
    score++;
  } else {
    incorrectSound.pause();
    incorrectSound.currentTime = 0;
    incorrectSound.play();
    selectedBtn.classList.add("incorrect");
  }

  document.getElementById("next-btn").style.display = "inline-block";
  clearInterval(timer);
}

function disableAllOptions() {
  const allBtns = document.querySelectorAll(".option-btn");
  allBtns.forEach((btn) => {
    btn.disabled = true;
  });
}

function resetState() {
  document.getElementById("next-btn").style.display = "none";
  document.getElementById("options-container").innerHTML = "";
  clearInterval(timer);
  timeLeft = 10;
  document.getElementById("timer").innerText = `Time: ${timeLeft}`;
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").innerText = `Time: ${timeLeft}`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      disableAllOptions();
      document.getElementById("next-btn").style.display = "inline-block";
    }
  }, 1000);
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    localStorage.setItem("quizScore", score);
    window.location.href = "result.html";
  }
}

document.getElementById("next-btn").addEventListener("click", nextQuestion);
