let question = document.getElementById("question")
let choices = Array.from(document.getElementsByClassName("choice-text"));
let questionCounterText = document.getElementById("questionCounter");
let scoreText = document.getElementById("score");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
var time = 2;
var quizTimeMinutes = time * 60 * 60;
quizTime = quizTimeMinutes / 60;
const CORRECT_BONUS = 1;
const MAX_QUESTIONS = 5;

// create quiz questions 
let questions = [
  {
    question: "Hyper Text Markup Language Stands For?",
    choice1: "JQuery",
    choice2: "XHTML",
    choice3: "CSS",
    choice4: "HTML",
    answer: 4
  },

  {
    question: "Cascading Style sheet for?",
    choice1: "JQuery",
    choice2: "XHTML",
    choice3: "CSS",
    choice4: "HTML",
    answer: 3
  },
  {
    question: "Which is a JavaScript Framework?",
    choice1: "React",
    choice2: "Laravel",
    choice3: "Django",
    choice4: "SASS",
    answer: 1
  },
  {
    question: "Which is a backend language?",
    choice1: "PHP",
    choice2: "HTML",
    choice3: "React",
    choice4: "ALL",
    answer: 1
  },
  {
    question: "Which  is best for Artificial intelligence?",
    choice1: "React",
    choice2: "Laravel",
    choice3: "Python",
    choice4: "Sass",
    answer: 3
  }
];
console.log(questions);



let counting = document.getElementById("count-down");

function startCountDown() {
  let quizTimer = setInterval(function () {
    if (quizTime <= 0) {
      clearInterval(quizTimer);

    } else {
      quizTime--;
      let sec = Math.floor(quizTime % 60);
      let min = Math.floor(quizTime / 60) % 60;
      counting.innerHTML = "TIME:" + [min] + ":" + [sec];

    }
  }, 1000)
}

startCountDown();


startGame =() => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
}

getNewQuestion =() => {

  if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS ) {

 localStorage.setItem("mostRecentScore", score);
    return window.location.assign(src="./end.html");
    
  }
  questionCounter++;
  questionCounterText.innerText = questionCounter +"/"+ MAX_QUESTIONS;



   let questionsIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionsIndex];
  question.innerText = currentQuestion.question;

  choices.forEach( choice => {
    let number = choice.dataset['number'];
    choice.innerText = currentQuestion['choice' + number];
  });

  availableQuestions.splice(questionsIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener('click', e => {
 if (!acceptingAnswers) {
return;
 }


 acceptingAnswers = false;
 let selectedChoice = e.target;
 let selectedAnswer = selectedChoice.dataset["number"];

 let classToApply = "incorrect";
if ( selectedAnswer == currentQuestion.answer ) {
  classToApply = "correct";
}else {
  quizTime = quizTime - 10;
}


selectedChoice.parentElement.classList.add(classToApply);
selectedChoice.parentElement.classList.remove(classToApply);
 if (classToApply === "correct") {
  incrementScore(CORRECT_BONUS);
 }
console.log();
 getNewQuestion();
  });
});

incrementScore = num => {
  score += num;
  scoreText.innerText = score;
}

startGame();


let username = document.getElementById("username");
let saveScoreBtn = document.getElementById("saveScoreBtn");
let finalScore = document.getElementById("finalScore");
let mostRecentScore = localStorage.getItem("mostRecentScore");



saveHighScore = (e) => {
  e.preventDefault();
}

