var img = document.getElementById('comp-jiboxkpximgimage');
img.src = 'https://cdn.comvert.io/vendor/Selectmedia/Images/hands%20(logos).png';
img.insertAdjacentHTML("afterend", '<div style="display:flex; flex-flow:row;margin-left: calc((100% - 728px) * 0.5);"><a style="z-index:10" href="mailto:info@selectmedia.asia"> <img src="https://cdn.comvert.io/vendor/Selectmedia/Images/mail.png"></img></a></div>');

document.getElementsByClassName('joinBtn')[0].style.top = '790px';
document.getElementById('comp-jiboxh0c').style.top = '2073px';

var div = document.getElementById('comp-jiboxgf4'); 
var html = '<div style="text-decoration: underline;position: absolute;top: 216px;margin-left: calc((100% - 265px) * 0.5);font-size: 20px;color: black;font-weight: bold;" target="_self" class=" g-transparent-a style-jl6b1ysplink"><span>Why choose Select Media?</span></div>'
div.insertAdjacentHTML('afterend', html);
div.style.top = '125px';

html = '<div style="margin-left: calc((100% - -1194px) * 0.5);top: 145px;position: absolute;"><img src="https://cdn.comvert.io/vendor/Selectmedia/Images/globs.png"></img>'+
'<div style="display:flex; flex-flow:row;margin-left: calc((100% - 68px) * 0.5);"><a style="z-index:10" href="mailto:info@selectmedia.asia"> <img src="https://cdn.comvert.io/vendor/Selectmedia/Images/mail.png"></img></a></div></div>';
div = document.getElementById('comp-jiboxka2');
div.insertAdjacentHTML('beforebegin', html);

html = '<p class="font_8" style="font-size:17px;"><span style="font-size:17px;">SelectMedia is the tech stack for digital advertising.</span></p>'+
'<p style="font-size:17px;"><span style="font-size:17px;"><span style="font-weight:bold;font-size:18px;">Trusted by the world&apos;s leading publishers,</span> <span style="font:normal normal bold 17px/1.4em poppins-extralight,poppins,sans-serif;">Select Media delivers digital advertising premium campaigns through its mobile growth and full-stack video platform.</span></span></p>'+
'<p class="font_8" style="font-size:17px;"><span style="font-size:17px;"> Major publishers use its comprehensive suite of video advertising tools to eliminate cost, maximize yield and create exposure to new demand sources. Advertisers gain direct access to high quality video and mobile inventory on a global scale with guaranteed quality, view ability and brand safety.</span></p>'+
'<p class="font_8" style="font-size:17px;"><span style="font-size:17px;"> SelectMedia was founded in 2012. The company is headquartered in Tel Aviv , with offices in: Singapore, Thailand, India and Indonesia where it provides the largest advertisers and agencies in Asia with direct access to premium inventory from leading publishers from around the world. <a href="" style="text-decoration:underline;">Back to product page</a></span></p>';

document.getElementById('comp-jiboxkek').innerHTML = html;