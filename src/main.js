import { render } from './render.js';

import HeaderProfile from './view/header-profile-view.js';
import MainNavigation from './view/main-navigation-view.js';
import FooterStatistic from './view/footer-statistic-view.js';
import FilmsPresentor from './presentor/films-presentor.js';

import FilmsModel from './model/films-model.js';
import CommentsModel from './model/comments-model.js';

const header = document.querySelector('.header');
const mainContainer = document.querySelector('.main');
const footer = document.querySelector('footer');

const filmsModel = new FilmsModel();
const commentsModel = new CommentsModel(filmsModel);

render(new HeaderProfile(), header);
render(new MainNavigation(), mainContainer);
render(new FooterStatistic(), footer);

const filmsPresenter = new FilmsPresentor();
filmsPresenter.init(mainContainer, filmsModel, commentsModel);
