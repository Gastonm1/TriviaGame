//===========================Global Variables========================
var currentQuestion = 0;
var score = 0;
var interval;
var timer = document.getElementById("jstimer");
var incorrectAnswer = 0;
var totalQuestions = questions.length;
var container = document.getElementById("quizContainer");
var gameQuestion = document.getElementById("question");
var op1 = document.getElementById("op1");
var op2 = document.getElementById("op2");
var op3 = document.getElementById("op3");
var op4 = document.getElementById("op4");
var nxtButton = document.getElementById("nextButton");
var resultCont = document.getElementById("result");

//============================Pseudo Code=============================
// Make an array of questions to pull from.
// Load questions via index into proper container.
// Allow user click on option.
// Check if user answer is correct.
// If correct, increase the score.
// Make timer for each question. Maybe 15 seconds?
// Show total amount of correct questions at end of game.
// Celebrate when complete.

//============================Game Operations=========================

var timer2 = "5:01";
var interval = setInterval(function() {
  var timer = timer2.split(":");
  //by parsing integer, I avoid all extra string processing
  var minutes = parseInt(timer[0], 10);
  var seconds = parseInt(timer[1], 10);
  --seconds;
  minutes = seconds < 0 ? --minutes : minutes;
  seconds = seconds < 0 ? 59 : seconds;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  //minutes = (minutes < 10) ?  minutes : minutes;
  $("#jstimer").html(minutes + ":" + seconds);
  if (minutes < 0) clearInterval(interval);
  //check if both minutes and seconds are 0
  if (seconds <= 0 && minutes <= 0) clearInterval(interval);
  timer2 = minutes + ":" + seconds;
}, 1000);

function loadQuestion(questionIndex) {
  var q = questions[questionIndex];
  gameQuestion.textContent = questionIndex + 1 + ". " + q.question;
  op1.textContent = q.option1;
  op2.textContent = q.option2;
  op3.textContent = q.option3;
  op4.textContent = q.option4;
} // Pulls from the questions from TriviaQs via the index position

function loadNextQuestion() {
  var selectedOption = document.querySelector("input[type=radio]:checked");
  if (!selectedOption) {
    alert("Please select your answer!");
    return;
  } // Checking if option is selected by user// Radio buttons let user pick only one from the limited number of choices.

  var answer = selectedOption.value;
  if (questions[currentQuestion].answer == answer) {
    score += 1;
  } // Taking the property (answer) from the TriviaQs questions and comparing the selected option. If it is correct, the the score will increase
  selectedOption.checked = false;
  currentQuestion++;
  if (currentQuestion == totalQuestions - 1) {
    nxtButton.textContent = "Finish!";
  } // if the game is about to be over then this should show on the button indicating to the user that this is the last question.
  if (currentQuestion == totalQuestions) {
    container.style.display = "none"; // Will hide the quiz Container
    resultCont.style.display = " "; // Will show the result container
    resultCont.textContent = "Your score: " + score + "/10";
    return;
  } //Displays the Final score
  loadQuestion(currentQuestion);
}

//===========================Game Start =========================================

loadQuestion(currentQuestion);
