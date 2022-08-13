export default class Menu {

  isOpen = false;
  opener;
  background;
  menu;
  closer;

  firstFocusable;
  lastFocustable

  constructor() {
    this.opener = document.querySelector('.the-header__menu-button');
    this.background = document.querySelector('.menu-background');
    this.menu = document.querySelector('.menu');
    this.closer = document.querySelector('.menu__close-button');

    this.opener.addEventListener('click', () => this.openMenu());
    this.closer.addEventListener('click', () => this.closeMenu());
    this.menu.addEventListener('click', (e) => e.stopPropagation());
    this.background.addEventListener('click', () => this.closeMenu());
    window.addEventListener('resize', () => this.closeMenu());

    this.firstFocusable = document.querySelector('.menu__logo-container');
    this.lastFocusable = document.querySelector('.menu__bottom-button');

    window.addEventListener('keydown', (e) => this.keyDown(e));
  }

  openMenu() {
    if(this.isOpen)
      return;

    document.activeElement.blur();
    console.log(document.activeElement)

    this.isOpen = true;

    this.background.style.display = 'block';
    setTimeout(() => {
      this.background.classList.remove('menu-background--hidden');
      this.menu.classList.remove('menu--hidden');
    }, 10);
  }

  closeMenu() {
    if(!this.isOpen)
      return;

    this.isOpen = false;

    this.background.classList.add('menu-background--hidden');
    this.menu.classList.add('menu--hidden');
    setTimeout(() => {
      this.background.style.display = 'none';
    }, 300);
  }

  keyDown(e) {
    if(!this.isOpen)
      return;

    if(e.key === 'Escape')
      this.closeMenu();

    if(
        e.key === 'Tab' &&
        (
          document.activeElement === document.body ||
          document.activeElement === this.lastFocusable
        )
      ) {
      e.preventDefault();
      this.firstFocusable.focus();
    }
  }

}