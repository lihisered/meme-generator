'use strict';

function onInit() {
    console.log('GALLERY CONTROLLER 🍇');

    renderGallery();
}

function renderGallery() {
    var imgs = getImgs();

    var strHtmls = imgs.map((img) => {
        return `<img src="img/${img.id}.jpg" onclick="onCreateMeme('${img.id}')">`;
    });

    var elContainer = document.querySelector('.gallery-container');
    elContainer.innerHTML = strHtmls.join('');
    elContainer.style.display = 'block';

    document.querySelector('.editor-container').style.display = 'none';
}
