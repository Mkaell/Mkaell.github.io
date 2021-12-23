const menu = document.querySelector('.menu'),
      menuItem = document.querySelectorAll('.menu_item'),
      hamburger = document.querySelector('.hamburger'),
      back = document.querySelector('.back');


function checkDisplay() {
    if(window.getComputedStyle(hamburger, null).getPropertyValue("display") == 'block') {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
        document.body.classList.toggle('overflow');
        back.classList.toggle('show');
    }
}

function toggleMenu(element){
    element.addEventListener('click', () => {
        checkDisplay();
    });

}

menuItem.forEach(item => {
    toggleMenu(item);
});

toggleMenu(hamburger);
toggleMenu(back);