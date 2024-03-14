import { getRandomValue, getRandomInteger } from '../utils';
import {
  names,
  surnames,
  comment,
  DaysDuration,
  emotions
} from './const';

const getDate = () => {
  const date = new Date;
  date.setDate(
    date.getDate() - getRandomInteger(DaysDuration.MIN, DaysDuration.MAX)
  );
  return date.toISOString();
};

const generateComment = () => ({
  author: `${getRandomValue(names)} ${getRandomValue(surnames)}`,
  comment,
  date: getDate(),
  emotion: getRandomValue(emotions),
});

const getCommmentCount = (films) => films.reduce((acum, film) => acum + film.comments.length, 0);


const generateComments = (films) => {
  const commentsCount = getCommmentCount(films);
  return Array.from({ length: commentsCount }, (_value, index) => {
    const comments = generateComment();
    return {
      id: String(index + 1),
      ...comments
    };
  });
};

export { generateComments };
