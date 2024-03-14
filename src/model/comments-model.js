import { generateComments } from '../mock/comments';

export default class CommentsModel {
  filmsModel = null;
  allComments = [];
  comments = [];
  constructor(filmsModel) {
    this.filmsModel = filmsModel;
    this.generateAllComments();
  }

  generateAllComments = () => {
    this.allComments = generateComments(this.filmsModel.get());
  };

  get = (film) => {
    this.comments = film.comments.map((filmId) => this.allComments.find((comment) => (comment.id === filmId)));
    return this.comments;
  };

}
