let currentQuestionIndex = 0;
let score = 0;
let questions = [];
let selectedQuestions = [];
let userAnswers = [];

const questionElement = document.getElementById("question");
const choiceContainers = document.querySelectorAll(".choice-container");
const choiceTexts = document.querySelectorAll(".choice-text");
const scoreDisplay = document.getElementById("score");
const questionCounter = document.getElementById("question-counter");
const timerText = document.getElementById("timer-text");
const correctSound = new Audio('./sounds/correct.mp3');
const incorrectSound = new Audio('./sounds/incorrect.mp3'); 

// Fetch and prepare quiz
fetch('./questions.json')
  .then(response => response.json())
  .then(data => {
    questions = data;
    selectedQuestions = getRandomQuestions(10, questions);
    showQuestion();
    startTimer();
  })
  .catch(error => console.error("Error loading questions:", error));

// Pick 10 unique questions
function getRandomQuestions(count, questionPool) {
  const shuffled = [...questionPool].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Show current question
function showQuestion() {
  const q = selectedQuestions[currentQuestionIndex];
  questionElement.innerText = q.question;
  choiceTexts[0].innerText = q.A;
  choiceTexts[1].innerText = q.B;
  choiceTexts[2].innerText = q.C;
  choiceTexts[3].innerText = q.D;

  questionCounter.innerText = `Question: ${currentQuestionIndex + 1} / 10`;
  scoreDisplay.innerText = `Score: ${score}`;

  choiceContainers.forEach((container, index) => {
    container.classList.remove("correct", "incorrect");
    container.style.pointerEvents = "auto";
    container.onclick = () => handleChoice(container, ["A", "B", "C", "D"][index]);
  });
}

// Handle answer selection
function handleChoice(container, selectedKey) {
  const correctAnswer = selectedQuestions[currentQuestionIndex].answer;
  const isCorrect = selectedKey === correctAnswer;

  if (isCorrect) {
    container.classList.add("correct");
    score++;
    correctSound.currentTime = 0; // Rewind to start
    correctSound.play();
  } else {
    container.classList.add("incorrect");
    incorrectSound.currentTime = 0; // Rewind to start
    incorrectSound.play(); // Play incorrect sound
    // Highlight the correct answer
    const correctIndex = ["A", "B", "C", "D"].indexOf(correctAnswer);
    choiceContainers[correctIndex].classList.add("correct");
  }

  choiceContainers.forEach(c => c.style.pointerEvents = "none");

  userAnswers.push({
    question: selectedQuestions[currentQuestionIndex].question,
    userAnswer: selectedKey,
    correctAnswer: correctAnswer
  });

  // Move to next question after a short delay
  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < 10) {
      showQuestion();
    } else {
      // Store data and redirect
      localStorage.setItem("score", score);
      localStorage.setItem("answers", JSON.stringify(userAnswers));
      window.location.href = "result.html";
    }
  }, 1500);
}

// Optional: Timer countdown
let timeLeft = 20;
let timer;

function startTimer() {
  timer = setInterval(() => {
    timerText.innerText = `Time: ${timeLeft}`;
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timer);
      handleChoice({ classList: { add: () => {} }, style: {} }, "None");
    }
  }, 1000);
}
