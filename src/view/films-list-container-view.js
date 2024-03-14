import { createElement } from '../render';

const createFilmsListContainerTemplate = () => '<div class="films-list__container">';

export default class FilmListContainer {
  #element = null;
  get template() {
    return createFilmsListContainerTemplate();
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
