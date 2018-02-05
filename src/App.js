/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Actions, Scene, Router } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import SplashScreen from 'react-native-splash-screen'

import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Home from './components/Home'

const RouterWithRedux = connect()(Router);
import reducers from './reducers';

const store = compose(
  applyMiddleware(thunk)
)(createStore)(reducers);

/** Scenes Configuration **/
const SignUpScene = connect()(SignUp);
const SignInScene = connect()(SignIn);
const HomeScene = connect()(Home);

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="signUp" component={SignUpScene} title="SignUp" initial={true} hideNavBar={true}/>
    <Scene key="signIn" component={SignInScene} title="SignIn" hideNavBar={true}/>
    <Scene key="home" component={HomeScene} title="Home" hideNavBar={true}/>
  </Scene>
);

export default class App extends Component<{}> {
  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux scenes={scenes}/>
      </Provider>
    );
  }
}