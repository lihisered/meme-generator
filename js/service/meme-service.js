'use strict';
console.log('Meme service');

const KEY = 'memeDB';
var gMeme;

function createMeme(imgId) {
    var meme = {
        selectedImgId: imgId,
        selectedLineIdx: 0,
        lines: [
            {
                txt: 'Enter text here',
                size: 30,
                align: 'left',
                color: 'red',
                pos: { x: 140, y: 400 },
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

function addLine() {
    var line = {
        txt: 'Enter text here',
        size: 30,
        align: 'left',
        color: 'red',
        pos: { x: 140, y: 100 },
    };
    gMeme.lines.push(line);
    switchLine();
    saveMemeToStorage();
}

function switchLine() {
    if (gMeme.selectedLineIdx === 0) gMeme.selectedLineIdx = 1;
    else gMeme.selectedLineIdx = 0;
    saveMemeToStorage();
}

function removeLine() {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1);
    switchLine();
    saveMemeToStorage();
}

function getMeme() {
    return loadFromStorage(KEY);
}

function saveMemeToStorage() {
    saveToStorage(KEY, gMeme);
}
