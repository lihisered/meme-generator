'use strict';
console.log('Meme service');

const KEY = 'memeDB';
var gMeme;
//  = {
//     selectedImgId: 5,
//     selectedLineIdx: 0,
//     lines: [
//         {
//             txt: 'I never eat Falafel',
//             size: 20,
//             align: 'left',
//             color: 'red',
//         },
//     ],
// };

function createMeme(imgId) {
    var meme = {
        selectedImgId: imgId,
        selectedLineIdx: 0,
        lines: [
            {
                txt: 'Enter text here',
                size: 20,
                align: 'left',
                color: 'red',
            },
        ],
    };
    gMeme = meme;
    saveMemeToStorage();
}

function saveMemeToStorage() {
    saveToStorage(KEY, gMeme);
}
