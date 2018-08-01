
 var link = document.createElement('link');
 link.rel = 'stylesheet';
 link.href = 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';
 document.head.appendChild(link);

var formHeaderCtn = document.getElementById("comp-jiudr4qr");
var html = '<div class="accordionCtn" style="min-height: 192px;min-width: 980px;left: 0px;width: 980px;position: absolute;margin-left: calc((100% - 1060px) * 0.5);'+
'    top: 142px;height: 192px;padding: 30px 40px;">'+
'        <div style="display:flex; flex-flow:row;cursor: pointer;width: 92%;border-color: rgba(51,51,51,0.2) !important;text-align: left!important;direction: ltr;'+
'        padding: 39px 0 15px 47px; font: normal normal bold 18px/22px poppins-extralight,poppins,sans-serif;line-height: 1.2em;font-size: 18px;color: rgba(0,0,0,1);"'+
'        onclick="toggleAccordion();">'+
'            <span style="display: flex; flex-flow: column">'+
'               <h2 style="padding-bottom: 10px;overflow: hidden; text-overflow: ellipsis; -webkit-box-orient: vertical; display: -webkit-box; -webkit-line-clamp: 3;font: normal normal bold 41px/51px poppins-semibold,poppins,sans-serif;color: rgba(48,48,48,1);">Your trusted partner</h2>'+
'               <span>SelectMedia works directly with some of the world&apos;s largest publishers. We value each client and We offer a full stack video solution and committed to your success...</span>'+
'            </span> '+
'            <i id="arrowDown" class="fa fa-angle-down" style="margin: 3.5% 0 0 2.5%;font-size: 21px;"></i>        '+
'            <i id="arrowUp" class="fa fa-angle-up" style="display:none;margin: 3.5% 0 0 2.5%;font-size: 21px;"></i>        '+
'        </div>'+
'        <div id="panel" style="display: none;width: 92%;border-color: rgba(51,51,51,0.2) !important;text-align: left!important;direction: ltr;padding: 0 0 15px 47px;'+
'        font: normal normal bold 18px/22px poppins-extralight,poppins,sans-serif;line-height: 1.2em;font-size: 18px;color: rgba(0,0,0,1);">'+
'                Optimization, CDN to host the video ad files (if needed) and Ad Server to manage the ads and maximize yield.'+
'        </div>'+
'        <div style="border-bottom: 1px solid lightgray;padding: 3px;width: 91%;margin-left: calc((100% - 899px) * 0.5);/* margin-left: 4%; */"></div>'+
'    </div>';

	
formHeaderCtn.insertAdjacentHTML('beforebegin', html);

var footer = document.getElementById("SITE_FOOTERinlineContent");
var arrowUp = document.getElementById('arrowUp');
var arrowDown = document.getElementById("arrowDown");
var accordionPanel = document.getElementById("panel");
var formContent = document.getElementById("comp-jitywdkn");

formHeaderCtn.style.top = '430px';
formContent.style.top = '463px';
footer.style.top = '205px';

var isAccordionOpen = false;

function toggleAccordion() {
    isAccordionOpen = !isAccordionOpen;

    if(isAccordionOpen) {
        accordionPanel.style.display = 'block';
        arrowUp.style.display = 'block';
        arrowDown.style.display = 'none';
        formHeaderCtn.style.top = '490px';
        formContent.style.top = '527px';
        footer.style.top = '265px';

    } else {
        accordionPanel.style.display = 'none';
        arrowUp.style.display = 'none';
        arrowDown.style.display = 'block';
        formHeaderCtn.style.top = '430px';
        formContent.style.top = '463px';
        footer.style.top = '205px';
    }
}