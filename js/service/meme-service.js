'use strict';
console.log('Meme service');

const KEY = 'memeDB';
var gMeme;
var gMemes = [];

function createMeme(imgId, font = 'Impact') {
    gMeme = {
        selectedImgId: imgId,
        selectedLineIdx: 0,
        lines: [
            {
                txt: 'Enter text here',
                txtWidth: 177.7001953125,
                size: 30,
                font,
                align: 'left',
                color: 'white',
                stroke: 'black',
                border: 'white',
                pos: { x: 130, y: 400 },
            },
        ],
    };
}

function changeTxt(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt;
}

function changeSize(diff) {
    gMeme.lines[gMeme.selectedLineIdx].size += diff;
}

function changePos(diff) {
    gMeme.lines[gMeme.selectedLineIdx].pos.y += diff;
}

function addLine(font = 'Impact') {
    if (gMeme.lines.length === 3) return;
    var line = {
        txt: '',
        txtWidth: 0,
        size: 30,
        font,
        align: 'left',
        color: 'white',
        stroke: 'black',
        border: 'white',
        pos: { x: 130, y: 100 },
    };
    if (gMeme.lines.length >= 2) line.pos = { x: 130, y: 250 };
    gMeme.lines.push(line);
    switchLine();
}

function switchLine() {
    if (gMeme.lines.length === 1) return;
    else if (gMeme.lines.length === 2 && gMeme.selectedLineIdx === 1) gMeme.selectedLineIdx = 0;
    else if (gMeme.lines.length === 2 && gMeme.selectedLineIdx === 0) gMeme.selectedLineIdx = 1;
    else if (gMeme.selectedLineIdx === 3 || gMeme.lines.length === 0) gMeme.selectedLineIdx = 0;
    else gMeme.selectedLineIdx++;

    var elInput = document.querySelector('.txt-input');
    elInput.value = gMeme.lines.length > 1 ? gMeme.lines[gMeme.selectedLineIdx].txt : '';
}

function removeLine() {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1);
    if (gMeme.lines.length === 1) gMeme.selectedLineIdx = 0;
}

function changeTxtFill(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color;
}

function changeStroke(color) {
    gMeme.lines[gMeme.selectedLineIdx].stroke = color;
}

function moveTxt() {
    gMeme.lines[gMeme.selectedLineIdx].pos.x = 130;
}

function moveRight() {
    var posX = 450 - gMeme.lines[gMeme.selectedLineIdx].txtWidth - 60;
    gMeme.lines[gMeme.selectedLineIdx].pos.x = posX;
}

function moveLeft() {
    gMeme.lines[gMeme.selectedLineIdx].pos.x = 60;
}

function changeFont(font) {
    gMeme.lines[gMeme.selectedLineIdx].font = font;
}

function setTxtDrag(isDrag) {
    gMeme.isDrag = isDrag;
}

function moveMeme(dx, dy) {
    gMeme.lines[gMeme.selectedLineIdx].pos.x += dx;
    gMeme.lines[gMeme.selectedLineIdx].pos.y += dy;
}

function saveMeme() {
    gMemes.push(gMeme);
    saveToStorage('memesDB', gMemes);
}

function getMeme() {
    return gMeme;
}

function getMemes() {
    return loadFromStorage('memesDB');
}

function saveMemeToStorage() {
    saveToStorage(KEY, gMeme);
}
