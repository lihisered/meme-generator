'use strict';

function onInit() {
    console.log('GALLERY CONTROLLER 🍇');
    renderInputhOpts();
    renderFilters();
    renderGallery();
}

function onSetFilter(filterby) {
    setFilter(filterby);
    renderGallery();
}

function renderGallery() {
    const imgs = getImgsForDisplay();

    const strHtmls = imgs.map((img) => {
        return `<img src="img/${img.id}.jpg" onclick="onCreateMeme('${img.id}')">`;
    });

    const elContainer = document.querySelector('.imgs-container');
    elContainer.innerHTML = strHtmls.join('');

    document.querySelector('.gallery-container').style.display = 'block';
    document.querySelector('.editor-container').style.display = 'none';
}

function renderInputhOpts() {
    const keywords = getKeywords();

    const strHtmls = keywords.map((keyword) => {
        return `<option value="${keyword}"></option>`;
    });

    var elDatalist = document.querySelector('.search-datalist');
    elDatalist.innerHTML = strHtmls;
}

function renderFilters() {
    const keywords = getKeywords();

    const strHtmls = keywords.map((keyword) => {
        return `<span>${keyword}<span/>`;
    });

    const elContainer = document.querySelector('.filter-imgs');
    elContainer.innerHTML = strHtmls.join(' ');
}

function onToggleMenu() {
    document.body.classList.toggle('menu-open');
}
