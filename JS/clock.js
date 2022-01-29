const hrHand = document.getElementById('hr-hand');
const minHand = document.getElementById('min-hand');
const secHand = document.getElementById('sec-hand');
const timeBox = document.getElementById('time-box');
const span = timeBox.getElementsByTagName('span');

setInterval(clock, 1000);

function clock() {
    let d = new Date();
    let hrTime = d.getHours();
    let minTime = d.getMinutes();
    let secTime = d.getSeconds();
    let hrRotation = hrTime * 30 + minTime / 2;
    let minRotation = minTime * 6 + secTime / 10;
    let secRotation = secTime * 6;
    hrHand.style.transform = `rotate(${hrRotation}deg)`
    minHand.style.transform = `rotate(${minRotation}deg)`
    secHand.style.transform = `rotate(${secRotation}deg)`
}
//Time
let d = new Date();
let currentDay = d.getDay();
let currentMonth = d.getMonth();
let currentDate = d.getDate();
let currentYear = d.getFullYear();
showDate()

function showDate() {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    span[0].innerHTML = days[currentDay];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    span[1].innerHTML = months[currentMonth];
    span[2].innerHTML = currentDate;
    span[3].innerHTML = currentYear;
}