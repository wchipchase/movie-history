import firebase from 'firebase/app';
import auth from './components/auth/auth';
import navbar from './components/navbar/navbar';
import authData from './helpers/data/authData';

import apiKeys from './helpers/data/apiKeys.json';

import 'bootstrap';

import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  auth.authStringBuilder();
  authData.checkLoginStatus();
  navbar.navbarEvents();
};

init();
