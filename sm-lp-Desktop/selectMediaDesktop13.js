
 var link = document.createElement('link');
 link.rel = 'stylesheet';
 link.href = 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';
 document.head.appendChild(link);

var formHeaderCtn = document.getElementById("comp-jiudr4qr");
var html = '<div class="accordionCtn" style="min-height: 192px;min-width: 980px;left: 0px;width: 980px;position: absolute;margin-left: calc((100% - 1060px) * 0.5);'+
'    top: 10px;height: 192px;padding: 30px 40px;">'+
'        <div style="text-align: center; width: calc(100% - 35px);">'+
'            <h2 style="overflow: hidden; text-overflow: ellipsis; -webkit-box-orient: vertical; display: -webkit-box; -webkit-line-clamp: 3;font: normal normal bold 41px/51px poppins-semibold,poppins,sans-serif;color: rgba(48,48,48,1);">Exceptional Value for Publishers</h2>'+
'        </div>'+
'        <div style="display:flex; flex-flow:row;cursor: pointer;width: 92%;border-color: rgba(51,51,51,0.2) !important;text-align: left!important;direction: ltr;'+
'        padding: 23px 0 15px 47px; font: normal normal bold 18px/22px poppins-extralight,poppins,sans-serif;line-height: 1.2em;font-size: 18px;color: rgba(0,0,0,1);"'+
'        onclick="toggleAccordion(\'first\');">'+
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
'<div id="secondAccordionCtn" class="accordionCtn" style="min-height: 192px;min-width: 980px;left: 0px;width: 980px;position: absolute;margin-left: calc((100% - 1060px) * 0.5);'+
'    top:186px;height: 192px;padding: 30px 40px;">'+
'        <div style="display:flex; flex-flow:row;cursor: pointer;width: 92%;border-color: rgba(51,51,51,0.2) !important;text-align: left!important;direction: ltr;'+
'        padding: 0 0 15px 47px; font: normal normal bold 18px/22px poppins-extralight,poppins,sans-serif;line-height: 1.2em;font-size: 18px;color: rgba(0,0,0,1);"'+
'        onclick="toggleAccordion(\'second\');">'+
'            <span style="display: flex; flex-flow: column">'+
'               <h2 style="text-align: center;padding-bottom: 23px;overflow: hidden; text-overflow: ellipsis; -webkit-box-orient: vertical; display: -webkit-box; -webkit-line-clamp: 3;font: normal normal bold 41px/51px poppins-semibold,poppins,sans-serif;color: rgba(48,48,48,1);">Learn more about technology</h2>'+
'               <span>The technology powering our mobile growth and full - stack video platform is what sets SelectMedia apart. Our custom technology stack is optimized from the ground up for video and...</span>'+
'            </span> '+
'            <i id="secondArrowDown" class="fa fa-angle-down" style="margin: 3.5% 0 0 2.5%;font-size: 21px;"></i>        '+
'            <i id="secondArrowUp" class="fa fa-angle-up" style="display:none;margin: 3.5% 0 0 2.5%;font-size: 21px;"></i>        '+
'        </div>'+
'        <div id="secondPanel" style="display: none;width: 92%;border-color: rgba(51,51,51,0.2) !important;text-align: left!important;direction: ltr;padding: 0 0 15px 47px;'+
'        font: normal normal bold 18px/22px poppins-extralight,poppins,sans-serif;line-height: 1.2em;font-size: 18px;color: rgba(0,0,0,1);">'+
'               mobile, applying a sophisticated set of analytical tools and predictive algorithms to target, deliver and optimize every impression with extreme precision.'+
'        </div>'+
'        <div style="border-bottom: 1px solid lightgray;padding: 3px;width: 91%;margin-left: calc((100% - 899px) * 0.5);/* margin-left: 4%; */"></div>'+
'    </div>';

	
formHeaderCtn.insertAdjacentHTML('beforebegin', html);

var footer = document.getElementById("SITE_FOOTERinlineContent");
var arrowUp = document.getElementById('arrowUp');
var arrowDown = document.getElementById("arrowDown");
var accordionPanel = document.getElementById("panel");
var secondArrowUp = document.getElementById('secondArrowUp');
var secondArrowDown = document.getElementById("secondArrowDown");
var secondAccordionPanel = document.getElementById("secondPanel");
var formContent = document.getElementById("comp-jitywdkn");
var secondAccordionCtn = document.getElementById('secondAccordionCtn');

formHeaderCtn.style.top = '380px';
formContent.style.top = '412px';
footer.style.top = '190px';
document.getElementById('comp-jjsesgf6').style.display = 'none';

var isFirstAccordionOpen = false;
var isSecondAccordionOpen = false;

window.toggleAccordion = function(accordion) {
    accordion == 'first' ? isFirstAccordionOpen = !isFirstAccordionOpen : isSecondAccordionOpen = !isSecondAccordionOpen;

    if(isFirstAccordionOpen && isSecondAccordionOpen) {
        accordionPanel.style.display = 'block';
        arrowUp.style.display = 'block';
        arrowDown.style.display = 'none';
        secondAccordionPanel.style.display = 'block';
        secondArrowUp.style.display = 'block';
        secondArrowDown.style.display = 'none';
        formHeaderCtn.style.top = '595px';
        formContent.style.top = '630px';
        footer.style.top = '400px';
        secondAccordionCtn.style.top = '314px';

    } else if(isFirstAccordionOpen || isSecondAccordionOpen) {
       if(isFirstAccordionOpen){
            accordionPanel.style.display = 'block';
            arrowUp.style.display = 'block';
            arrowDown.style.display = 'none';
            secondAccordionCtn.style.top = '313px';
            formHeaderCtn.style.top = '508px';
            formContent.style.top = '540px';
            footer.style.top = '308px';
            secondArrowUp.style.display = 'none';
            secondAccordionPanel.style.display = 'none';
            secondArrowDown.style.display = 'block';
       } else{
            secondAccordionPanel.style.display = 'block';
             secondAccordionCtn.style.top = '186px';
            accordionPanel.style.display = 'none';
            secondArrowUp.style.display = 'block';
            secondArrowDown.style.display = 'none';
            formHeaderCtn.style.top = '460px';
            formContent.style.top = '495px';
            footer.style.top = '270px';
            accordionPanel.style.display = 'none';
            arrowUp.style.display = 'none';
            arrowDown.style.display = 'block';
       }
     
    } else {
        accordionPanel.style.display = 'none';
        arrowUp.style.display = 'none';
        arrowDown.style.display = 'block';
        secondAccordionPanel.style.display = 'none';
        secondArrowUp.style.display = 'none';
        secondArrowDown.style.display = 'block';
        formHeaderCtn.style.top = '380px';
        formContent.style.top = '412px';
        footer.style.top = '190px';
        secondAccordionCtn.style.top = '186px';
    }
}