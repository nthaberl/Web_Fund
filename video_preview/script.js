console.log("page loaded...");

var vid = document.querySelector("#video");

function playVid(){
    vid.muted = true;
    vid.play();
}

function pauseVid(){
    vid.pause();
}