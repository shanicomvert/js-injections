var elem = document.getElementById('accordion');
elem.parentNode.removeChild(elem);
elem = document.getElementById('joinus3steps');
elem.parentNode.removeChild(elem);

var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';
document.head.appendChild(link);

var formHeaderCtn = document.getElementById("comp-jiudr4qr");
formHeaderCtn.innerHTML = '<h3 class="font_3" style="font-size:21px;"><span style="font-size:21px;"><span class="color_15">please complete&nbsp;the following form and we’ll get back to you shortly.</span></span></h3>';

var formSubmitBtn = document.getElementById("comp-jitywe7w");
var html = '<div style="position: absolute; top: 576px; height: 42px; min-height: 32px; width: 400px; font-size:18px; left:270px">'+
'        <span>Do you need help?</br>Please feel free to'+
'            <a href="https://www.selectmedia.asia/contact-selectmedia" target="_blank" style="color: #A80303; border-bottom: #A80303">contact us</a>.'+
'        </span>'+
'    </div>';
formSubmitBtn.insertAdjacentHTML('afterend', html);


var html = '<div id="accordion" class="accordionCtn" style="min-height: 192px;min-width: 980px;left: 0px;width: 980px;position: absolute;margin-left: calc((100% - 1060px) * 0.5);'+
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
'    </div>';

formHeaderCtn.insertAdjacentHTML('beforebegin', html);

var arrowUp = document.getElementById('arrowUp');
var arrowDown = document.getElementById("arrowDown");
var accordionPanel = document.getElementById("panel");
var formContent = document.getElementById("comp-jitywdkn");
var footer = document.getElementById("SITE_FOOTERinlineContent");

document.getElementById('comp-jjsesgf6').style.display =  'none';
formHeaderCtn.style.top = '230px';
formContent.style.top = '263px';
footer.style.top = '0';

var isAccordionOpen = false;

window.toggleAccordion = function() {
    isAccordionOpen = !isAccordionOpen;

    if(isAccordionOpen) {
        accordionPanel.style.display = 'block';
        arrowUp.style.display = 'block';
        arrowDown.style.display = 'none';
        formHeaderCtn.style.top = '360px';
        formContent.style.top = '393px';
        footer.style.top = '150px';

    } else {
        accordionPanel.style.display = 'none';
        arrowUp.style.display = 'none';
        arrowDown.style.display = 'block';
        formHeaderCtn.style.top = '230px';
        formContent.style.top = '263px';
        footer.style.top = '0';
    }
}