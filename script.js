

    let time = 1500; // 25 minutes
    let timer;
    let isRunning = false;

    function updateDisplay() {
const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    document.getElementById('timer').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

    function startWork() {
        clearInterval(timer);
    time = 1500; // 25 min
    updateDisplay();
    timer = setInterval(countdown, 1000);
}

    function startBreak() {
        clearInterval(timer);
    time = 900; // 15 min
    updateDisplay();
    timer = setInterval(countdown, 1000);
}

    function resetTimer() {
        clearInterval(timer);
    time = 1500;
    updateDisplay();
}

    function countdown() {
if (time > 0) {
        time--;
    updateDisplay();
} else {
        clearInterval(timer);
    alert("Time's up!");
}
}

    updateDisplay(); // Init

