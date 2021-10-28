'use strict';
console.log('Gallery service');

var gImgs = [];
var gKeywords;

createImgs();

function createImg(id, keywords = 'happy') {
    var img = { id, url: `img/${id}.jpg`, keywords: ['happy'] };
    gImgs.push(img);
}

function createImgs() {
    createImg(1, 'Men');
    createImg(2, 'Animal');
    createImg(3, 'Animal');
    createImg(4, 'Animal');
    createImg(5, 'Funny');
    createImg(6, 'Men');
    createImg(7, 'Funny');
    createImg(8, 'Men');
    createImg(9, 'Funny');
    createImg(10, 'Men');
    createImg(11, 'Men');
    createImg(12, 'Men');
    createImg(13, 'Men');
    createImg(14, 'Men');
    createImg(15, 'Men');
    createImg(16, 'Men');
    createImg(17, 'Men');
    createImg(18, 'Funny');
}

function getImgs() {
    return gImgs;
}
