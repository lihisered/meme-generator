'use strict';
console.log('MEME CONTROLLER 🍇');

var gCtx;
var gElCanvas;

function onCreateMeme(imgId) {
    createMeme(imgId);

    document.querySelector('.gallery-container').hidden = true;

    var elContainer = document.querySelector('.editor-container');
    elContainer.hidden = false;
    elContainer.classList.add('flex');

    initCanvas();
    renderCanvas();
}

function initCanvas() {
    gElCanvas = document.querySelector('.canvas');
    gCtx = gElCanvas.getContext('2d');
}

function renderCanvas() {
    var meme = getMeme();
    drawImg(meme.selectedImgId);
}

function drawText(text, size, color, x, y) {
    gCtx.lineWidth = 1;
    gCtx.fillStyle = color;
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
            var color = line.color;
            var x = line.pos.x;
            var y = line.pos.y;
            drawText(txt, size, color, x, y);
        });
    };
}

function onChangeTxt(ev) {
    var txt = ev.target.value;
    changeTxt(txt);
    renderCanvas();
}

function onChangeSize(diff) {
    changeSize(diff);
    renderCanvas();
}

function onChangePos(diff) {
    changePos(diff);
    renderCanvas();
}

function onAddLine() {
    addLine();
    renderCanvas();
}

function onSwitchLine() {
    switchLine();
}

function onRemoveLine() {
    removeLine();
    renderCanvas();
}

function onChangeTxtFill(elInput) {
    var color = elInput.value;
    changeTxtFill(color);
    renderCanvas();
}
