const FILM_COUNT = 20;
const MAX_COMMENTS_ON_FILM = 7;

const NamesCount = {
  MIN: 1,
  MAX: 4
};

const YearsDuration = {
  MIN: 5,
  MAX: 10
};

const DaysDuration = {
  MIN: 0,
  MAX: 7
};

const titles = [
  'Country On Him',
  'Raiders With The Carpet',
  'Guest Who Sold The Darkness',
  'Остров проклятых',
  'Побег из Шоушенка',
  'Зеленая миля',
  '1+1',
  'Терминатор'
];

const Rating = {
  MIN: 5,
  MAX: 10
};

const Runtime = {
  MIN: 60,
  MAX: 180
};

const ageRating = ['0+', '3+', '13+', '18+'];

const posters = [
  'images/posters/made-for-each-other.png',
  'images/posters/popeye-meets-sinbad.png',
  'images/posters/sagebrush-trail.jpg',
  'images/posters/santa-claus-conquers-the-martians.jpg',
  'images/posters/the-dance-of-life.jpg',
  'images/posters/the-great-flamarion.jpg',
  'images/posters/the-man-with-the-golden-arm.jpg',
];

const names = [
  'Alice',
  'Ivan',
  'Sergey',
  'Dakota',
  'Nevada',
  'Fedor'
];

const surnames = [
  'Makoveev',
  'Ivanov',
  'Romanov',
  'Lee',
  'James',
  'Walker'
];

const genres = [
  'Animation',
  'Action',
  'Adventure',
  'Comedy',
  'Family',
  'Horror',
  'Thriller',
];

const countries = ['USA', 'Russia', 'Germany', 'Finland', 'France', 'Spain', 'Italy', 'China', 'Japan'];
const emotions = ['smile', 'sleeping', 'puke', 'angry'];

const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.';

const comment = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.';


export { FILM_COUNT, MAX_COMMENTS_ON_FILM, NamesCount, YearsDuration, DaysDuration, Runtime, Rating, titles, posters, ageRating, names, surnames, countries, emotions, description, comment, genres };
