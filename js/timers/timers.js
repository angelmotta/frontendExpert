const start = document.getElementById('start');
const stop = document.getElementById('stop');
const count = document.getElementById('count');

start.addEventListener('click', startTime);
stop.addEventListener('click', stopTime);

let timerID;
let animationFrameID;

function startTime() {
    // console.log(`start time`);
    // timerID = setInterval(() => {
    //     count.textContent++;
    // }, 500);

    // Animation Frame
    count.textContent++;
    animationFrameID = requestAnimationFrame(startTime);
}

function stopTime() {
    // console.log(`stop time`);
    // clearInterval(timerID);

    // Animation Frame
    cancelAnimationFrame(animationFrameID);
}


// let timeoutID = setTimeout(() => {
//     console.log('timeout');
// }, 1000);

// clearTimeout(timeoutID);

// Performance
// setTimeout(() => {
//     console.log(performance.now());
// }, 1000)

// Dates
const date = new Date(2025, 0, 10, 9, 25, 10); // 10-Ene-2025 9:25:10 (local timeZone of env)
console.log(date);