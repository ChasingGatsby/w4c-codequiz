var score = 0;
var finalScore;
var timeLeft;
var quizQ = document.querySelectorAll(".quest");
var start = document.querySelector(".open");

console.log(quizQ);

var startBtn = document.querySelector(".start");
var choiceBtn = document.querySelectorAll("button:not(.admin");
var questList = document.querySelectorAll(".quest");

console.log(questList);

function startQ() {
  start.setAttribute("style", "display: none");
  quizQ[0].setAttribute("style", "display:block");
}

for (i of choiceBtn) {
  score = 0;
  x = 0;
  i.addEventListener("click", function (event) {
    if (
      event.target.classList.contains("correct") &&
      x < questList.length - 1
    ) {
      score += 10;
      quizQ[x].setAttribute("style", "display:none;");
      quizQ[(x += 1)].setAttribute("style", "display:block;");
    } else if (
      !event.target.classList.contains("correct") &&
      x < questList.length - 1
    ) {
      quizQ[x].setAttribute("style", "display:none;");
      quizQ[(x += 1)].setAttribute("style", "display:block;");
    } else if (
      event.target.classList.contains("correct") &&
      x == questList.length - 1
    ) {
      timeLeft = 0;
      score += 10;
      quizQ[x].setAttribute("style", "display:none;");
      start.setAttribute("style", "display:block;");
      x = 0;
      finalScore = score;
      console.log(score);
      score = 0;
    } else {
      timeLeft = 0;
      quizQ[x].setAttribute("style", "display:none;");
      start.setAttribute("style", "display:block;");
      x = 0;
      finalScore = score;
      console.log(score);
      score = 0;
    }
  });
}
startBtn.addEventListener("click", startQ);
