var score = 0;
var finalScore;
var time = document.getElementById("timeLeft");
var timeLeft;
var quizQ = document.querySelectorAll(".quest");
var start = document.querySelector(".open");
var finish = document.querySelector(".finish")
var startBtn = document.querySelector(".start");
var choiceBtn = document.querySelectorAll("button:not(.admin");
var questList = document.querySelectorAll(".quest");
var initialInput = document.querySelector("#name")
var submitBtn = document.querySelector("#submit")
var returnPg = document.querySelector(".redirect")
var returnBtn = document.getElementById("goback")

var allScores = []

function setTime() {
  let timeLeft = 60;
  var timerInterval = setInterval(function () {
    timeLeft--;
    time.textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timerInterval);
      finish.setAttribute("style", "display:block;")
    }
  }, 1000);
}

function startQ() {
  setTime();
  // startBtn.setAttribute("disabled", true)
  start.setAttribute("style", "display: none;");
  quizQ[0].setAttribute("style", "display:block;");
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
      timeLeft - 10
      quizQ[x].setAttribute("style", "display:none;");
      quizQ[(x += 1)].setAttribute("style", "display:block;");
    } else if (
      event.target.classList.contains("correct") &&
      x == questList.length - 1
    ) {
      quizQ[x].setAttribute("style", "display:none;");
      finish.setAttribute("style", "display:block;");
      x = 0;
      finalScore = score;
      score = 0;
    } else {
  
      quizQ[x].setAttribute("style", "display:none;");
      finish.setAttribute("style", "display:block;");
      x = 0;
      finalScore = score;
      score = 0;
    }
  });
}

function recordInfo () {
  var userInfo = {
    initial: initialInput.value,
    score: finalScore
  }
  if (initialInput.value == "") {
    alert("Plase submit some REAL initials lol")
  } else {
  allScores.push(userInfo)
  localStorage.setItem("allScores", JSON.stringify(allScores))
  finish.setAttribute("style", "display:none;")
  returnPg.setAttribute("style", "display:block;")
  }
}

function goback () {
  start.setAttribute("style", "display:block;")
  returnPg.setAttribute("style", "display:none")
}

startBtn.addEventListener("click", startQ);
submitBtn.addEventListener("click", recordInfo)
returnBtn.addEventListener("click", goback)