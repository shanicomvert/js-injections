var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';
document.head.appendChild(link);

var formHeaderCtn = document.getElementById("comp-jiudr4qr");
var html =  '<div style="min-height: 192px;min-width: 980px;left: 0px;width: 1020px;position: absolute;margin-left: calc((100% - 1060px) * 0.5);'+
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
'    top: 250px;height: 192px;padding: 30px 40px;">'+
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
'    top:410px;height: 192px;padding: 30px 40px;">'+
'        <div style="display:flex; flex-flow:row;cursor: pointer;width: 92%;border-color: rgba(51,51,51,0.2) !important;text-align: left!important;direction: ltr;'+
'        padding: 0 0 15px 47px; font: normal normal bold 18px/22px poppins-extralight,poppins,sans-serif;line-height: 1.2em;font-size: 18px;color: rgba(0,0,0,1);"'+
'        onclick="toggleAccordion(\'second\');">'+
'            <span style="display: flex; flex-flow: column">'+
'               <h2 style="text-align: center;padding-bottom: 23px;overflow: hidden; text-overflow: ellipsis; -webkit-box-orient: vertical; display: -webkit-box; -webkit-line-clamp: 3;font: normal normal bold 41px/51px poppins-semibold,poppins,sans-serif;color: rgba(48,48,48,1);">Learn more about Outstream solutions</h2>'+
'               <span>SelectMedia offers a complete video advertising SSP solution which will enable advertisers to monitor campaigns and their yields in terms of effective campaign - per - mille impressions...</span>'+
'            </span> '+
'            <i id="secondArrowDown" class="fa fa-angle-down" style="margin: 3.5% 0 0 2.5%;font-size: 21px;"></i>        '+
'            <i id="secondArrowUp" class="fa fa-angle-up" style="display:none;margin: 3.5% 0 0 2.5%;font-size: 21px;"></i>        '+
'        </div>'+
'        <div id="secondPanel" style="display: none;width: 92%;border-color: rgba(51,51,51,0.2) !important;text-align: left!important;direction: ltr;padding: 0 0 15px 47px;'+
'        font: normal normal bold 18px/22px poppins-extralight,poppins,sans-serif;line-height: 1.2em;font-size: 18px;color: rgba(0,0,0,1);">'+
'               SelectMedia’s interface dashboard has an influential real - time platform which allows users to monitor their impact levels across different platforms and campaigns all from one central location.'+
'        </div>'+
'        <div style="border-bottom: 1px solid lightgray;padding: 3px;width: 91%;margin-left: calc((100% - 899px) * 0.5);/* margin-left: 4%; */"></div>'+
'    </div>'+
'<div id="thirdAccordionCtn" class="accordionCtn" style="min-height: 192px;min-width: 980px;left: 0px;width: 980px;position: absolute;margin-left: calc((100% - 1060px) * 0.5);'+
'    top:572px;height: 192px;padding: 30px 40px;">'+
'        <div style="display:flex; flex-flow:row;cursor: pointer;width: 92%;border-color: rgba(51,51,51,0.2) !important;text-align: left!important;direction: ltr;'+
'        padding: 0 0 15px 47px; font: normal normal bold 18px/22px poppins-extralight,poppins,sans-serif;line-height: 1.2em;font-size: 18px;color: rgba(0,0,0,1);"'+
'        onclick="toggleAccordion(\'third\');">'+
'            <span style="display: flex; flex-flow: column">'+
'               <h2 style="text-align: center;padding-bottom: 23px;overflow: hidden; text-overflow: ellipsis; -webkit-box-orient: vertical; display: -webkit-box; -webkit-line-clamp: 3;font: normal normal bold 41px/51px poppins-semibold,poppins,sans-serif;color: rgba(48,48,48,1);">Learn more about technology</h2>'+
'               <span>The technology powering our mobile growth and full - stack video platform is what sets SelectMedia apart. Our custom technology stack is optimized from the ground up for video and...</span>'+
'            </span> '+
'            <i id="thirdArrowDown" class="fa fa-angle-down" style="margin: 3.5% 0 0 2.5%;font-size: 21px;"></i>        '+
'            <i id="thirdArrowUp" class="fa fa-angle-up" style="display:none;margin: 3.5% 0 0 2.5%;font-size: 21px;"></i>        '+
'        </div>'+
'        <div id="thirdPanel" style="display: none;width: 92%;border-color: rgba(51,51,51,0.2) !important;text-align: left!important;direction: ltr;padding: 0 0 15px 47px;'+
'        font: normal normal bold 18px/22px poppins-extralight,poppins,sans-serif;line-height: 1.2em;font-size: 18px;color: rgba(0,0,0,1);">'+
'               mobile, applying a sophisticated set of analytical tools and predictive algorithms to target, deliver and optimize every impression with extreme precision.'+
'        </div>'+
'        <div style="border-bottom: 1px solid lightgray;padding: 3px;width: 91%;margin-left: calc((100% - 899px) * 0.5);/* margin-left: 4%; */"></div>'+
'    </div>';

var innerHtml = '<div id="joinus3steps" style="margin-left: calc((100% - 808px) * 0.5);font-size: 18px;">'+
'        <div style="transform: rotate(270deg);position: absolute;top: 31px;font-size: 26px;font-weight: bold;margin-left: 6px;">Join us</div>'+
'        <div style="display:flex; flex-flow:row;margin-left: 79px;">'+
'            <div style="border:1px solid black;margin-right: 5px;padding: 10px; background: #e1c1c0; color: #4c4949;;"><span style="font-size: 25px;">1</span></br>COPMLETE</br>THE FORM</div>'+
'            <div style="border:1px solid black;margin-right: 5px;padding: 10px;background: #b1544e;color:white;"><span style="font-size: 25px;">2</span></br>WE WILL CONTACT</br>YOU SHORTLY</div>'+
'            <div style="border:1px solid black;padding: 10px;background:#902727;color:white;"><span style="font-size: 25px;">3</span></br>PULL OUR CODE AND</br>START EARNING</div>'+
'        </div>'+
'    </div>';
	
formHeaderCtn.innerHTML = innerHtml;

formHeaderCtn.insertAdjacentHTML('beforebegin', html);

var footer = document.getElementById("SITE_FOOTERinlineContent");
var arrowUp = document.getElementById('arrowUp');
var arrowDown = document.getElementById("arrowDown");
var accordionPanel = document.getElementById("panel");
var secondArrowUp = document.getElementById('secondArrowUp');
var secondArrowDown = document.getElementById("secondArrowDown");
var secondAccordionPanel = document.getElementById("secondPanel");
var thirdArrowUp = document.getElementById('thirdArrowUp');
var thirdArrowDown = document.getElementById("thirdArrowDown");
var thirdAccordionPanel = document.getElementById("thirdPanel");
var formContent = document.getElementById("comp-jitywdkn");
var secondAccordionCtn = document.getElementById('secondAccordionCtn');
var thirdAccordionCtn = document.getElementById('thirdAccordionCtn');

formHeaderCtn.style.top = '775px';
formContent.style.top = '883px';
footer.style.top = '485px';
document.getElementById('comp-jjsesgf6').style.display = 'none';

var isFirstAccordionOpen = false;
var isSecondAccordionOpen = false;
var isThirdAccordionOpen = false;

window.toggleAccordion = function(accordion) {

    if(accordion == 'first') {
        isFirstAccordionOpen = !isFirstAccordionOpen;
    } else if(accordion == 'second') {
        isSecondAccordionOpen = !isSecondAccordionOpen;
    }
    else {
        isThirdAccordionOpen = !isThirdAccordionOpen;
    }



    if(isFirstAccordionOpen && isSecondAccordionOpen && isThirdAccordionOpen){
        formHeaderCtn.style.top = '1018px';
        formContent.style.top = '1119px';
        footer.style.top = '725px';
        secondAccordionCtn.style.top = '539px';
        thirdAccordionCtn.style.top = '758px';
        accordionPanel.style.display = 'block';
        arrowUp.style.display = 'block';
        arrowDown.style.display = 'none';
        secondAccordionPanel.style.display = 'block';
        secondArrowUp.style.display = 'block';
        secondArrowDown.style.display = 'none';
        thirdAccordionPanel.style.display = 'block';
        thirdArrowUp.style.display = 'block';
        thirdArrowDown.style.display = 'none';
    }else if(!isFirstAccordionOpen && !isSecondAccordionOpen && !isThirdAccordionOpen){
        formHeaderCtn.style.top = '775px';
        formContent.style.top = '883px';
        footer.style.top = '485px';
        secondAccordionCtn.style.top = '410px';
        thirdAccordionCtn.style.top = '572px';
        accordionPanel.style.display = 'none';
        arrowUp.style.display = 'none';
        arrowDown.style.display = 'block';
        secondAccordionPanel.style.display = 'none';
        secondArrowUp.style.display = 'none';
        secondArrowDown.style.display = 'block';
        thirdAccordionPanel.style.display = 'none';
        thirdArrowUp.style.display = 'none';
        thirdArrowDown.style.display = 'block';
    }else if(isFirstAccordionOpen && isSecondAccordionOpen && !isThirdAccordionOpen){
        formHeaderCtn.style.top = '962px';
        formContent.style.top = '1067px';
        footer.style.top = '680px';
        secondAccordionCtn.style.top = '538px';
        thirdAccordionCtn.style.top = '758px';
        accordionPanel.style.display = 'block';
        arrowUp.style.display = 'block';
        arrowDown.style.display = 'none';
        secondAccordionPanel.style.display = 'block';
        secondArrowUp.style.display = 'block';
        secondArrowDown.style.display = 'none';
        thirdArrowUp.style.display = 'none';
        thirdArrowDown.style.display = 'block';
        thirdAccordionPanel.style.display = 'none';
    } else if(isFirstAccordionOpen && !isSecondAccordionOpen && !isThirdAccordionOpen) {
        formHeaderCtn.style.top = '897px';
        formContent.style.top = '1000px';
        footer.style.top = '610px';
        secondAccordionCtn.style.top = '535px';
        thirdAccordionCtn.style.top = '695px';
        accordionPanel.style.display = 'block';
        arrowUp.style.display = 'block';
        arrowDown.style.display = 'none';
        secondAccordionPanel.style.display = 'none';
        secondArrowUp.style.display = 'none';
        secondArrowDown.style.display = 'block';
        thirdAccordionPanel.style.display = 'none';
        thirdArrowUp.style.display = 'none';
        thirdArrowDown.style.display = 'block';
    }else if(!isFirstAccordionOpen && isSecondAccordionOpen && !isThirdAccordionOpen) {
        formHeaderCtn.style.top = '840px';
        formContent.style.top = '943px';
        footer.style.top = '565px';
        secondAccordionCtn.style.top = '415px';
        thirdAccordionCtn.style.top = '638px';
        accordionPanel.style.display = 'none';
        arrowUp.style.display = 'none';
        arrowDown.style.display = 'block';
        secondAccordionPanel.style.display = 'block';
        secondArrowUp.style.display = 'block';
        secondArrowDown.style.display = 'none';
        thirdAccordionPanel.style.display = 'none';
        thirdArrowUp.style.display = 'none';
        thirdArrowDown.style.display = 'block';
    }else if(!isFirstAccordionOpen && !isSecondAccordionOpen && isThirdAccordionOpen) {
        formHeaderCtn.style.top = '840px';
        formContent.style.top = '943px';
        footer.style.top = '565px';
        secondAccordionCtn.style.top = '415px';
        thirdAccordionCtn.style.top = '580px';
        accordionPanel.style.display = 'none';
        arrowUp.style.display = 'none';
        arrowDown.style.display = 'block';
        secondAccordionPanel.style.display = 'none';
        secondArrowUp.style.display = 'none';
        secondArrowDown.style.display = 'block';
        thirdAccordionPanel.style.display = 'block';
        thirdArrowUp.style.display = 'block';
        thirdArrowDown.style.display = 'none';
    }else if(!isFirstAccordionOpen && isSecondAccordionOpen && isThirdAccordionOpen) {
        formHeaderCtn.style.top = '897px';
        formContent.style.top = '998px';
        footer.style.top = '612px';
        secondAccordionCtn.style.top = '415px';
        thirdAccordionCtn.style.top = '635px';
        accordionPanel.style.display = 'none';
        arrowUp.style.display = 'none';
        arrowDown.style.display = 'block';
        secondAccordionPanel.style.display = 'block';
        secondArrowUp.style.display = 'block';
        secondArrowDown.style.display = 'none';
        thirdAccordionPanel.style.display = 'block';
        thirdArrowUp.style.display = 'block';
        thirdArrowDown.style.display = 'none';
    }else if(isFirstAccordionOpen && !isSecondAccordionOpen && isThirdAccordionOpen) {
        formHeaderCtn.style.top = '967px';
        formContent.style.top = '1070px';
        footer.style.top = '695px';
        secondAccordionCtn.style.top = '540px';
        thirdAccordionCtn.style.top = '705px';
        accordionPanel.style.display = 'block';
        arrowUp.style.display = 'block';
        arrowDown.style.display = 'none';
        secondAccordionPanel.style.display = 'none';
        secondArrowUp.style.display = 'none';
        secondArrowDown.style.display = 'block';
        thirdAccordionPanel.style.display = 'block';
        thirdArrowUp.style.display = 'block';
        thirdArrowDown.style.display = 'none';
    }
}