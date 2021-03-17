

let timeLeft = document.getElementById("timeRemaining");

function setAlarm() {
  let alarmSetValue = document.getElementById("alarmSet").value;
  convertTime(alarmSetValue);
  let countDown = setInterval(() => {
    alarmSetValue -= 1;
    console.log(alarmSetValue);
    convertTime(alarmSetValue);
    if (alarmSetValue === 0) {
      playAlarm();

      clearInterval(countDown);

      timeLeft.style.backgroundColor = "red";



    }
  }, 1000);


}

function convertTime(sec) {
  let minutes = Math.floor(sec / 60);
  let seconds = sec % 60;
  timeLeft.innerHTML = `Time Remaining: ${minutes}:${seconds}`;

}










// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
