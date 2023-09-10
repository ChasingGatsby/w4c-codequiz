var score = 0;
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



for (i of choiceBtn) {
  x = 0;
  i.addEventListener('click', function(event) {
    if (event.target.classList.contains("correct") && x < choiceBtn.length) {
      score += 10;
      quizQ[x].setAttribute("style", "display:none;");
      quizQ[x+=1].setAttribute("style", "display:block;");
    } else if (x == choiceBtn.length-1) {
      timeLeft = 0;
      quizQ[x].setAttribute('style', 'display:none;')
      start.setAttribute('style', 'display: block;')
    } else {
      timeLeft -= 10;
      quizQ[x].setAttribute("style", "display:none;");
      quizQ[x+=1].setAttribute("style", "display:block;");
    }
  })
}

startBtn.addEventListener("click", startQ);
