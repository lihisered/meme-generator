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

function getMeme() {
    return loadFromStorage(KEY);
}

function saveMemeToStorage() {
    saveToStorage(KEY, gMeme);
}
