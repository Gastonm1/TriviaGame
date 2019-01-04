//===========================Global Variables========================
var currentQuestion = 0;
var score = 0;
var allQuestions = questions.length;

var container = document.getElementById('quizContainer');
var gameQuestion = docment.getElementById('question');
var op1 = document.getElementById('op1');
var op2 = document.getElementById('op2');
var op3 = document.getElementById('op3');
var op4 = document.getElementById('op4');
var nxtButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

//============================Game Operations=========================

function loadQuestion (questionIndex) {
    var q = questions[questionIndex]; // Pulls from the questions from TriviaQs via the index position
    gameQuestion.textContent= (questionIndex + 1) + '. ' + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt13.textContent = q.option3;
    opt4.textContent = q.option4;
};

function loadNextQuestion () {
    var selectedOption = document.querySelector('input[type=radio]:checked'); // Checking if option is selected
}