
 var link = document.createElement('link');
 link.rel = 'stylesheet';
 link.href = 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';
 document.head.appendChild(link);
 
var formHeaderCtn = document.getElementById("comp-jiudr4qr");
var html =  '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'+
'<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">'+
'  <meta property="og:title" content="SELECTMEDIA" />'+
'  <meta property="og:image" content="http://cloud.selectmedia.asia/static/v6-desktop-0301/images/ico_SM_16x16.gif" />'+
'  <meta property="og:site_name" content="SELECTMEDIA" />'+
'  <title>SELECTMEDIA</title>'+
'<link rel="shortcut icon" href="http://cloud.selectmedia.asia/static/v6-desktop-0301/images/ico_SM_16x16.gif" />'+
'  <link rel="icon" type="image/png" href="http://cloud.selectmedia.asia/static/v6-desktop-0301/images/ico_SM_16x16.gif" />'+
'<meta name="viewport" content="width=1020">'+
'<script type="text/javascript"   src="http://widgets.outbrain.com/outbrain.js"></script>'+
'<style>'+
'        .modal {'+
'    display: none; /* Hidden by default */'+
'    position: fixed; /* Stay in place */'+
'    z-index: 1; /* Sit on top */'+
'    left: 0;'+
'    top: 0;'+
'    width: 100%; /* Full width */'+
'    height: 100%; /* Full height */'+
'    overflow: auto; /* Enable scroll if needed */'+
'    background-color: rgb(0,0,0); /* Fallback color */'+
'    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */'+
'}'+
''+
'/* Modal Content/Box */'+
'.modal-content {'+
'    background-color: #fefefe;'+
'    margin: 4% auto; /* 15% from the top and centered */'+
'    padding: 8px 10px;'+
'    border: 1px solid #888;'+
'    width: 58%; /* Could be more or less, depending on screen size */'+
'    height: 80%;'+
'}'+
''+
'/* The Close Button */'+
'.close {'+
'    color: #aaa;'+
'    float: right;'+
'    font-size: 40px;'+
'    font-weight: bold;'+
'}'+
''+
'.close:hover,'+
'.close:focus {'+
'    color: black;'+
'    text-decoration: none;'+
'    cursor: pointer;'+
'}'+
'.content-main {'+
'  display: block;'+
'  margin: 0 auto;'+
'  width: 1200px;'+
'  max-width: 97%; }'+
'  .content-main .header {'+
'    width: 100%; }'+
'    .content-main .header img {'+
'      width: 100%; }'+
'    .content-main .header .ad {'+
'      text-align: center;'+
'      background: #01b0eb url("https://cloud.selectmedia.asia/static/v6-desktop-0301/images/banner-bg.jpg") no-repeat center center;'+
'      background-size: cover;'+
'      margin-bottom: 12px;'+
'      display: none;'+
'      overflow: hidden;'+
'      height: 260px;'+
'      padding: 10px;'+
'      box-sizing: border-box;'+
'      position: relative; }'+
'      .content-main .header .ad #close {'+
'        position: absolute;'+
'        top: 5px;'+
'        right: 5px;'+
'        width: 20px;'+
'        height: 20px;'+
'        background: white;'+
'        cursor: pointer; }'+
'        .content-main .header .ad #close:before, .content-main .header .ad #close:after {'+
'          content: \'\';'+
'          position: absolute;'+
'          background: #01b0eb; }'+
'        .content-main .header .ad #close:before {'+
'          width: 2px;'+
'          height: 12px;'+
'          top: 4px;'+
'          left: 9px;'+
'          transform: rotate(45deg); }'+
'        .content-main .header .ad #close:after {'+
'          width: 12px;'+
'          height: 2px;'+
'          top: 9px;'+
'          left: 4px;'+
'          transform: rotate(45deg); }'+
'      .content-main .header .ad #aniheader {'+
'        display: inline-block; }'+
'      .content-main .header .ad #aniplayer {'+
'        margin-left: 48% !important; }'+
'  .content-main .featured {'+
'    overflow: hidden;'+
'    position: relative; }'+
'    .content-main .featured img {'+
'      width: 50%;'+
'      float: left; }'+
'    .content-main .featured .incontent-ad {'+
'      position: absolute;'+
'      top: 0;'+
'      left: 50%;'+
'      width: 295px;'+
'      height: 200px;'+
'      background: white url("images/footer.png") no-repeat bottom center;'+
'      background-size: contain; }'+
'  .content-main .main {'+
'    overflow: hidden;'+
'    background: url("images/sidebar_bg.gif") repeat-y center;'+
'    background-size: contain; }'+
'    .content-main .main #playerHyperlink {'+
'      display: block;'+
'      width: 600px; }'+
'    .content-main .main .left {'+
'      width: 70%;'+
'      float: left; }'+
'      .content-main .main .left img {'+
'        width: 100%; }'+
'    .content-main .main .right {'+
'      width: 30%;'+
'      float: right; }'+
'      .content-main .main .right img {'+
'        width: 100%; }'+
'      .content-main .main .right .ad {'+
'        max-width: 83.33%;'+
'        margin: 0 auto;'+
'        overflow: hidden; }'+
'        .content-main .main .right .ad #aniplayer {'+
'          float: left; }'+
'        .content-main .main .right .ad img {'+
'          float: left;'+
'          width: 100%; }'+
'  .content-main .footer img {'+
'    width: 100%; }'+
'    </style>'+
'<div class="accordionCtn" style="min-height: 192px;min-width: 980px;left: 0px;width: 980px;position: absolute;margin-left: calc((100% - 1060px) * 0.5);'+
'    top: 10px;height: 192px;padding: 30px 40px;">'+
'        <div style="text-align: center; width: calc(100% - 35px);">'+
'            <h2 style="overflow: hidden; text-overflow: ellipsis; -webkit-box-orient: vertical; display: -webkit-box; -webkit-line-clamp: 3;font: normal normal bold 41px/51px poppins-semibold,poppins,sans-serif;color: rgba(48,48,48,1);">Exceptional Value for Publishers</h2>'+
'        </div>'+
'        <div style="display:flex; flex-flow:row;cursor: pointer;width: 92%;border-color: rgba(51,51,51,0.2) !important;text-align: left!important;direction: ltr;'+
'        padding: 39px 0 15px 47px; font: normal normal bold 18px/22px poppins-extralight,poppins,sans-serif;line-height: 1.2em;font-size: 18px;color: rgba(0,0,0,1);"'+
'        onclick="toggleAccordion();">'+
'            <span style="display: flex; flex-flow: column">'+
'                At SelectMedia we know how important it is to provide the best user experience for your viewers, '+
'                <span>'+
'                    while sensitively balancing ad load for monetization and ads...'+
'                </span>                   '+
'            </span> '+
'            <i id="arrowDown" class="fa fa-angle-down" style="margin: 1.2% 0 0 2.5%;font-size: 21px;"></i>        '+
'            <i id="arrowUp" class="fa fa-angle-up" style="display:none;margin: 1.2% 0 0 2.5%;font-size: 21px;"></i>        '+
'        </div>'+
'        <div id="panel" style="display: none;width: 92%;border-color: rgba(51,51,51,0.2) !important;text-align: left!important;direction: ltr;padding: 4px 0 15px 47px;'+
'        font: normal normal bold 18px/22px poppins-extralight,poppins,sans-serif;line-height: 1.2em;font-size: 18px;color: rgba(0,0,0,1);">'+
'            <span style="display: flex; flex-flow: column">'+
'                SelectMedia offers innovative formats coupled with quality ad-fill from top - demand sources to '+
'                <span>help you monetize effectively without alienating your viewers.</span> '+
'                <span>We deliver optimal yield based on predictive optimization, a substantial revenue lift, high effective fill</span>'+
'                <span>rate and hundreds of simultaneous campaigns.</span> '+
'                <span>If you have a quality site and are interested in joining our supply network.</span>           '+
'            </span>'+
'        </div>'+
'        <div style="border-bottom: 1px solid lightgray;padding: 3px;width: 91%;margin-left: calc((100% - 899px) * 0.5);/* margin-left: 4%; */"></div>'+
'    </div>'+
'    <div id="videosPrototypesCtn" class="videosPrototypesCtn" style="text-align: center; position: absolute; display: flex; flex-flow:  column; width: 100%;top: 23%;">'+
'        <h2 style="margin: 2% 0; font: normal normal bold 41px/51px poppins-semibold,poppins,sans-serif;color: rgba(48,48,48,1);">Our Video Solution</h2>'+
'        <div class="videosPrototypesFlex" style="display: flex;flex-wrap: wrap;width: 50%;height: auto;margin: 0 25%;">'+
'            <div class="videoPrototype" style="flex: 0 33.33333333%;">'+
'                <img style="width: 100%;" src="https://cdn.comvert.io/vendor/Selectmedia/Images/inContent1.png" alt="">'+
'                <h6 class="font_6" style="text-align:center;">In-Content</h6>'+
'                <div onclick="openModal1()" style="margin:0 27%; font-size: 21px;font-weight: bold;color:#a80c03;border-bottom: 1px solid #a80c03;cursor: pointer;">'+
                      'Watch Demo'+
                '</div>'+
'            </div>'+
'            <div class="videoPrototype" style="flex: 0 33.33333333%;">'+
'                <img style="width: 100%;" src="https://cdn.comvert.io/vendor/Selectmedia/Images/fixedPlayist1.png" alt="">'+
'                <h6 class="font_6" style="text-align:center;">Fixed Playlist</h6>'+
'                 <div onclick="openModal2()" style="margin: 0 27%;font-size: 21px;font-weight: bold;color:#a80c03;border-bottom: 1px solid #a80c03;cursor: pointer;">'+
                    'Watch Demo'+
                 '</div>'+
'            </div>'+
'            <div class="videoPrototype" style="flex: 0 33.33333333%;color:#a80c03">'+
'                <img style="width: 100%;" src="https://cdn.comvert.io/vendor/Selectmedia/Images/sliderPlaylist1.png" alt="">'+
'                <h6 class="font_6" style="text-align:center;">Slider Playlist</h6>'+
'              <div onclick="openModal3()" style="margin: 0 27%;font-size: 21px;font-weight: bold;color:#a80c03;border-bottom: 1px solid #a80c03;cursor: pointer;">'+
                    'Watch Demo'+
                '</div>'+
'            </div>'+
'            <div class="videoPrototype" style="flex: 0 33.33333333%;margin-top: 2%;">'+
'                <img style="width: 100%;" src="https://cdn.comvert.io/vendor/Selectmedia/Images/brandHeader1.png" alt="">'+
'                <h6 class="font_6" style="text-align:center;">Brand Header</h6>'+
'               <div onclick="openModal4()" style="margin: 0 27%;font-size: 21px;font-weight: bold;color:#a80c03;border-bottom: 1px solid #a80c03;cursor: pointer;">'+
                    'Watch Demo'+
                '</div>'+
'            </div>'+
'            <div class="videoPrototype" style="flex: 0 33.33333333%;margin-top: 2%;">'+
'                <img style="width: 100%;" src="https://cdn.comvert.io/vendor/Selectmedia/Images/overlay1.png" alt="">'+
'                <h6 class="font_6" style="text-align:center;">Overlay</h6>'+
'               <div onclick="openModal5()" style=" margin: 0 27%;font-size: 21px;font-weight: bold;color:#a80c03;border-bottom: 1px solid #a80c03;cursor: pointer;">'+
                  'Watch Demo'+
                '</div>'+
'            </div>'+
'            <div class="videoPrototype" style="flex: 0 33.33333333%;margin-top: 2%;">'+
'                <img style="width: 100%;" src="https://cdn.comvert.io/vendor/Selectmedia/Images/bottomSticky1.png" alt="">'+
'                <h6 class="font_6" style="text-align:center;">Bottom Sticky</h6>'+
'                 <div onclick="openModal6()" style="margin: 0 27%;font-size: 21px;font-weight: bold;color:#a80c03;border-bottom: 1px solid #a80c03;cursor: pointer;">'+
'                       Watch Demo'+
'                   </div>'+
'            </div>'+
'        </div>'+
'    </div>'+
'<div id="modal1" class="modal">'+
'            <div class="modal-content">'+
'                <span class="close" onclick="closeModal1()">×</span>'+
'                <div style="height: 95%;overflow-y: scroll;margin: 3% 2.5% 0% 2.5%;">'+
'                    <div class="header">'+
'                        <img src="https://cloud.selectmedia.asia/static/v6-desktop-0301/images/header_top.jpg" />'+
'                        <img src="https://cloud.selectmedia.asia/static/v6-desktop-0301/images/header_small.jpg" />'+
'                    </div>'+
''+
'                    <div class="main" style="background:none; position:relative">'+
'                        <div class="article_main">'+
'                        <img src="https://cloud.selectmedia.asia/static/v6-desktop-0301/images/main_block1.jpg" style="margin-bottom:20px" />'+
'                        <div id="aniAnimation1" class="aniAnimationOpen"><div id="aniviewBox1"><div id="aniplayer1"></div></div></div>'+
''+
'                        <img src="https://cloud.selectmedia.asia/static/v6-desktop-0301/images/main_block2.jpg" style="margin-top:20px" />'+
'                        </div>'+
'                        <div class="article_sidebar" style="border-left:1px solid #ddd; border-right:1px solid #ddd; position:absolute; top:0; right:0; height:100%">'+
'                        <img src="https://cloud.selectmedia.asia/static/v6-desktop-0301/images/sidebar_article.jpg" />'+
'                        </div>'+
'                    </div>'+
''+
'                    <div class="footer"><img src="https://cloud.selectmedia.asia/static/v6-desktop-0301/images/footer.jpg" />'+
'                    </div>'+
''+
'             </div>'+
'        </div>'+
'    </div>'+
'    <div id="modal2" class="modal">'+
'            <div class="modal-content">'+
'                <span class="close" onclick="closeModal2()">×</span>'+
'                <div style="height: 95%;overflow-y: scroll;margin: 3% 2.5% 0% 2.5%;">'+
'                    <div class="content-main" id="modalContent">'+
'                            <div class="header">'+
'                                    <img src="https://cloud.selectmedia.asia/static/v6-desktop-0301/images/header_top.jpg" />'+
'                                    <img src="https://cloud.selectmedia.asia/static/v6-desktop-0301/images/header_small.jpg" />'+
'                                  </div>'+
'                              '+
'                                  <div class="main" style="background:none; position:relative">'+
'                                    <div class="article_main">'+
'                                      <img src="https://cloud.selectmedia.asia/static/v6-desktop-0301/images/main_block1.jpg" style="margin-bottom:20px" />'+

'                                      <div class="aniviewRSlider"></div>'+
''+
'                                      <img src="https://cloud.selectmedia.asia/static/v6-desktop-0301/images/main_block2.jpg" style="margin-top:20px" />'+
'                                    </div>'+
'                                    <div class="article_sidebar" style="border-left:1px solid #ddd; border-right:1px solid #ddd; position:absolute; top:0; right:0; height:100%">'+
'                                      <img src="https://cloud.selectmedia.asia/static/v6-desktop-0301/images/sidebar_article.jpg" />'+
'                                    </div>'+
'                                  </div>'+
'                              '+
'                                  <div class="footer"><img src="https://cloud.selectmedia.asia/static/v6-desktop-0301/images/footer.jpg" /></div>'+
'                    </div>  '+
'                </div>'+
'            </div>   '+
'    </div>'+
' <div id="modal3" class="modal">'+
'            <div class="modal-content">'+
'                <span class="close" onclick="closeModal3()">×</span>'+
'                <div style="height: 95%;overflow-y: scroll;margin: 3% 2.5% 0% 2.5%;">'+
'                        <div class="header">'+
'                            <img src="https://cloud.selectmedia.asia/static/v6-desktop-0301/images/header_top.jpg" />'+
'                            <img src="https://cloud.selectmedia.asia/static/v6-desktop-0301/images/header_small.jpg" />'+
'                        </div>'+
''+
'                        <div class="main" style="background:none; position:relative">'+
'                            <div class="article_main">'+
'                            <img src="https://cloud.selectmedia.asia/static/v6-desktop-0301/images/main_block1.jpg" style="margin-bottom:20px" />'+
'                          '+
'                            <div class="aniviewRSlider"></div>'+
''+
'                            <img src="https://cloud.selectmedia.asia/static/v6-desktop-0301/images/main_block2.jpg" style="margin-top:20px" />'+
'                            </div>'+
'                            <div class="article_sidebar" style="border-left:1px solid #ddd; border-right:1px solid #ddd; position:absolute; top:0; right:0; height:100%">'+
'                            <img src="https://cloud.selectmedia.asia/static/v6-desktop-0301/images/sidebar_article.jpg" />'+
'                            </div>'+
'                        </div>'+
''+
'                        <div class="footer"><img src="https://cloud.selectmedia.asia/static/v6-desktop-0301/images/footer.jpg" /></div>'+
''+
'                </div>'+
'            </div>'+
'        </div>'+
'    <div id="modal4" class="modal">'+
'            <div class="modal-content">'+
'                <span class="close" onclick="closeModal4()">×</span>'+
'                <div style="height: 95%;overflow-y: scroll;margin: 3% 2.5% 0% 2.5%;">  '+
'                    <div class="header banner">'+
'                        <img src="https://cloud.selectmedia.asia/static/v6-desktop-0301/images/header_top.jpg" />'+
'                        <div class="ad">'+
'                            <div id="aniplayer"></div>'+
'                            <div id="close"></div>'+
'                        </div>'+
'                        <img src="https://cloud.selectmedia.asia/static/v6-desktop-0301/images/header.jpg" />'+
'                    </div>                   '+
'                    <div class="featured">'+
'                    <img src="https://cloud.selectmedia.asia/static/v6-desktop-0301/images/featured_story.jpg" />'+
'                    <img src="https://cloud.selectmedia.asia/static/v6-desktop-0301/images/featured_stories.jpg" />'+
'                    </div>'+
'                '+
'                    <div class="main">'+
'                    <div class="left"><img src="https://cloud.selectmedia.asia/static/v6-desktop-0301/images/main_block.jpg" /></div>'+
'                    <div class="right">'+
'                        <img src="https://cloud.selectmedia.asia/static/v6-desktop-0301/images/social.jpg" />'+
'                        <div class="ad">'+
'                        <div id="aniplayer"></div>'+
'                        <img src="https://cloud.selectmedia.asia/static/v6-desktop-0301/images/sidebar_ad_bottom.jpg" />'+
'                        </div>'+
'                        <img src="https://cloud.selectmedia.asia/static/v6-desktop-0301/images/sidebar.jpg" />'+
'                    </div>'+
'                    </div>'+
'                '+
'                    <div class="footer"><img src="https://cloud.selectmedia.asia/static/v6-desktop-0301/images/footer.jpg" /></div> '+
'                </div>'+
'            </div>'+
'    </div> '+
'    <div id="modal5" class="modal">'+
'            <div class="modal-content">'+
'                <span class="close" onclick="closeModal5()">×</span>'+
'                <div style="height: 95%;overflow-y: scroll;margin: 3% 2.5% 0% 2.5%;">  '+
'                        <div class="header">'+
'                                <img src="https://cloud.selectmedia.asia/static/v6-desktop-0301/images/header_top.jpg" />'+
'                                <img src="https://cloud.selectmedia.asia/static/v6-desktop-0301/images/header_small.jpg" />'+
'                            </div>'+
'        '+
'                            <div class="main" style="background:none; position:relative">'+
'                                <div class="article_main">'+
'                                <img src="https://cloud.selectmedia.asia/static/v6-desktop-0301/images/main_block1.jpg" style="margin-bottom:20px" />'+
'        '+
'                                <div id="aniAnimation" class="aniAnimationOpen"><div id="aniviewBox"><div id="aniplayer"></div></div></div>'+
'        '+
'                                <img src="https://cloud.selectmedia.asia/static/v6-desktop-0301/images/main_block2.jpg" style="margin-top:20px" />'+
'                                </div>'+
'                                <div class="article_sidebar" style="border-left:1px solid #ddd; border-right:1px solid #ddd; position:absolute; top:0; right:0; height:100%">'+
'                                <img src="https://cloud.selectmedia.asia/static/v6-desktop-0301/images/sidebar_article.jpg" />'+
'                                </div>'+
'                            </div>'+
'        '+
'                            <div class="footer"><img src="https://cloud.selectmedia.asia/static/v6-desktop-0301/images/footer.jpg" />'+
'                            </div>'+
'                </div>'+
'               '+
'            </div>'+
'    </div> '+
'    <div id="modal6" class="modal">'+
'            <div class="modal-content">'+
'                <span class="close" onclick="closeModal6()">×</span>'+
'                <div style="height: 95%;overflow-y: scroll;margin: 3% 2.5% 0% 2.5%;">  '+
'                        <div class="header">'+
'                                <img src="https://cloud.selectmedia.asia/static/v6-desktop-0301/images/header_top.jpg" />'+
'                                <img src="https://cloud.selectmedia.asia/static/v6-desktop-0301/images/header_small.jpg" />'+
'                            </div>'+
'        '+
'                            <div class="main" style="background:none; position:relative">'+
'                                <div class="article_main">'+
'                                <img src="https://cloud.selectmedia.asia/static/v6-desktop-0301/images/main_block1.jpg" style="margin-bottom:20px" />'+
'        '+
'                                <div id="aniAnimation" class="aniAnimationOpen"><div id="aniviewBox"><div id="aniplayer"></div></div></div>'+
'        '+
'                                <img src="https://cloud.selectmedia.asia/static/v6-desktop-0301/images/main_block2.jpg" style="margin-top:20px" />'+
'                                </div>'+
'                                <div class="article_sidebar" style="border-left:1px solid #ddd; border-right:1px solid #ddd; position:absolute; top:0; right:0; height:100%">'+
'                                <img src="https://cloud.selectmedia.asia/static/v6-desktop-0301/images/sidebar_article.jpg" />'+
'                                </div>'+
'                            </div>'+
'        '+
'                            <div class="footer"><img src="https://cloud.selectmedia.asia/static/v6-desktop-0301/images/footer.jpg" />'+
'                            </div>'+
'                '+
'                </div>'+
'            </div>'+
'    </div> ';
	

formHeaderCtn.insertAdjacentHTML('beforebegin', html);

var formContent = document.getElementById("comp-jitywdkn");
var footer = document.getElementById("SITE_FOOTERinlineContent");
var arrowUp = document.getElementById('arrowUp');
var arrowDown = document.getElementById("arrowDown");
var accordionPanel = document.getElementById("panel");
var videosPrototypesCtn = document.getElementById('videosPrototypesCtn');

document.getElementById('comp-jjsesgf6').setAttribute('style', 'display: none;');
formHeaderCtn.style.top = '870px';
formContent.style.top = '898px';
footer.style.top = '663px';

var isAccordionOpen = false;

window.toggleAccordion = function() {
    isAccordionOpen = !isAccordionOpen;

    if(isAccordionOpen) {
        accordionPanel.style.display = 'block';
        arrowUp.style.display = 'block';
        arrowDown.style.display = 'none';
        videosPrototypesCtn.style.top = ' 37%';
        formHeaderCtn.style.top = '1017px';
        formContent.style.top = '1047px';
        footer.style.top = '810px';

    } else {
        accordionPanel.style.display = 'none';
        arrowUp.style.display = 'none';
        arrowDown.style.display = 'block';
        formHeaderCtn.style.top = '870px';
        formContent.style.top = '898px';
        footer.style.top = '663px';
        videosPrototypesCtn.style.top = '23%';
    }
}

function openModal1(){
    document.getElementById("modal1").style.display = 'block';   

}
function closeModal1(){
    document.getElementById("modal1").style.display = 'none';   
}

function openModal2(){
    document.getElementById("modal2").style.display = 'block';   

}
function closeModal2(){
    document.getElementById("modal2").style.display = 'none';   
}
function openModal3(){
    document.getElementById("modal3").style.display = 'block';   

}
function closeModal3(){
    document.getElementById("modal3").style.display = 'none';   
}

 function openModal4(){
    document.getElementById("modal4").style.display = 'block';   

}
function closeModal4(){
    document.getElementById("modal4").style.display = 'none';   
}
function openModal5(){
    document.getElementById("modal5").style.display = 'block';   

}
function closeModal5(){
    document.getElementById("modal5").style.display = 'none';   
}
function openModal6(){
    document.getElementById("modal6").style.display = 'block';   

}
function closeModal6(){
    document.getElementById("modal6").style.display = 'none';   
}
