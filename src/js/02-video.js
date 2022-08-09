import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const LOCALSTOFAGE_KEY = "videoplayer-current-time";

const pauseTime = function() {

    player.getCurrentTime().then(function (seconds) {
        console.log(seconds)
        localStorage.setItem(LOCALSTOFAGE_KEY, seconds) ;

    }).catch(function (error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;

            default:
                break;
        }
    });
};


player.on('timeupdate', throttle(pauseTime, 1000));

const startTime = localStorage.getItem(LOCALSTOFAGE_KEY);

const startVideo = function (time) {
    player.setCurrentTime(time).then(function (seconds) {
        // seconds = the actual time that the player seeked to
    }).catch(function (error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;

            default:
                // some other error occurred
                break;
        }
    })
}

player.on('play', startVideo(startTime))