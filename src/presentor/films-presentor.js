import { render } from '../render';
import SortView from '../view/sort-view.js';
import FilmsView from '../view/films-view.js';
import FilmList from '../view/films-list-view.js';
import FilmListTitle from '../view/films-list-title-view.js';
import FilmListContainer from '../view/films-list-container-view.js';
import FilmCardView from '../view/film-card-view.js';
import FilmCardButton from '../view/film-card-button-view.js';
import FilmDetailsView from '../view/film-details-view.js';

const CARRD_COUNT_PER_STEP = 5;

export default class FilmsPresentor {
  #sortView = new SortView();
  #filmsView = new FilmsView();
  #filmList = new FilmList();
  #filmListTitle = new FilmListTitle();
  #filmListContainer = new FilmListContainer();
  #loadMoreButton = new FilmCardButton();

  #filmDetailsComponent = null;
  #container = null;
  #filmsModel = null;
  #commentsModel = null;
  #films = [];
  #filmCardsCounter = CARRD_COUNT_PER_STEP;

  init = (container, filmsModel, commentsModel) => {
    this.#container = container;
    this.#films = [...filmsModel.get()];
    this.#filmsModel = filmsModel;
    this.#commentsModel = commentsModel;
    render(this.#sortView, this.#container);
    render(this.#filmsView, this.#container);
    render(this.#filmList, this.#filmsView.element);
    render(this.#filmListTitle, this.#filmList.element);
    render(this.#filmListContainer, this.#filmList.element);

    // render(this.#filmCardButton, this.#filmList.element);
    for (let i = 0; i < Math.min(CARRD_COUNT_PER_STEP, this.#films.length); i++) {
      this.#renderFilm(this.#films[i], this.#filmListContainer);
    }

    if (this.#films.length > CARRD_COUNT_PER_STEP) {
      render(this.#loadMoreButton, this.#filmList.element);
      this.#loadMoreButton.element.addEventListener('click', () => {
        this.#handleMoreButtomClick();
      });
    }
  };

  #handleMoreButtomClick() {
    this.#films.slice(this.#filmCardsCounter, this.#filmCardsCounter + CARRD_COUNT_PER_STEP)
      .forEach((filmCard) =>
        this.#renderFilm(filmCard, this.#filmListContainer));

    this.#filmCardsCounter += CARRD_COUNT_PER_STEP;
    if (this.#filmCardsCounter >= this.#films.length) {
      this.#removehandleMoreButtomClick();
    }
  }

  #removehandleMoreButtomClick() {
    this.#loadMoreButton.element.remove();
    this.#loadMoreButton.removeElement();
  }

  #renderFilm(film, filmContainer) {
    const filmCardComponent = new FilmCardView(film);
    const filmCardLink = filmCardComponent.element.querySelector('.film-card__link');
    filmCardLink.addEventListener('click', () => {
      this.#addFilmDetailCard(film);
      document.addEventListener('keydown', this.#onEscKeyDown);
    });
    render(filmCardComponent, filmContainer.element);
  }

  #addFilmDetailCard(film) {
    document.body.classList.add('hide-overflow');
    const filmDetailComments = [...this.#commentsModel.get(film)];
    this.#renderFilmDetail(film, filmDetailComments);
  }

  #removeFilmDetailCard() {
    this.#filmDetailsComponent.element.remove();
    this.#filmDetailsComponent.removeElement();
    document.body.classList.remove('hide-overflow');
  }

  #renderFilmDetail(film, filmComments) {
    this.#filmDetailsComponent = new FilmDetailsView(film, filmComments);
    render(this.#filmDetailsComponent, this.#container);

    const filmDetailCloseButton = this.#filmDetailsComponent.element.querySelector('.film-details__close-btn');
    filmDetailCloseButton.addEventListener('click', () => {
      this.#removeFilmDetailCard();
      document.removeEventListener('keydown', this.#onEscKeyDown);
    });
  }

  #onEscKeyDown = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      this.#removeFilmDetailCard();
    }
  };

}
