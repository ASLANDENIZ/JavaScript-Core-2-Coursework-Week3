

let timeLeft = document.getElementById("timeRemaining");

let flashing;

let countDown;

function setAlarm() {
  let alarmSetValue = document.getElementById("alarmSet").value;
  convertTime(alarmSetValue);
  countDown = setInterval(() => {
    alarmSetValue -= 1;
    console.log(alarmSetValue);
    convertTime(alarmSetValue);
    if (alarmSetValue === 0) {
      playAlarm();

      clearInterval(countDown);
      let colors = ['red', 'blue', 'green', 'brown', 'yellow'];
      flashing = setInterval(function () {
        let color = colors[Math.floor(Math.random() * colors.length)];
        timeLeft.style.backgroundColor = color;

      }, 1000)

    }
  }, 1000);

}



function convertTime(sec) {
  let minutes = Math.floor(sec / 60);
  let seconds = sec % 60;
  timeLeft.innerHTML = `Time Remaining: ${minutes}:${seconds}`;

}


function stopFlashing() {
  clearInterval(flashing);
  console.log(flashing);
  timeLeft.style.backgroundColor = "";
  document.getElementById("alarmSet").value = "";


}

function pauseButton() {
  let targetDiv = document.getElementById("targetDiv");
  let buttonEl = document.createElement("button");
  buttonEl.innerHTML = "PAUSE";
  targetDiv.appendChild(buttonEl);
  buttonEl.style.backgroundColor = "red";
  buttonEl.addEventListener("click", function () {
    clearInterval(countDown);





  })

}

pauseButton();







// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
    stopFlashing();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
