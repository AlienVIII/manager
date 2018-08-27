import React, {Component} from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyDdwQPdRFSTQeSXwIYivo9nMclrGiD6FsQ",
      authDomain: "relia-1d24f.firebaseapp.com",
      databaseURL: "https://relia-1d24f.firebaseio.com",
      projectId: "relia-1d24f",
      storageBucket: "relia-1d24f.appspot.com",
      messagingSenderId: "178837194505"
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(thunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
