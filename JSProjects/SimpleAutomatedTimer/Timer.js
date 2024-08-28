const timerElement = document.getElementById('timer');
const startButton = document.getElementById('start-button');
let countdownInterval;

startButton.addEventListener('click', () => {
    let seconds = 30;

    timerElement.textContent = seconds;

    countdownInterval = setInterval(() => {
        seconds--;
        timerElement.textContent = seconds;

        if (seconds === 0) {
            clearInterval(countdownInterval);
            alert("Time's up!");
        }
    }, 1000);

    startButton.disabled = true; 
});

