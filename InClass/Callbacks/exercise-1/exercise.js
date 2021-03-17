/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval.  Complete the exercises in this CodePen

Prefer to work on a codepen? https://codepen.io/makanti/pen/abOreLg
================
*/


// function changeColor(){
//     setInterval(myCallback(), 1000);
// }


// function myCallback() {
//     let arrColors = ['red', 'blue', 'green', 'brown', 'yellow'];
//     let randomColor = Math.floor(Math.random() * arrColors.length);
//     let mainEl = document.getElementById("main");
//     mainEl.style.backgroundColor = randomColor;

// }

// changeColor();

// var intervalID = window.setInterval(myCallback, 1000);

// function myCallback() {
//     let arrColors = ['red', 'blue', 'green', 'brown', 'yellow'];
//     let randomColor = Math.floor(Math.random() * arrColors.length);
//     let mainEl = document.getElementById("main");
//     mainEl.style.backgroundColor = randomColor;
// }



// set(function () {
//     let mainEl = document.getElementById("main");
//     let arrColors = ['red', 'blue', 'green', 'brown', 'yellow'];
//     let randomColor = Math.floor(Math.random() * arrColors.length);
//     mainEl.style.backgroundColor = randomColor;
// }, 5000)

// setInterval();

setInterval(function () {
    let mainEl = document.getElementById("main");
    let arrColors = ['red', 'blue', 'green', 'brown', 'yellow'];
    let randomColor = arrColors[Math.floor(Math.random() * arrColors.length)];
    mainEl.style.backgroundColor = randomColor;
}, 3000);

