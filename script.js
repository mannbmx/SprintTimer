const video = document.querySelector('video'), frameRate = 1/25;

//frame forward and back buttons

const frameBack = () => {
    video.currentTime = Math.max(0, video.currentTime - frameRate);
};

const frameForward = () => {
    video.currentTime = Math.min(video.duration, video.currentTime + frameRate);
}

//Set Start and Stop values

let startTime;
let stopTime;

const setStart = () => {
    startTime = video.currentTime;
    console.log(startTime);
}

const setStop = () => {
    stopTime = video.currentTime;
    console.log(stopTime);
}

//Calculate time between start and stop
let time;
const timeDisplay = document.querySelector('.timeDisplay');

const calcTime = () => {
    time = stopTime - startTime;
    timeDisplay.textContent = time.toFixed(3)
}