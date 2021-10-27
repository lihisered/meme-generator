'use strict';

function onInit() {
    console.log('GALLERY CONTROLLER 🍇');

    renderGallery();
}

function renderGallery() {
    console.log('Rendering imgs...');

    var imgs = getImgs();
    console.log(imgs);

    var strHtmls = imgs.map((img) => {
        return `<img src="img/${img.id}.jpg">`;
    });

    var elContainer = document.querySelector('.gallery-container');
    elContainer.innerHTML = strHtmls.join('');
}
