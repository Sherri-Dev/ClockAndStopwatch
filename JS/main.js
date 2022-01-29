const content = document.querySelector('.content')
const heading = document.getElementById('heading');
const clockLi = document.getElementById('clockLi');
const clockDiv = document.getElementById('clock');
const stopwatchLi = document.getElementById('stopwatchLi');
const stopwatchDiv = document.getElementById('stopwatch');

clockLi.addEventListener('click', () => navSlider('it is clock'))
stopwatchLi.addEventListener('click', () => navSlider('it is stopwatch'))


function navSlider(navigation) {
    if (navigation === 'it is stopwatch') {
        heading.innerHTML = "Stopwatch"
        stopwatchDiv.classList.remove('hide');
        clockDiv.classList.add('hide');
        clockLi.classList.remove('active');
        stopwatchLi.classList.add('active');
        content.style.marginLeft = '-25rem'
    }
    if (navigation === 'it is clock') {
        heading.innerHTML = "Clock"
        stopwatchDiv.classList.add('hide');
        clockDiv.classList.remove('hide');
        clockLi.classList.add('active');
        stopwatchLi.classList.remove('active');
        content.style.marginLeft = '45rem'
    }
}


//DARK MODE
let dark = document.getElementById('dark');
let icon = document.getElementById('night')
let toggle = document.getElementById('toggle');
toggle.onclick = function darkMode() {
    toggle.classList.toggle('active');
    dark.classList.toggle('active');
    icon.classList.toggle('active')
}