import movieData from '../../helpers/data/moviesData';
import util from '../../helpers/util';
import 'bootstrap';

const movieDomStringBuilder = () => {
  movieData.getMovies().then((movies) => {
    let domString = '';
    movies.forEach((movie) => {
      domString += `<h1>${movie.title}</h1>`;
      domString += `<img src = ${movie.imageUrl}>`;
      domString += `<h2>${movie.movieRating}</h2>`;
    });
    util.printToDom('movies', domString);
  }).catch(err => console.error('could not get movie', err));
};

export default { movieDomStringBuilder };
