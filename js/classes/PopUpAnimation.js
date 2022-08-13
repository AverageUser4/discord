export default class PopUpAnimation {

  popUps;
  invoker;

  constructor() {

    this.popUps = document.querySelectorAll('.animation-article-content');
    this.popUps = [...this.popUps];

    this.invoker = () => this.onScroll();
    window.addEventListener('scroll', this.invoker);

    this.onScroll();
  }

  onScroll() {
    const toBeRemoved = [];

    for(let val of this.popUps) {
      if(val.getBoundingClientRect().y < window.innerHeight) {
        val.classList.remove('animation-article-content--hidden');
        toBeRemoved.push(this.popUps.indexOf(val));
      } 
    }

    for(let val of toBeRemoved) {
      this.popUps.splice(val, 1);
    }

    if(this.popUps.length === 0)
      window.removeEventListener('scroll', this.invoker);
  }

}