'use strict';
console.log('MEME CONTROLLER 🍇');

var gCtx;
var gElCanvas;
var gStartPos;
const gTouchEvs = ['touchstart', 'touchmove', 'touchend'];

function onCreateMeme(imgId) {
    initEditor();
    createMeme(imgId);

    document.querySelector('.memes-container').style.display = 'none';
    document.querySelector('.gallery-container').style.display = 'none';

    var elContainer = document.querySelector('.editor-container');
    elContainer.style.display = 'flex';

    document.querySelector('.txt-input').value = '';

    renderCanvas();
    addListeners();
    renderCanvas();
}

function initEditor() {
    document.querySelector('.txt-input').value = '';

    gElCanvas = document.querySelector('.canvas');
    gCtx = gElCanvas.getContext('2d');
}

function renderCanvas() {
    const meme = getMeme();
    drawImg(meme.selectedImgId);
}

function renderSavedMemes() {
    const memes = getMemes();

    const strHtmls = memes.map((meme, idx) => {
        return `<img src="${JSON.parse(meme.url)}" onclick="onRemoveMeme('${idx}')">`;
    });

    document.querySelector('.gallery-container').style.display = 'none';
    document.querySelector('.editor-container').style.display = 'none';

    const elContainer = document.querySelector('.memes-container');
    elContainer.style.display = 'block';
    elContainer.innerHTML = strHtmls.join('');
}

function drawTxt(text, font = 'Impact', size, color, stroke, x, y) {
    gCtx.lineWidth = 1;
    gCtx.fillStyle = color;
    gCtx.strokeStyle = stroke;
    gCtx.font = `${size}px ${font}`;
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}

function drawImg(imgId) {
    const meme = getMeme();
    var img = new Image();
    img.src = `img/${imgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);

        meme.lines.forEach((line, idx) => {
            // var txtWidth = line.txtWidth;
            line.txtWidth = gCtx.measureText(line.txt).width;
            var txt = line.txt;
            var font = line.font;
            var size = line.size;
            var color = line.color;
            var stroke = line.stroke;
            var x = line.pos.x;
            var y = line.pos.y;
            drawTxt(txt, font, size, color, stroke, x, y);

            // FIX!
            var startX = line.pos.x - 30;
            var startY = line.pos.y - 60;
            var endX = line.txtWidth + 60;
            var endY = line.size + 60;
            var rectStroke = idx === meme.selectedLineIdx ? 'white' : 'black';
            drawRect(startX, startY, endX, endY, rectStroke);
        });
    };
}

function drawRect(x, y, xEnd, yEnd, color = 'black') {
    gCtx.beginPath();
    gCtx.rect(x, y, xEnd, yEnd);
    gCtx.strokeStyle = color;
    gCtx.stroke();
    gCtx.closePath();
}

function onChangeTxt(ev) {
    const txt = ev.target.value;
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
    const color = elInput.value;
    changeTxtFill(color);
    renderCanvas();
}

function onChangeStroke(elInput) {
    const strokeColor = elInput.value;
    changeStroke(strokeColor);
    renderCanvas();
}

function onMoveTxt() {
    moveTxt();
    renderCanvas();
}

function onMoveRight() {
    moveRight();
    renderCanvas();
}

function onMoveLeft() {
    moveLeft();
    renderCanvas();
}

function onChangeFont(elInput) {
    const font = elInput.target.value;
    changeFont(font);
    renderCanvas();
}

function downloadImg() {
    var elLink = document.querySelector('.download-link');
    var imgContent = gElCanvas.toDataURL('image/jpeg');
    elLink.href = imgContent;
}

// Drag and drop!

function isTxtClicked(clickedPos) {
    const meme = getMeme();
    const pos = meme.lines[meme.selectedLineIdx].pos;
    const distance = Math.sqrt((pos.x - clickedPos.x) ** 2 + (pos.y - clickedPos.y) ** 2);
    return distance <= gMeme.lines[gMeme.selectedLineIdx].txtWidth;
}

function addListeners() {
    addMouseListeners();
    addTouchListeners();
}

function addMouseListeners() {
    gElCanvas.addEventListener('mousemove', onMove);
    gElCanvas.addEventListener('mousedown', onDown);
    gElCanvas.addEventListener('mouseup', onUp);
}

function addTouchListeners() {
    gElCanvas.addEventListener('touchmove', onMove);
    gElCanvas.addEventListener('touchstart', onDown);
    gElCanvas.addEventListener('touchend', onUp);
}

function onDown(ev) {
    const pos = getEvPos(ev);
    if (!isTxtClicked(pos)) return;
    setTxtDrag(true);
    gStartPos = pos;
    document.querySelector('.canvas').style.cursor = 'grabbing';
}

function onMove(ev) {
    const meme = getMeme();
    if (meme.isDrag) {
        const pos = getEvPos(ev);
        const dx = pos.x - gStartPos.x;
        const dy = pos.y - gStartPos.y;
        gStartPos = pos;
        moveMeme(dx, dy);
        renderCanvas();
    }
}

function onUp() {
    setTxtDrag(false);
    document.querySelector('.canvas').style.cursor = 'grab';
}

function getEvPos(ev) {
    var pos = {
        x: ev.offsetX,
        y: ev.offsetY,
    };
    if (gTouchEvs.includes(ev.type)) {
        ev.preventDefault();
        ev = ev.changedTouches[0];
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
        };
    }
    return pos;
}

function onSaveMeme() {
    const imgUrl = JSON.stringify(gElCanvas.toDataURL('image/png'));
    saveMeme(imgUrl);
}

function onRemoveMeme(memeId) {
    removeMeme(memeId);
    renderSavedMemes();
}
