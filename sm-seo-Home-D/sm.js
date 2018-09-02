var V1 = document.getElementById('V1');
var V1Before = document.getElementById('V1-Before');
var V1After = document.getElementById('V1-After');
var video1 = document.getElementsByClassName('video1')[0];
var V3 = document.getElementById('V3');
var V3Before = document.getElementById('V3-Before');
var V3After = document.getElementById('V3-After');
var video3 = document.getElementsByClassName('video3')[0];
var V2 = document.getElementById('V2');
var V2Before = document.getElementById('V2-Before');
var V2After = document.getElementById('V2-After');
var video2 = document.getElementsByClassName('video2')[0];
var V4 = document.getElementById('V4');
var V4Before = document.getElementById('V4-Before');
var V4After = document.getElementById('V4-After');
var video4 = document.getElementsByClassName('video4')[0];

window.sud = this;

function onMouseEnterV1(){
    var that = window.sud;
    that.V1.style.background = 'rgba(139, 0, 0, 1)';
    that.V1Before.style.display= 'none';
    that.V1After.style.display = 'block';

}

function onMouseLeaveV1(){
    var that = window.sud;
    that.V1.style.background = 'rgba(139, 0, 0, 0.68)';
    that.V1Before.style.display= 'block';
    that.V1After.style.display = 'none';
}
function onMouseEnterV3(){
    var that = window.sud;
    that.V3.style.background = 'rgba(139, 0, 0, 1)';
    that.V3Before.style.display= 'none';
    that.V3After.style.display = 'block';
}

function onMouseLeaveV3(){
    var that = window.sud;
    that.V3.style.background = 'rgba(139, 0, 0, 0.68)';
    that.V3Before.style.display= 'block';
    that.V3After.style.display = 'none';
}
function onMouseEnterV2(){
    var that = window.sud;
    that.V2.style.background = 'rgba(3, 2, 2, 1)';
    that.V2Before.style.display= 'none';
    that.V2After.style.display = 'block';
}

function onMouseLeaveV2(){
    var that = window.sud;
    that.V2.style.background = 'rgba(3, 2, 2, 0.68)';
    that.V2Before.style.display= 'block';
    that.V2After.style.display = 'none';
}

function onMouseEnterV4(){
    var that = window.sud;
    that.V4.style.background = 'rgba(3, 2, 2, 1)';
    that.V4Before.style.display = 'none';
    that.V4After.style.display = 'block';
}

function onMouseLeaveV4(){
    var that = window.sud;
    that.V4.style.background = 'rgba(3, 2, 2, 0)';
    that.V4Before.style.display = 'block';
    that.V4After.style.display = 'none';
}

