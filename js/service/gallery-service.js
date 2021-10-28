'use strict';
console.log('Gallery service');

// var gKeywords = {'happy': 12,'funny puk': 1}
var gImgs = [];

createImgs();

function createImg(id, keywords = 'happy') {
    var img = { id, url: `img/${id}.jpg`, keywords: ['happy'] };
    gImgs.push(img);
}

function createImgs() {
    for (var i = 1; i <= 18; i++) {
        createImg(i);
    }
}

function getImgs() {
    return gImgs;
}
