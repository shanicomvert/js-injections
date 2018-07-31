
 var link = document.createElement('link');
 link.rel = 'stylesheet';
 link.href = 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';
 document.head.appendChild(link);

var formHeader = document.getElementById("comp-jiudr4qr");
var html = '<div class="accordionCtn" style="min-height: 192px;min-width: 980px;left: 0px;width: 980px;position: absolute;margin-left: calc((100% - 1060px) * 0.5);'+
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
'            <i id="arrowUp" class="fa fa-angle-up" style="margin: 1.2% 0 0 2.5%;font-size: 21px;"></i>        '+
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
'    <div id="videosPrototypesCtn" class="videosPrototypesCtn" style="text-align: center; position: absolute; display: flex; flex-flow:  column; width: 100%;top:23%;">'+
'        <h2 style="margin: 2% 0; font: normal normal bold 41px/51px poppins-semibold,poppins,sans-serif;color: rgba(48,48,48,1);">Our Video Solution</h2>'+
'        <div class="videosPrototypesFlex" style="display: flex;flex-wrap: wrap;width: 50%;height: auto;margin: 0 25%;">'+
'            <div class="videoPrototype" style="flex: 0 33.33333333%;">'+
'                <img style="width: 100%;" src="https://static.wixstatic.com/media/e1e28f_d11c68afd4fa4387b627eebbc9dfef48~mv2_d_6129_3689_s_4_2.png/v1/fill/w_646,h_382,al_c,usm_0.66_1.00_0.01/e1e28f_d11c68afd4fa4387b627eebbc9dfef48~mv2_d_6129_3689_s_4_2.png" alt="">'+
'                <h6 class="font_6" style="text-align:center;">In-Content</h6>'+
'                <a href="http://cloud.selectmedia.asia/static/v6-desktop-0301/incontent/index.html">'+
'                    <span style="font-size: 21px;font-weight: bold;">Watch Demo</span>'+
'                </a>'+
'            </div>'+
'            <div class="videoPrototype" style="flex: 0 33.33333333%;">'+
'                <img style="width: 100%;" src="https://static.wixstatic.com/media/e1e28f_3cf7b20c31ed4e6d9e6a5ff117cfebf8~mv2_d_6129_3689_s_4_2.png/v1/crop/x_0,y_32,w_6129,h_3624/fill/w_646,h_382,al_c,usm_0.66_1.00_0.01/e1e28f_3cf7b20c31ed4e6d9e6a5ff117cfebf8~mv2_d_6129_3689_s_4_2.png" alt="">'+
'                <h6 class="font_6" style="text-align:center;">Fixed Playlist</h6>'+
'                <a href="http://cloud.selectmedia.asia/static/v6-desktop-0301/playlist-fixed/index.html">'+
'                    <span style="font-size: 21px;font-weight: bold;">Watch Demo</span>'+
'                </a>'+
'            </div>'+
'            <div class="videoPrototype" style="flex: 0 33.33333333%;">'+
'                <img style="width: 100%;" src="https://static.wixstatic.com/media/e1e28f_7f5c8cacf21f4725865602eaddc0153a~mv2_d_6129_3689_s_4_2.png/v1/crop/x_0,y_32,w_6129,h_3624/fill/w_646,h_380,al_c,usm_0.66_1.00_0.01/e1e28f_7f5c8cacf21f4725865602eaddc0153a~mv2_d_6129_3689_s_4_2.png" alt="">'+
'                <h6 class="font_6" style="text-align:center;">Slider Playlist</h6>'+
'                <a href="http://cloud.selectmedia.asia/static/v6-desktop-0301/playlist-slider/index.html">'+
'                    <span style="font-size: 21px;font-weight: bold;">Watch Demo</span>'+
'                </a>'+
'            </div>'+
'            <div class="videoPrototype" style="flex: 0 33.33333333%;margin-top: 2%;">'+
'                <img style="width: 100%;" src="https://static.wixstatic.com/media/e1e28f_745c106a4a5447348e75dbc7d2a894bf~mv2_d_6129_3689_s_4_2.png/v1/crop/x_0,y_32,w_6129,h_3624/fill/w_646,h_380,al_c,usm_0.66_1.00_0.01/e1e28f_745c106a4a5447348e75dbc7d2a894bf~mv2_d_6129_3689_s_4_2.png" alt="">'+
'                <h6 class="font_6" style="text-align:center;">Brand Header</h6>'+
'                <a href="http://cloud.selectmedia.asia/static/v6-desktop-0301/branded-header/index.html">'+
'                    <span style="font-size: 21px;font-weight: bold;">Watch Demo</span>'+
'                </a>'+
'            </div>'+
'            <div class="videoPrototype" style="flex: 0 33.33333333%;margin-top: 2%;">'+
'                <img style="width: 100%;" src="https://static.wixstatic.com/media/e1e28f_66103d24b78540ec976a5dcc75789ef5~mv2_d_6129_3689_s_4_2.png/v1/crop/x_0,y_32,w_6129,h_3624/fill/w_646,h_382,al_c,usm_0.66_1.00_0.01/e1e28f_66103d24b78540ec976a5dcc75789ef5~mv2_d_6129_3689_s_4_2.png" alt="">'+
'                <h6 class="font_6" style="text-align:center;">Overlay</h6>'+
'                <a href="http://cloud.selectmedia.asia/static/v6-desktop-0301/overlay/index.html">'+
'                    <span style="font-size: 21px;font-weight: bold;">Watch Demo</span>'+
'                </a>'+
'            </div>'+
'            <div class="videoPrototype" style="flex: 0 33.33333333%;margin-top: 2%;">'+
'                <img style="width: 100%;" src="https://static.wixstatic.com/media/e1e28f_b0d9fa774386480192fab82a28df6543~mv2_d_6129_3689_s_4_2.png/v1/crop/x_0,y_32,w_6129,h_3624/fill/w_646,h_380,al_c,usm_0.66_1.00_0.01/e1e28f_b0d9fa774386480192fab82a28df6543~mv2_d_6129_3689_s_4_2.png" alt="">'+
'                <h6 class="font_6" style="text-align:center;">Bottom Sticky</h6>'+
'                <a href="http://cloud.selectmedia.asia/static/v6-desktop-0301/bottom-sticky/index.html">'+
'                    <span style="font-size: 21px;font-weight: bold;">Watch Demo</span>'+
'                </a>'+
'            </div>'+
'        </div>'+
'    </div>';
	

formHeader.insertAdjacentHTML('beforebegin', html);

var formContent = document.getElementById("comp-jitywdkn");
var footer = document.getElementById("SITE_FOOTERinlineContent");
var arrowUp = document.getElementById('arrowUp');
var arrowDown = document.getElementById("arrowDown");
var accordionPanel = document.getElementById("panel");
var videosPrototypesCtn = document.getElementById('videosPrototypesCtn');

document.getElementById('comp-jjsesgf6').setAttribute('style', 'display: none;');
formHeader.setAttribute('style', 'left: 33px;width: 746px;position: absolute;margin-left: calc((100% - 980px) * 0.5);top:788px;');
formContent.setAttribute('style', 'left: 1px; width: 882px; position: absolute; margin-left: calc((100% - 980px) * 0.5); top: 823px; height: 684px;');
footer.setAttribute('style', 'position: absolute;top:545px;');
arrowUp.setAttribute('style', 'display: none;');


var isAccordionOpen = false;

function toggleAccordion() {
    isAccordionOpen = !isAccordionOpen;

    if(isAccordionOpen) {
        accordionPanel.setAttribute('style', 'display:block;order-color: rgba(51,51,51,0.2) !important;text-align: left!important;direction: ltr;padding: 4px 0 15px 47px;font: normal normal bold 18px/22px poppins-extralight,poppins,sans-serif;line-height: 1.2em;font-size: 18px;color: rgba(0,0,0,1);');
        arrowUp.setAttribute('style', 'display:block;margin: 1.2% 0 0 2.5%;font-size: 21px;');
        arrowDown.setAttribute('style', 'display:none;margin: 1.2% 0 0 2.5%;font-size: 21px;');
        videosPrototypesCtn.setAttribute('style', 'text-align: center; position: absolute; display: flex; flex-flow:  column; width: 100%;top: 37%;')
        formHeader.setAttribute('style', 'left: 33px;width: 746px;position: absolute;margin-left: calc((100% - 980px) * 0.5);top: 920px;');
        formContent.setAttribute('style', 'left: 1px; width: 882px; position: absolute; margin-left: calc((100% - 980px) * 0.5); top: 955px; height: 684px;');
        footer.setAttribute('style', 'position: absolute; top:690px;');

    } else {
        accordionPanel.setAttribute('style', 'display:none;')
        arrowUp.setAttribute('style', 'display:none;margin: 1.2% 0 0 2.5%;font-size: 21px;');
        arrowDown.setAttribute('style', 'display:block;margin: 1.2% 0 0 2.5%;font-size: 21px;');
        formHeader.setAttribute('style', 'left: 33px;width: 746px;position: absolute;margin-left: calc((100% - 980px) * 0.5);top:788px;');
        formContent.setAttribute('style', 'left: 1px; width: 882px; position: absolute; margin-left: calc((100% - 980px) * 0.5); top:823px; height: 684px;');
        footer.setAttribute('style', 'position: absolute;top:545px;'); 
        videosPrototypesCtn.setAttribute('style', 'text-align: center; position: absolute; display: flex; flex-flow:  column; width: 100%;top: 23%;');
    }
}