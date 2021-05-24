const startTime = new Date();
const maxTimeSecs = 10;

function updateTimer() {
    const clockContainer = document.querySelector('.clock');
    const deltaSecs = Math.round((new Date() - startTime) / 1000);
    const secsLeft = maxTimeSecs - deltaSecs;
    if (secsLeft <= 0) {
        // document.querySelector('body').innerHTML = '';
    }
    clockContainer.innerText = secsLeft;
}

setInterval(updateTimer, 1000);

