// create a quiz class
class Quiz {
  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionsIndex = 0;
  }

  getQuestionsIndex() {
    return this.questions[this.questionsIndex];
  }

  guess(answer) {
    if (this.getQuestionsIndex().isCorrectAnswer(answer)) {
      this.score++;
    }
    this.questionsIndex++;
  }

  isEnded() {
    return this.getQuestionsIndex === this.questions.length;
  }
}

// Create a question class
class Question {
  constructor(text, choice, answer) {
    this.text = text;
    this.choice = choice;
    this.answer = answer;
  }

  isCorrectAnswer(choice) {
    return this.answer === choice;
  }
}


// create quiz questions 
let questions = [
  new Question(
    "Hyper Text Markup Language Stands For", ["JQuery", "XHTML", "CSS", "HTML"], "HTML"
  ),
  new Question(
    "Hyper next", ["Option1 Q2 ", "Option2 Q2", "PHP", "HTML"], "HTML"
  ),
  new Question(
    "Question 3", ["Option1 Q3", "Option2 Q3", "Option3 Q3", "HTML"], "HTML"
  ),
  new Question(
    "Question 4", ["JQuery", "XHTML", "CSS", "HTML"], "HTML"
  ),
];
console.log(questions);

let quiz = new Quiz(questions);

//Display question 
function displayQuestion() {
  if (quiz.isEnded()) {
    showScores();
  } else {

    showProgress();

    //show question
    let questionElement = document.getElementById("question");
    // console.log(new Question);
    // questionElement.getElementsByClassName(new Question);
    questionElement.innerHTML = questions[quiz.questionsIndex].text
    // show options
    // let choices = ["choice0", "choice1", "choice2", "choice3"];
    let choices = questions[quiz.questionsIndex].choice;
    // let choice = quiz.getQuestionsIndex("choices");
    // let options = ["btn0", "btn1", "btn2", "btn3"];
    // let option = quiz.getQuestionsIndex("options");
    console.log(quiz.getQuestionsIndex())
    for (let i = 0; i < choices.length; i++) {
      let choiceElement = document.getElementById("choice" + i);
      choiceElement.innerHTML = choices[i];
      var button = document.getElementById(`btn${i}`);
      button.onclick = function (event) {
        let selectedAnswer = event.target.childNodes[1].innerHTML;
        quiz.guess(selectedAnswer);
        displayQuestion();
        
      }
      // let optionElement = document.getElementById("option" + i);
      // let showProgress = quiz.getQuestionsIndex(option, choice);
    }
    // console.log(showProgress);
    // console.log(displayQuestion);
    // showProgress();

  }
};

//guess function
// function guess(id, guess) {
//   var button = document.getElementById(id);
//   button.onclick = function () {
//     quiz.guess(guess);
//     displayQuestion();
//   }
// }


//show quiz progress
function showProgress() {
  let currentQuestionNumber = quiz.questionsIndex + 1;
  let progressElement = document.getElementById("progress");
  progressElement.innerHTML = "Question "+ [currentQuestionNumber] + "of" + [quiz.questions.length];
}

// show score
let finalScore = document.getElementById("score");
let quizRepeat = document.getElementsByClassName("quiz-repeat");
let quizQuestion = document.getElementById("questions");
function showScores() {
  let quizEndHTML = Quiz(Completed);
  finalScore = quiz.score;
  quizQuestion = quiz.questions.length;

}

let quizElement = document.getElementsByClassName("Quiz");
quizEndHTML = quizElement.innerHTML;



//display questions
displayQuestion();

// add countDown
var time = 2;
var quizTimeMinutes = time * 60 * 60;
quizTime = quizTimeMinutes / 60;

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

