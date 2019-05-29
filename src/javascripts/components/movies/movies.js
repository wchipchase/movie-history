import movieData from '../../helpers/data/moviesData';
import util from '../../helpers/util';
import 'bootstrap';

const movieDomStringBuilder = (uid) => {
  movieData.getMovieByUid(uid).then((movies) => {
    let domString = '';
    movies.forEach((movie) => {
      domString += `<h1>${movie.title}</h1>`;
      domString += `<img src=${movie.imageUrl} />`;
      domString += `<h2>${movie.rating}</h2>`;
      domString += '<button class ="btn btn-info">Add Rating</button>';
    });
    util.printToDom('movie', domString);
  }).catch(err => console.error('could not get movie', err));
};

export default { movieDomStringBuilder };
