'use strict';

function onInit() {
    console.log('GALLERY CONTROLLER 🍇');

    renderGallery();
}

function renderGallery() {
    var imgs = getImgs();
    console.log(imgs);

    var strHtmls = imgs.map((img) => {
        return `<img src="img/${img.id}.jpg" onclick="onCreateMeme('${img.id}')">`;
    });

    var elContainer = document.querySelector('.gallery-container');
    elContainer.innerHTML = strHtmls.join('');
}
