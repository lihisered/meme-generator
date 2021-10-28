'use strict';

function onInit() {
    console.log('GALLERY CONTROLLER 🍇');

    renderGallery();
}

function renderGallery() {
    const imgs = getImgs();

    var strHtmls = imgs.map((img) => {
        return `<img src="img/${img.id}.jpg" onclick="onCreateMeme('${img.id}')">`;
    });

    var elContainer = document.querySelector('.imgs-container');
    elContainer.innerHTML = strHtmls.join('');

    document.querySelector('.gallery-container').style.display = 'block';
    document.querySelector('.editor-container').style.display = 'none';
}

function toggleMenu() {
    document.body.classList.toggle('menu-open');
}
