import firebase from 'firebase/app';
import 'firebase/auth';

import util from '../../helpers/util';

import googleImage from './login-google.png';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const authStringBuilder = () => {
  let domString = '<button id="google-auth" class ="btn btn-danger">';
  domString += `<img src=${googleImage} />`;
  domString += '</button>';
  util.printToDom('auth', domString);
  console.error('testing domstring');
  document.getElementById('google-auth').addEventListener('click', signMeIn);
};

export default { authStringBuilder };
