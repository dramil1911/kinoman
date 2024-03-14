import { createElement } from '../render';

import { filmDetailsInfoTemplate } from './film-details-info-template.js';
import { filmDetailsControlTemplate } from './film-details-control-template';
import { filmDetailsCommentsTemplate } from './film-details-comments-template';
import { createFilmDetailsFormTemplate } from './film-details-form-template';

const createFilmDetailsTemplate = ({ filmInfo }, comments) =>
  `
    <section class="film-details">
    <form class="film-details__inner" action="" method="get">
    <div class="film-details__top-container">
      <div class="film-details__close">
        <button class="film-details__close-btn" type="button">close</button>
      </div>

      ${filmDetailsInfoTemplate(filmInfo, comments)}

      ${filmDetailsControlTemplate()}
    </div>

    <div class="film-details__bottom-container">
      <section class="film-details__comments-wrap">
        <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">0</span></h3>

        ${filmDetailsCommentsTemplate()}
        ${createFilmDetailsFormTemplate()}

      </section>
    </div>
  </form>
    </section>
  `;


export default class FilmDetailsView {
  #element = null;
  #comments = null;
  #film = null;

  constructor(film, comments) {
    this.#film = film;
    this.#comments = comments;
  }

  get template() {
    return createFilmDetailsTemplate(this.#film, this.#comments);
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
