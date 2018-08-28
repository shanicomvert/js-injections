var video4 = document.getElementById('video4');
var video4cover = document.getElementById('video4cover');
var video4content = document.getElementById('video4content');
video4cover.style.display = 'none';
var video3 = document.getElementById('video3');
var video3cover = document.getElementById('video3cover11');
// var video4content = document.getElementById('video4content');
// video3cover.style.display = 'none';
window.sud = this;

function onMouseEnterV4(){
    var that = window.sud;
    that.video4.style.display = 'none';
    that.video4content.style.display = 'none';
    that.video4cover.style.display = 'block';
}

function onMouseLeaveV4(){
    var that = window.sud;
    that.video4.style.display = 'block';
    that.video4content.style.display = 'block';
    that.video4cover.style.display = 'none';
}

function onMouseEnterV3(){
    var that = window.sud;
    that.video3.style.display = 'none';
    that.video3cover.style.display = 'block';
}
