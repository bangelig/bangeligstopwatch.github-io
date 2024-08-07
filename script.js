let startTime;
let updatedTime;
let difference;
let timerInterval;
let running = false;

const displayMinutes = document.getElementById("minutes");
const displaySeconds = document.getElementById("seconds");
const displayMilliseconds = document.getElementById("milliseconds");

function startTimer() {
    if (!running) {
        running = true;
        startTime = new Date().getTime();
        timerInterval = setInterval(updateTimer, 10);
    }
}

function updateTimer() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    const milliseconds = Math.floor((difference % 1000) / 10);

    displayMinutes.textContent = (minutes < 10) ? "0" + minutes : minutes;
    displaySeconds.textContent = (seconds < 10) ? "0" + seconds : seconds;
    displayMilliseconds.textContent = (milliseconds < 10) ? "0" + milliseconds : milliseconds;
}

function stopTimer() {
    if (running) {
        running = false;
        clearInterval(timerInterval);
    }
}

function resetTimer() {
    stopTimer();
    startTime = null;
    updatedTime = null;
    difference = 0;
    displayMinutes.textContent = "00";
    displaySeconds.textContent = "00";
    displayMilliseconds.textContent = "00";
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
