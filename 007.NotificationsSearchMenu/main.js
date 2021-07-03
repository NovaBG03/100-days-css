let isSearching = false;
let isMenuOpen = false;

const searchbar = document.getElementById('searchbar');
const searchBtn = document.getElementById('search-btn');
const container = document.getElementById('container');
const menuBtn = document.getElementById('menu-btn');

searchBtn.onclick = toggleSearching;
menuBtn.onclick = toggleMenu;

function toggleSearching(event) {
    isSearching = !isSearching;
    if (isSearching) {
        searchbar.classList.add('active');
    } else {
        searchbar.classList.remove('active');
    }
}

function toggleMenu(event) {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
        container.classList.add('open');
    } else {
        container.classList.remove('open');
    }
}
