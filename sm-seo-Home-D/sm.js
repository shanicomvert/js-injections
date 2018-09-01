var V1 = document.getElementById('V1');
var video1 = document.getElementsByClassName('video1')[0];
var V3 = document.getElementById('V3');
var video3 = document.getElementsByClassName('video3')[0];
// var video4cover = document.getElementById('video4cover');
// var video4content = document.getElementById('video4content');
// video4cover.style.display = 'none';
// var video3 = document.getElementById('video3');
// var video3cover = document.getElementById('video3cover11');
// var video4content = document.getElementById('video4content');
// video3cover.style.display = 'none';
window.sud = this;

function onMouseEnterV1(){
    var that = window.sud;
    that.V1.style.background = 'rgba(139, 0, 0, 1)';
    that.video1.style.opacity = '1';
    // that.video4content.style.display = 'none';
    // that.video4cover.style.display = 'block';
}

function onMouseLeaveV1(){
    var that = window.sud;
    var that = window.sud;
    that.V1.style.background = 'rgba(139, 0, 0, 0.68)';
}
function onMouseEnterV3(){
    var that = window.sud;
    that.V3.style.background = 'rgba(139, 0, 0, 1)';
    // that.video4content.style.display = 'none';
    // that.video4cover.style.display = 'block';
}

function onMouseLeaveV3(){
    var that = window.sud;
    var that = window.sud;
    that.V3.style.background = 'rgba(139, 0, 0, 0.68)';
}
