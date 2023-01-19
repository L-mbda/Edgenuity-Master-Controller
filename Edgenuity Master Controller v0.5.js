// ==UserScript==
// @name         Edgenuity Master Controller v0.5
// @namespace    http://monks.net/
// @version      0.4
// @description  Edgenuity is killing us. So someone made an automatic next clicker, which was given major improvements by Hmelck and further improved by other members of the community subreddit. It was then update to 0.4, and moved on Github by XANADryden, with version 0.5 being moved onto another GitHub Repository by de-y. 0.5 is currently the best version to use for the Master Controller. VIVA LA RESISTANCE.
// @author        de-y on github or /u/_avdf on reddit, with other contributions from SubatomicMC, and with contributions to this project from: /u/Mrynot88 , /u/Turtlemower, and Hemlck and XANADryden
// @match        *://*.core.learn.edgenuity.com/*
// @match        https://student.edgenuity.com/*
// @grant        none
// ==/UserScript==


// If you want to look at more things like this, go to the subreddit at reddit.com/r/edgenuity.

// Note from DF.
// I just modified the v0.4 script to fit my need of speedrunning my entire language class backwards from the point of a locked assignment, that is only if I have a exam that requires a teacher to unlock. I also added the assignment unlocker by taking the code from SubatomicMC(sorry Subatomic). So yeah.

// ----- User Settings ----- //

var skip_speaking_intros = true;
// Default = true (If problems occur, try turning this off by replacing true with false)
// Description: This will allow the user to check boxes, complete assignments, or skip instructions as the speaker is talking as in the intro buttons.  If problems are occuring, try turning this off
// Bugs:
//
// May cause "Unable to load video file." error (You can change skip_speaking_intros if this problem occurs).  The program as of right now will just turn off the display of the error message that pops up.  I will look into fixing it

var is_auto_clicking = true;
// Default = true (If problems occur, try turning this off by replacing true with false)
// Description: This will automatically click the next button
// Bugs:
//
// Untested if left at false
// MAJOR: After Direct Instructions, it will get stuck in a loop at going to the next assignment.  This must be fixed!

var auto_click_direction = "forward";
// Default = forward (This direction for autoclick depends on if the is_auto_clicking setting is set to true).
// Description: This will change the auto click direction, from clicking the next button(forward), to clicking the previous button(back)
// Modes:
// Next is "forward", all lowercase,
// Previous is "back", all lowercase..
//
// Warnings:
//
// I would recommend to turn off the back mode if you are done with a particular section and then reloading the script.
// Bugs:
//
// Currently, there are no bugs.

var autodefi = true;
// Default = true (If problems occur, try turning this off by replacing true with false)
// Description: This will fill out textboxes for Vocabulary automatically using a method found by /u/Turtlemower.  The code for this part of the script was created by /u/Mrynot88 and has been greatly appreciated.
// Bugs:
//
// Currently, there are no bugs reported!

var prevent_inactive = true;
// Default = true (If problems occur, try turning this off by replacing true with false)
// Description: This will prevent inactivity emails and automatic logoff.  The code for this part of the script was created by XANADryden.
// Bugs:
//
// Doesn't yet work, TODO: Change element

var e;

function triggerEvent(el, type) {
                    if ('createEvent' in document) {
                        // modern browsers, IE9+
                        e = document.createEvent('HTMLEvents');
                        e.initEvent(type, false, true);
                        el.dispatchEvent(e);
                    } else {
                        // IE 8
                        e = document.createEventObject();
                        e.eventType = type;
                        el.fireEvent('on'+e.eventType, e);
                    }
                }

(function() {
    'use strict';

    // What is the following below?
    // It is the assignment unlocker posted by SubatomicMC, you just click on a locked assignment, and you can access it from there(Doesn't work on tests, quizzes & exams, like the actual assesment ones with the questions).
    var _0x788e=['href','98EZTFoN','1078293EqEPrr','substr','1685964VXeNlO','location','length','1jIzMrt','charAt','508661iODNEB','586hAwzQN','2983nUIiZh','log','substring','enrollment','getElementsByClassName','.core.learn.edgenuity.com/lmsapi/sle/api/enrollments/','14371Rbtenu','classList','onclick','ActivityTile-status-gated','split','setAttribute','contains','document.location=\x27','cookie','course-timeline','856299FQrWQR','indexOf','addedNodes','2996429VHlchH','is\x20timeline','//r','found\x20locked\x20button','/activity/','use\x20strict','Realm','https://student.edgenuity.com/enrollment/','parse','1XolTPP'];var _0x4a8c=function(_0x23f79d,_0x2149c1){_0x23f79d=_0x23f79d-0x143;var _0x788ebb=_0x788e[_0x23f79d];return _0x788ebb;};var _0x385481=_0x4a8c;(function(_0x44c24a,_0x2e0f51){var _0x55724c=_0x4a8c;while(!![]){try{var _0x3570c1=parseInt(_0x55724c(0x15a))*parseInt(_0x55724c(0x159))+parseInt(_0x55724c(0x156))*parseInt(_0x55724c(0x151))+-parseInt(_0x55724c(0x153))+-parseInt(_0x55724c(0x158))*-parseInt(_0x55724c(0x14e))+-parseInt(_0x55724c(0x150))*-parseInt(_0x55724c(0x160))+parseInt(_0x55724c(0x16a))+-parseInt(_0x55724c(0x145));if(_0x3570c1===_0x2e0f51)break;else _0x44c24a['push'](_0x44c24a['shift']());}catch(_0x561c2c){_0x44c24a['push'](_0x44c24a['shift']());}}}(_0x788e,0xdff08));var url,observerTimeout;_0x385481(0x14a);function readCookie(_0x578df2){var _0x1a5d0c=_0x385481,_0x3ab018=_0x578df2+'=',_0x4c88f8=document[_0x1a5d0c(0x168)][_0x1a5d0c(0x164)](';');for(var _0x3eb38f=0x0;_0x3eb38f<_0x4c88f8['length'];_0x3eb38f++){var _0x27bb4c=_0x4c88f8[_0x3eb38f];while(_0x27bb4c[_0x1a5d0c(0x157)](0x0)=='\x20')_0x27bb4c=_0x27bb4c[_0x1a5d0c(0x15c)](0x1,_0x27bb4c['length']);if(_0x27bb4c[_0x1a5d0c(0x143)](_0x3ab018)==0x0)return _0x27bb4c[_0x1a5d0c(0x15c)](_0x3ab018[_0x1a5d0c(0x155)],_0x27bb4c[_0x1a5d0c(0x155)]);}return null;}function checkURL(){var _0x1b5af0=_0x385481;url!=document[_0x1b5af0(0x154)][_0x1b5af0(0x14f)]&&(url=document[_0x1b5af0(0x154)][_0x1b5af0(0x14f)],clearTimeout(observerTimeout),console[_0x1b5af0(0x15b)]('url\x20changed'),url[_0x1b5af0(0x143)](_0x1b5af0(0x14c))!=-0x1&&(console[_0x1b5af0(0x15b)](_0x1b5af0(0x146)),tryToStartObserver()));}function tryToStartObserver(){var _0x2c41ac=_0x385481;if(document[_0x2c41ac(0x15e)](_0x2c41ac(0x169))['length']==0x0){setTimeout(tryToStartObserver,0x64),console[_0x2c41ac(0x15b)]('cant\x20find\x20timeline.\x20waiting');return;}var _0x323380=JSON[_0x2c41ac(0x14d)](readCookie('TokenData'))[_0x2c41ac(0x14b)]['toString'](),_0x4a5b7c=document['location'][_0x2c41ac(0x14f)],_0x24bed0=_0x4a5b7c[_0x2c41ac(0x143)](_0x2c41ac(0x15d))+0xb,_0x1097f7=_0x4a5b7c[_0x2c41ac(0x152)](_0x24bed0,0x24),_0x181334=_0x2c41ac(0x147)+(_0x323380[_0x2c41ac(0x155)]==0x1?'0':'')+_0x323380+_0x2c41ac(0x15f)+_0x1097f7+_0x2c41ac(0x149),_0x49355a=null;for(var _0x46c506 of document[_0x2c41ac(0x15e)](_0x2c41ac(0x163))){_0x46c506[_0x2c41ac(0x165)](_0x2c41ac(0x162),'document.location=\x27'+_0x181334+_0x46c506['id']+'\x27');}function _0x316519(_0x28f2db,_0x39380a){var _0x44da85=_0x2c41ac;for(const _0x50941a of _0x28f2db){for(var _0x4fba28 of _0x50941a[_0x44da85(0x144)]){(_0x4fba28[_0x44da85(0x161)][_0x44da85(0x166)](_0x44da85(0x163))||_0x4fba28[_0x44da85(0x161)][_0x44da85(0x166)]('ActivityTile-status-locked'))&&(console['log'](_0x44da85(0x148)),_0x49355a=_0x4fba28,_0x4fba28[_0x44da85(0x165)]('onclick',_0x44da85(0x167)+_0x181334+_0x4fba28['id']+'\x27'));}}}var _0x7a660e=new MutationObserver(_0x316519);_0x7a660e['observe'](document['getElementsByClassName'](_0x2c41ac(0x169))[0x0],{'attributes':![],'childList':!![],'subtree':!![]});}url=document['location'][_0x385481(0x14f)],setInterval(checkURL,0x64);url[_0x385481(0x143)](_0x385481(0x14c))!=-0x1&&tryToStartObserver();
/*

----- Developer Info -----
Built on top of the "edgenuity next clicker" which can be found at https://greasyfork.org/en/scripts/19842-edgenuity-next-clicker, and https://greasyfork.org/en/scripts/395567-edgenuity-master-controller-v0-3/code

This is open and is available for the public as long as it is not sold in any way or form, even if modified.

Any questions or any contact about the original program can be sent to joseph.tortorelli5@gmail.com or you can contact them on reddit with the username /u/hemlck
Any bugs or issues should go to https://github.com/XANADryden/Edgenuity-Master-Controller/issues
Any questions or any contact about the current version should go to dryden@bonnerclan.com
--- Program Info ---
variable "pageload" is set to an interval every 1 second (1000ms)

variable "current_frame" will only get the current frame if it has been completed.  It will not actually get the current frame.

variable "nextactivity" and "nextactivity_disabled" are for the next button on the bottom of the screen.  It will not only turn to the next acitivty, but also the next lesson if its after a quiz.

variable "alreadyPlayedCheck" is specific to the code for the auto-completion of the vocab.

variable "no_inactive" is set to an interval every 10 seconds (10000ms)

variable current_page is unused as of right now because of a bug
*/
    var pageload, nextclicker, nextslide_button, nextactivity, nextactivity_disabled, no_inactive;
    var current_frame;
    var current_frame_id;
    var alreadyPlayedCheck;
    var current_page;
    function loadpage() {
        if(skip_speaking_intros){
            var invis = document.getElementById("invis-o-div");
            var error_message_delete = document.getElementById("uid1_errorMessage");
            if(invis){
                invis.parentElement.removeChild(invis);
            }
            if(error_message_delete){
                error_message_delete.parentElement.removeChild(error_message_delete);
            }
        }
        if(is_auto_clicking){
        pageload = setInterval(function() {
           if (auto_click_direction == "forward") {
                current_page = document.getElementById("activity-title");
                nextactivity = document.getElementsByClassName("footnav goRight")[0];
                nextactivity_disabled = document.getElementsByClassName("footnav goRight disabled")[0];
           }
           if (auto_click_direction == "back") {
                current_page = document.getElementById("activity-title");
                nextactivity = document.getElementsByClassName("footnav goLeft")[0];
                nextactivity_disabled = document.getElementsByClassName("footnav goLeft disabled")[0];
           }
            current_frame = document.getElementById("activity-status").firstChild.nodeValue;
           //console.log(current_frame == "Complete");
            // The following will check if the button isn't disabled or anything like that, and will check if the current assignment is complete.
            if (nextactivity && !nextactivity_disabled && current_frame == "Complete") {
                nextactivity.click();
                clearInterval(pageload);
                if (prevent_inactive) {
                    clearInterval(no_inactive);
                }
                setTimeout(loadpage, 1000);
            }
            document.querySelector('iframe').contentWindow.API.E2020.freeMovement = true
            current_frame = document.getElementsByClassName("FrameCurrent FrameComplete")[0];
            //if(current_frame){
            //current_frame_id = current_frame.id;
            //}

            //nextslide_button = document.getElementsByClassName("FrameLeft")[0];
            //if (nextslide_button && current_frame) {
            //    nextclicker = setInterval(function() {
            //        nextslide_button.click();
            //        setTimeout(function () {
                        //var invis = document.getElementById("invis-o-div");
                        //if (invis) {
                            //invis.setAttribute("style", "display: none;");
                        //}
            //        }, 500);
            //    }, 500);
            //    clearInterval(pageload);
            //    if (prevent_inactive) {
            //        clearInterval(no_inactive);
            //    }
            //}
        }, 1000);
    }
       //if(current_page.innerhtml == "Vocabulary"){
        if (autodefi){ // This is for the auto-completition of the vocab
            setInterval(function () {
                var normalTextBox = document.getElementsByClassName("word-textbox word-normal")[0];
                var correctTextBox = document.getElementsByClassName("word-textbox word-correct")[0];
                var normalTextButton = document.getElementsByClassName("plainbtn alt blue selected")[0];
                var firstDefButton = document.getElementsByClassName("playbutton vocab-play")[0];
                var nextButton = document.getElementsByClassName("uibtn uibtn-blue uibtn-arrow-next")[0];
                if(normalTextBox && !correctTextBox){
                    normalTextBox.value = normalTextButton.innerHTML;
                    alreadyPlayedCheck = false;
                    triggerEvent(normalTextBox, "keyup");
                }
                if(correctTextBox && !alreadyPlayedCheck){
                    firstDefButton.click();
                    alreadyPlayedCheck = true;
                }
                if(nextButton && correctTextBox){
                    nextButton.click();
                }
            },2000);
    }
    if (prevent_inactive) {
        no_inactive = setInterval(function () {
            document.body.click();
            //nextactivity_disabled = document.getElementsByClassName("footnav goRight disabled")[0];
        },10000);
    }
       //}
    }
    loadpage();
})();
