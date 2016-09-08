window.onload = function () {
    c = document.getElementById("myCanvas");
    var cxt = c.getContext("2d");
    cxt.moveTo(10, 10);
    cxt.lineTo(150, 50);
    cxt.lineTo(10, 50);
    cxt.stroke();


    var c1 = document.getElementById("Canvas1");
    var cxt1 = c1.getContext("2d");
    cxt1.fillStyle = "#FF0000";
    cxt1.beginPath();
    cxt1.arc(70, 18, 15, 0, Math.PI * 2, true);
    cxt1.closePath();
    cxt1.fill();

    var c2 = document.getElementById("Canvas2");
    var cxt2 = c2.getContext("2d");
    var grd = cxt2.createLinearGradient(0, 0, 175, 50);
    grd.addColorStop(0, "#FF0000");
    grd.addColorStop(1, "#00FF00");
    cxt2.fillStyle = grd;
    cxt2.fillRect(0, 0, 175, 50);

    var c3 = document.getElementById("Canvas3");
    var cxt3 = c3.getContext("2d");
    var img = new Image();
    img.src = "../Resource/w3school_banner.gif";
    cxt3.drawImage(img, 0, 0);
}