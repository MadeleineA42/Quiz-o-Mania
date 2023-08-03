// added global vars
const startScreen = document.querySelector('.main-box');
const startButton = document.querySelector('#start');
const question = document.querySelector('#question');
const answerButton = document.querySelector('#answer-buttons');

// these start the timer and tally scores
let questionIndex = 0;
let timeRemaining = 75;
let score = 0;

//starts the q's
function startQuiz() {
  startScreen.innerHTML = ``;
  startScreen.innerHTML += `
  <h2 id="question">${questions[0].question}</h2>
  <div id="answer-buttons">
  <button class="button">${questions[0].answers[0].text}</button>
  <button class="button">${questions[1].answers[1].text}</button>
  <button class="button">${questions[2].answers[2].text}</button>
  <button class="button">${questions[3].answers[3].text}</button>
</div> `
  timeRemaining();
  showQuestion();
}



//these are the quiz q's
const questions = [
  {
    question: "Commonly used data strings DO NOT include ___.",
    answers: [
      { text: "strings", correct: false },
      { text: "booleans", correct: false },
      { text: "alerts", correct: true },
      { text: "numbers", correct: false },
    ]
  },
  {
    question: "Sting values must be enclosed within ___ when being assigned variables",
    answers: [
      { text: "commas", correct: false },
      { text: "curly brackets", correct: false },
      { text: "quotes", correct: true },
      { text: "parenthesis", correct: false },
    ]
  },
  {
    question: "Arrays in JavaScript can be used to store ___.",
    answers: [
      { text: "numbers and strings", correct: false },
      { text: "other arrays", correct: false },
      { text: "booleans", correct: false },
      { text: "all of the above", correct: true },
    ]
  },
  {
    question: "The condition in an if/else statement is enclosed with ___.",
    answers: [
      { text: "quotes", correct: false },
      { text: "curly brackets", correct: false },
      { text: "parenthesis", correct: true },
      { text: "square brackets", correct: false },
    ]
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
      { text: "JavaScript", correct: false },
      { text: "terminal/bash", correct: false },
      { text: "for loops", correct: false },
      { text: "console.log", correct: true },
    ]
  }
];

//event listener to start quiz
startButton.addEventListener('click', startQuiz);


