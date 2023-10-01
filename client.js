console.log(window.location.href);
new QRCode(document.getElementById("qrcode"), {
    text: window.location.href,
    width: 250,
    height: 250,
    colorDark: "#0f0f00",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});

new QRCode(document.getElementById('qrcode'), window.location);