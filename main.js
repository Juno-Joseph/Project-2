// import questions from "./questions.json" assert { type: "json"}

var parsedData = JSON.parse(questions)

const quizContainer = document.querySelector(".quiz-container");
const question = document.querySelector(".quiz-container .question");
const options = document.querySelector(".quiz-container .options");
const nextBtn = document.querySelector(".quiz-container .next-btn")
const quizResult = document.querySelector(".quiz-result");

let questionNumber = 0;

const createQuestion = () => {
    question.innerHTML = parsedData[questionNumber].question;
}