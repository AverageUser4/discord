export default class LanguageChooser {

  toggler;
  dropdown;

  constructor() {
    this.toggler = document.querySelector('.the-footer__pseudo-select-activator');
    this.dropdown = document.querySelector('.the-footer__pseudo-select-dropdown');

    this.toggler.addEventListener('click', () => this.toggleDropdown());
    window.addEventListener('keydown', (e) => {
      if(e.key === 'Escape')
        this.closeDropdown()
    });
  }

  toggleDropdown() {
    this.dropdown.classList.toggle('the-footer__pseudo-select-dropdown--hidden');
  }

  closeDropdown() {
    this.dropdown.classList.add('the-footer__pseudo-select-dropdown--hidden');
  }

}