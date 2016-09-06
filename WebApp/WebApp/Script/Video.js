function checkVideo() {
    if (!!document.createElement('video').canPlayType) {
        var vidTest = document.createElement("video");
        oggTest = vidTest.canPlayType('video/ogg; codecs="theora, vorbis"');
        if (!oggTest) {
            h264Test = vidTest.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');
            if (!h264Test) {
                document.getElementById("checkVideoResult").innerHTML = "Sorry. No video support."
            }
            else {
                if (h264Test == "probably") {
                    document.getElementById("checkVideoResult").innerHTML = "Yes! Full support!";
                }
                else {
                    document.getElementById("checkVideoResult").innerHTML = "Well. Some support.";
                }
            }
        }
        else {
            if (oggTest == "probably") {
                document.getElementById("checkVideoResult").innerHTML = "Yes! Full support!";
            }
            else {
                document.getElementById("checkVideoResult").innerHTML = "Well. Some support.";
            }
        }
    }
    else {
        document.getElementById("checkVideoResult").innerHTML = "Sorry. No video support."
    }
}

var myVideo = undefined;
window.onload = function ()
{
    myVideo = document.getElementById("video1");
}

function playPause() {
    if (myVideo.paused)
        myVideo.play();
    else
        myVideo.pause();
}

function makeBig() {
    myVideo.width = 580;
}

function makeSmall() {
    myVideo.width = 320;
}

function makeNormal() {
    myVideo.width = 480;
}
