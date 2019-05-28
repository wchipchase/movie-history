import firebase from 'firebase/app';
import Auth from './components/auth/auth';

import apiKeys from './helpers/data/apiKeys.json';

import 'bootstrap';

import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  Auth.authStringBuilder();
};

init();
