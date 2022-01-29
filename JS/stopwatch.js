const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const lapBtn = document.getElementById('lap');
const resetBtn = document.getElementById('reset');
const hrHeading = document.getElementById('hr');
const minHeading = document.getElementById('min');
const secHeading = document.getElementById('sec');
const lapsContainer = document.querySelector('.laps-container');
const circle = document.querySelector('.circle-outer')
var lapCounter = 0
var interval;
let hr = 0;
let min = 0;
let sec = 0;

// EVENTS
startBtn.addEventListener('click', () => run());
pauseBtn.addEventListener('click', () => stop());
resetBtn.addEventListener('click', () => reset());
lapBtn.addEventListener('click', () => lap());

// Functions
function timer() {
    sec++;
    if (sec < 10) {
        secHeading.innerHTML = "0" + sec;
    }
    if (sec >= 10) {
        secHeading.innerHTML = sec;
    }
    if (sec >= 60) {
        min++;
        if (min < 10) {
            minHeading.innerHTML = "0" + min;
            sec = 0;
        } else if (min >= 10) {
            minHeading.innerHTML = min;
            sec = 0;
        }
    }
    if (min >= 60) {
        hr++;
        if (hr < 10) {
            hrHeading.innerHTML = "0" + hr;
            min = 0;
        } else if (min >= 10) {
            hrHeading.innerHTML = hr;
            min = 0;
        }
    }
}
// Start

function run() {
    interval = setInterval(timer, 1000);
    pauseBtn.style.zIndex = '1';
    pauseBtn.style.opacity = '1';
    circle.style.animation = 'run-circle 1s ease infinite'

}
// Stop
function stop() {
    clearInterval(interval);
    pauseBtn.style.zIndex = '-1';
    pauseBtn.style.opacity = '0';
    circle.style.animation = 'none'
}
// Reset
function reset() {
    sec = '0' + 0;
    min = '0' + 0;
    hr = '0' + 0;
    secHeading.innerHTML = sec;
    minHeading.innerHTML = min;
    hrHeading.innerHTML = hr;
    lapsContainer.innerHTML = "";
    lapCounter = 0
    stop();
}
// Lap
function lap() {
    lapCounter++;
    console.log(lapCounter);
    let lapBox = document.createElement('div');
    let lapHeading = document.createElement('h2');
    lapBox.setAttribute('class', 'lap-box');
    lapHeading.setAttribute('class', 'lap-h');
    lapHeadingText = document.createTextNode('Lap' + lapCounter);
    lapHeading.innerHTML = 'Lap ' + lapCounter
    lapBox.innerHTML = hrHeading.innerHTML + ":" + minHeading.innerHTML + ":" + secHeading.innerHTML;
    lapBox.appendChild(lapHeading);
    lapsContainer.appendChild(lapBox);
}