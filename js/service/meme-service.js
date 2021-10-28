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
                size: 30,
                font,
                align: 'left',
                color: 'white',
                stroke: 'black',
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
        size: 30,
        font,
        align: 'left',
        color: 'white',
        stroke: 'black',
        pos: { x: 130, y: 100 },
    };
    if (gMeme.lines.length >= 2) line.pos = { x: 130, y: 250 };
    gMeme.lines.push(line);
    switchLine();
}

function switchLine() {
    if (gMeme.lines.length === 1) return;

    gMeme.selectedLineIdx++;

    if (gMeme.selectedLineIdx === 3 || gMeme.lines.length === 0) gMeme.selectedLineIdx = 0;

    var elInput = document.querySelector('.txt-input');
    if (gMeme.lines.length > 1) elInput.value = gMeme.lines[gMeme.selectedLineIdx].txt;
    else elInput.value = '';
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

function moveTxt(diff) {
    if (!diff) gMeme.lines[gMeme.selectedLineIdx].pos.x = 130;
    else gMeme.lines[gMeme.selectedLineIdx].pos.x += diff;
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
