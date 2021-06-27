var isMenuOpen = false;

function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    const menuIcon = document.getElementsByClassName('menu-icon').item(0);
    
    if (isMenuOpen) {
        menuIcon.classList.add('active');
        menuIcon.classList.remove('closed');
    } else {
        menuIcon.classList.remove('active');
        menuIcon.classList.add('closed');
    }
}