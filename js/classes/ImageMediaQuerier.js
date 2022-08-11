export default class ImageMediaQuerier {

  articleOneImageTwo;

  constructor() {
    this.articleOneImageTwo = document.querySelector('.article-1__img-2');

    this.matchMediaQueries();

    window.addEventListener('resize', () => this.matchMediaQueries());
  }

  matchMediaQueries() {
    if(matchMedia('min-width: 756px')) {
      this.articleOneImageTwo.setAttribute('src', 'resources/images/main/article-1-img-2.svg');
    } else {
      this.articleOneImageTwo.setAttribute('src', '');
    }
  }

}