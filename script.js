const video = document.querySelector('video'), frameRate = 1/60;

//frame forward and back buttons
const frameBackd = document.querySelector('.frameBack');
const frameForwards = document.querySelector('.frameForward');

const frameBack = () => {
    video.currentTime = Math.max(0, video.currentTime - frameRate);
};

const frameForward = () => {
    video.currentTime = Math.min(video.duration, video.currentTime + frameRate);
}