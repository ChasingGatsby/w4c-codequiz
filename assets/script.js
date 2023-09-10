var score;
var timeLeft;
var quizQ = document.querySelectorAll(".quest");
var start = document.querySelector(".open");

console.log(quizQ);

var startBtn = document.querySelector(".start");
var choiceBtn = document.querySelectorAll("button:not(.start");

console.log(choiceBtn);

function startQ() {
  start.setAttribute("style", "display: none");
  quizQ[0].setAttribute("style", "display:block");
}

function quizCh(event) {
  let i = 0;
  if (event.currentTarget.matches(".correct")) {
    score += 10;
    quizQ[i].setAttribute("style", "display:none");
    quizQ[i + 1].setAttribute("style", "display:block");
  } else {
    timeLeft -= 10;
    quizQ[i].setAttribute("style", "display:none");
    quizQ[i + 1].setAttribute("style", "display:block");
  }
}

startBtn.addEventListener("click", startQ);
choiceBtn.addEventListener("click", quizCh);
