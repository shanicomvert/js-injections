var video = document.getElementById('bgvid');

var pausing_function = function(){
    if(this.currentTime >= 3.6) {
        this.pause();

        // remove the event listener after you paused the playback
        this.removeEventListener("timeupdate",pausing_function);
    }
};

video.addEventListener("timeupdate", pausing_function);