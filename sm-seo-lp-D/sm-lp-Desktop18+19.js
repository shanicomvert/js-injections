var elem = document.getElementById('accordion');
elem.parentNode.removeChild(elem);
elem = document.getElementById('joinus3steps');
elem.parentNode.removeChild(elem);

var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';
document.head.appendChild(link);

var formHeaderCtn = document.getElementById("comp-jiudr4qr");
formHeaderCtn.innerHTML = '<h3 class="font_3"><span style="color: #1b91ec;font-size: 37px;font-weight: bold;">Start earning today</span></h3>';

var html = '<div style="min-height: 192px;min-width: 980px;left: 0px;width: 1020px;position: absolute;margin-left: calc((100% - 1060px) * 0.5);'+
'    top: 10px;height: 192px;padding: 30px 40px;">'+
'           <div style="text-align: center; width: calc(100% - 35px);">'+
'            <h2 style="overflow: hidden; text-overflow: ellipsis; -webkit-box-orient: vertical; display: -webkit-box; -webkit-line-clamp: 3;font: normal normal bold 41px/51px poppins-semibold,poppins,sans-serif;color: rgba(48,48,48,1);">Why SelectMedia&apos;s Video Monetization?</h2>'+
'        </div>'+
'<div style="display:flex; flex-flow:row;">'+
'<ul style="list-style-type=none;width: 10px;;border-color: rgba(51,51,51,0.2) !important;text-align: left!important;direction: ltr;'+
'        padding: 39px 0 15px 38px; font: normal normal bold 18px/22px poppins-extralight,poppins,sans-serif;line-height: 1.2em;font-size: 18px;color: rgba(0,0,0,1);">'+
'        <li>'+
'            <i class="fa fa-check fa-2x"></i>'+
'        </li>'+
'        <li>'+
'            <i class="fa fa-check fa-2x"></i>'+
'        </li>'+
'        <li>'+
'            <i class="fa fa-check fa-2x"></i>'+
'        </li>'+
'    </ul>'+
'    <ul style="list-style-type=none;width: 92%;border-color: rgba(51,51,51,0.2) !important;text-align: left!important;direction: ltr;'+
'        padding: 46px 0 0 35px; font: normal normal bold 18px/22px poppins-extralight,poppins,sans-serif;line-height: 1.2em;font-size: 18px;color: rgba(0,0,0,1);">'+
'        <li style="position: absolute;top: 128px;">'+
'            <span>Artificial Intelligence (to identify the best probability, price and audience match for each impression)</span>'+
'        </li>'+
'        <li>'+
'            <span style="position: absolute;top: 163px;">Data (used to determine the optimal bidding strategy for every campaign)</span>'+
'        </li>'+
'        <li>'+
'            <span style="position: absolute;top: 198px;">VGT (real-time anti-fraud detection technology)</span>'+
'        </li>'+
'    </ul>'+
'</div>'+
'<div style="border-bottom: 1px solid lightgray;padding: 3px;width: 91%;margin-left:calc((100% - 926px) * 0.5);/* margin-left: 4%; */"></div>'+
'</div>'+
'<div class="accordionCtn" style="min-height: 192px;min-width: 980px;left: 0px;width: 980px;position: absolute;margin-left: calc((100% - 1060px) * 0.5);'+
'    top: 260px;height: 192px;padding: 30px 40px;">'+
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
'    </div>';

formHeaderCtn.insertAdjacentHTML('beforebegin', html);


// var footer = document.getElementById("SITE_FOOTERinlineContent");
var arrowUp = document.getElementById('arrowUp');
var arrowDown = document.getElementById("arrowDown");
var accordionPanel = document.getElementById("panel");
var formContent = document.getElementById("comp-jitywdkn");
var footer = document.getElementById("SITE_FOOTERinlineContent");


document.getElementById('comp-jjsesgf6').style.display =  'none';
formHeaderCtn.style.top = '475px';
formContent.style.top = '522px';
footer.style.top = '135px';

var isAccordionOpen = false;

window.toggleAccordion = function() {
    isAccordionOpen = !isAccordionOpen;

    if(isAccordionOpen) {
        accordionPanel.style.display = 'block';
        arrowUp.style.display = 'block';
        arrowDown.style.display = 'none';
        formHeaderCtn.style.top = '602px';
        formContent.style.top = '648px';
        footer.style.top = '275px';

    } else {
        accordionPanel.style.display = 'none';
        arrowUp.style.display = 'none';
        arrowDown.style.display = 'block';
        formHeaderCtn.style.top = '475px';
        formContent.style.top = '522px';
        footer.style.top = '135px';
    }
}