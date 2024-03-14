import { createElement } from '../render';

const createFilmCardButtonTemplate = () => `
  <button class="films-list__show-more">Show more</button>
`;

export default class FilmCardButton {
  #element = null;

  get template() {
    return createFilmCardButtonTemplate();
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
