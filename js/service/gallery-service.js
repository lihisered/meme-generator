'use strict';
console.log('Gallery service');

var gImgs = [];
var gKeywords = ['Funny', 'Animal', 'Men', 'Smile', 'Comic', 'Cute'];
var gNextId = 1;
var gFilterBy = 'All';

createImgs();

function createImg(id, keywords) {
    var img = { id, url: `img/${id}.jpg`, keywords };
    gImgs.push(img);
}

function createImgs() {
    createImg(gNextId++, ['Men', 'Funny']);
    createImg(gNextId++, ['Animal', 'Cute']);
    createImg(gNextId++, ['Animal', 'Cute']);
    createImg(gNextId++, ['Animal', 'Cute']);
    createImg(gNextId++, ['Funny', 'Cute']);
    createImg(gNextId++, ['Men', 'Comic', 'Smile']);
    createImg(gNextId++, ['Funny', 'Comic']);
    createImg(gNextId++, ['Men', 'Comic', 'Smile']);
    createImg(gNextId++, ['Funny', 'Cute', 'Smile']);
    createImg(gNextId++, ['Men', 'Comic', 'Smile']);
    createImg(gNextId++, ['Men']);
    createImg(gNextId++, ['Men', 'Comic']);
    createImg(gNextId++, ['Men']);
    createImg(gNextId++, ['Men', 'Funny']);
    createImg(gNextId++, ['Men', 'Funny']);
    createImg(gNextId++, ['Men']);
    createImg(gNextId++, ['Men']);
    createImg(gNextId++, ['Funny']);
}

function getImgsForDisplay() {
    if (gFilterBy === 'All' || gFilterBy === '') return gImgs;
    return gImgs.filter((img) => {
        return img.keywords.includes(gFilterBy);
    });
}

function setFilter(filterby) {
    gFilterBy = filterby;
}

function getImgs() {
    return gImgs;
}

function getKeywords() {
    return gKeywords;
}
