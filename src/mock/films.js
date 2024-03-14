import { FILM_COUNT, MAX_COMMENTS_ON_FILM, titles, Rating, posters, ageRating, names, surnames, NamesCount, YearsDuration, countries, Runtime, genres, description } from './const.js';
import { getRandomInteger, getRandomValue } from '../utils.js';

const getDate = () => {
  const date = new Date();
  date.setFullYear(date.getFullYear() - getRandomInteger(YearsDuration.MIN, YearsDuration.MAX));
  return date.toISOString();

};

const generateFilm = () => ({
  title: getRandomValue(titles),
  alternativeTitle: getRandomValue(titles),
  totalRating: getRandomInteger(Rating.MIN, Rating.MAX),
  poster: getRandomValue(posters),
  ageRating: getRandomValue(ageRating),
  director: `${getRandomValue(names)} ${getRandomValue(surnames)}`,
  writers: Array.from({ length: `${getRandomInteger(NamesCount.MIN, NamesCount.MAX)}` }, () => `${getRandomValue(names)} ${getRandomValue(surnames)}`),
  actors: Array.from({ length: `${getRandomInteger(NamesCount.MIN, NamesCount.MAX)}` }, () => `${getRandomValue(names)} ${getRandomValue(surnames)}`),
  release: {
    date: getDate(),
    releaseCountry: getRandomValue(countries),
  },
  runtime: getRandomInteger(Runtime.MIN, Runtime.MAX),
  genre: Array.from({ length: getRandomInteger(1, 4) }, () => getRandomValue(genres)),
  description: description,
});

const generateFilms = () => {
  const films = Array.from({ length: FILM_COUNT }, generateFilm);
  let totalCommentsCount = 0;
  return films.map((film, indexFilm) => {
    const hasComments = getRandomInteger(0, 1);

    const filmCommentsCount = (hasComments) ? getRandomInteger(1, MAX_COMMENTS_ON_FILM) : 0;

    totalCommentsCount += filmCommentsCount;

    return {
      id: String(indexFilm + 1),
      comments: (hasComments)
        ? Array.from({ length: filmCommentsCount },
          (_value, commentIndex) => String(totalCommentsCount - commentIndex)) : [],
      filmInfo: film,
    };
  });
};


export { generateFilms };

