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
var nameInput = document.getElementById("name")
var thanksPg = document.querySelector(".thanks")
var redirectBtn = document.querySelectorAll(".redirect")
var timerInterval
var scoreList = document.getElementById("scorelist")
var scorePage = document.querySelector(".scorepage")
var hiScore = document.querySelector(".hiscore")

var allScores = []

function setTime() {
  timeLeft = 60;
  timerInterval = setInterval(function () {
    timeLeft--;
    time.textContent = timeLeft;
    if (timeLeft === 0) {
      endQuiz(timerInterval)
      }
    }, 1000)
}


function startQ() {
  hiScore.disabled =true;
  hiScore.setAttribute("style", "background-color: rgb(204, 147, 147);")
  setTime();
  start.setAttribute("style", "display: none;");
  quizQ[0].setAttribute("style", "display:block;");
}

function endQuiz() {
  clearInterval(timerInterval);
  time.textContent = "NONE LOL"
  quizQ[x].setAttribute("style", "display:none;");
  finish.setAttribute("style", "display:block;");
  x = 0;
  finalScore = score;
  score = 0;
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
      timeLeft -= 10
      quizQ[x].setAttribute("style", "display:none;");
      quizQ[(x += 1)].setAttribute("style", "display:block;");
    } else if (
      event.target.classList.contains("correct") &&
      x == questList.length - 1
    ) {
      score += 10
      endQuiz();
    } else {
      endQuiz();
    }
  });
}

for (i of redirectBtn) {
  i.addEventListener("click", function () {
  start.setAttribute("style", "display:block;")
  scorePage.setAttribute("style", "display:none;");
  thanksPg.setAttribute("style", "display:none")
  hiScore.disabled = false;
  hiScore.removeAttribute("style", "background-color: rgb(204, 147, 147;")
})
}

function recordInfo () {
  var userInfo = {
    initial: initialInput.value,
    score: finalScore
  }
  if (initialInput.value == "") {
    alert("Put in an ACTUAL name lol")
  } else {
  allScores.push(userInfo)
  localStorage.setItem("allScores", JSON.stringify(allScores))
  finish.setAttribute("style", "display:none;")
  thanksPg.setAttribute("style", "display:block;")
  }
  nameInput.value = ""
}

function showScore () {
 let sortedScore = JSON.parse(localStorage.getItem("allScores"))
  scoreList.innerHTML = "";
  sortedScore.sort((a, b) => {
    if (a.score > b.score) {
      return -1;
    } 
    if (a.score < b.score) {
      return 1;
    }
    return 0;
    })
    for (let i = 0; i < sortedScore.length; i++) {
      let li = document.createElement('li')
      li.textContent = sortedScore[i].score + " - " + sortedScore[i].initial;
      scoreList.appendChild(li)
    }
    start.setAttribute("style", "display:none");
    scorePage.setAttribute("style", "display:block");

  }


startBtn.addEventListener("click", startQ);
submitBtn.addEventListener("click", recordInfo)
hiScore.addEventListener("click", showScore)