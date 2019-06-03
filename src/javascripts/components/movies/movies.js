// import movieData from '../../helpers/data/moviesData';
import util from '../../helpers/util';
import 'bootstrap';

const movieDomStringBuilder = () => {
  let domstring = '';
  domstring += '<h2>MOVIES</h2>';
  util.printToDom('movies', domstring);
};

export default { movieDomStringBuilder };
