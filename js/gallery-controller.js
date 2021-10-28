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

    var elContainer = document.querySelector('.imgs-container');
    elContainer.innerHTML = strHtmls.join('');

    document.querySelector('.gallery-container').style.display = 'block';
    document.querySelector('.editor-container').style.display = 'none';
}

function changeFontSize(elSpan) {
    console.log(elSpan.style.fontSize);
    elSpan.style.fontSize;
}

function toggleMenu() {
    document.body.classList.toggle('menu-open');
}
