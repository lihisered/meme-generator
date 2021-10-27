'use strict';
console.log('MEME CONTROLLER 🍇');

var gCtx;
var gElCanvas;

function onCreateMeme(imgId) {
    createMeme(imgId);

    document.querySelector('.gallery-container').hidden = true;
    document.querySelector('.editor-container').hidden = false;

    initCanvas();
    renderCanvas();
}

function initCanvas() {
    gElCanvas = document.querySelector('.canvas');
    gCtx = gElCanvas.getContext('2d');
}

function renderCanvas() {
    var meme = getMeme();
    console.log(meme);

    drawImg(meme.selectedImgId);
}

function drawText(text, size, x, y) {
    gCtx.lineWidth = 1;
    gCtx.fillStyle = 'white';
    gCtx.strokeStyle = 'black';
    gCtx.font = `${size}px Impact`;
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}

function drawImg(imgId) {
    var meme = getMeme();
    var img = new Image();
    img.src = `img/${imgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);

        meme.lines.forEach((line) => {
            var txt = line.txt;
            var size = line.size;
            var x = line.pos.x;
            var y = line.pos.y;
            drawText(txt, size, x, y);
        });
    };
}
