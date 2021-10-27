'use strict';
console.log('Meme service');

const KEY = 'memeDB';
var gMeme;

function createMeme(imgId, font = 'Impact') {
    var meme = {
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
    gMeme = meme;
    saveMemeToStorage();
}

function changeTxt(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt;
    saveMemeToStorage();
}

function changeSize(diff) {
    gMeme.lines[gMeme.selectedLineIdx].size += diff;
    saveMemeToStorage();
}

function changePos(diff) {
    gMeme.lines[gMeme.selectedLineIdx].pos.y += diff;
    saveMemeToStorage();
}

function addLine(font = 'Impact') {
    var line = {
        txt: '',
        size: 30,
        font,
        align: 'left',
        color: 'white',
        stroke: 'black',
        pos: { x: 130, y: 100 },
    };
    gMeme.lines.push(line);
    switchLine();
    saveMemeToStorage();
}

function switchLine() {
    if (gMeme.lines.length === 1) return;

    if (gMeme.selectedLineIdx === 0) gMeme.selectedLineIdx = 1;
    else gMeme.selectedLineIdx = 0;

    var elInput = document.querySelector('.txt-input');
    if (gMeme.lines.length > 1) elInput.value = gMeme.lines[gMeme.selectedLineIdx].txt;
    else elInput.value = '';

    saveMemeToStorage();
}

function removeLine() {
    if (gMeme.lines.length === 1) gMeme.selectedLineIdx = 0;
    gMeme.lines.splice(gMeme.selectedLineIdx, 1);
    saveMemeToStorage();
}

function changeTxtFill(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color;
    saveMemeToStorage();
}

function changeStroke(color) {
    gMeme.lines[gMeme.selectedLineIdx].stroke = color;
    saveMemeToStorage();
}

function moveTxt(width) {
    gMeme.lines[gMeme.selectedLineIdx].pos.x = width;
    saveMemeToStorage();
}

function moveLeft() {
    gMeme.lines[gMeme.selectedLineIdx].pos.x = 10;
    saveMemeToStorage();
}

function moveRight() {
    // FIX!
    gMeme.lines[gMeme.selectedLineIdx].pos.x = 250;
    saveMemeToStorage();
}
function moveMiddle() {}
function changeFont(font) {
    gMeme.lines[gMeme.selectedLineIdx].font = font;
    saveMemeToStorage();
}

function setTxtDrag(isDrag) {
    gMeme.isDrag = isDrag;
    saveMemeToStorage();
}

function moveMeme(dx, dy) {
    gMeme.lines[gMeme.selectedLineIdx].pos.x += dx;
    gMeme.lines[gMeme.selectedLineIdx].pos.y += dy;
    saveToStorage(KEY, gMeme);
}

function getMeme() {
    return loadFromStorage(KEY);
}

function saveMemeToStorage() {
    saveToStorage(KEY, gMeme);
}
