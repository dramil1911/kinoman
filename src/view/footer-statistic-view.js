import { createElement } from '../render.js';

const createFooterStatisticTemplate = () => '<section class="footer__statistics"><p>130 291 movies inside</p></section>';

export default class FooterStatistic {
  #element = null;

  get template() {
    return createFooterStatisticTemplate();
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
