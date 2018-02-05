import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
/*const App = require('../App')*/

import { Actions, Scene, Router } from 'react-native-router-flux'
import { connect, Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import SplashScreen from 'react-native-splash-screen'

jest.mock('react-native-splash-screen')

import SignUp from '../src/components/SignUp'
import SignIn from '../src/components/SignIn'
import Home from '../src/components/Home'

const RouterWithRedux = connect()(Router)
import reducers from '../src/reducers'

const store = compose(
  applyMiddleware(thunk)
)(createStore)(reducers)

const SignUpScene = connect()(SignUp)
const SignInScene = connect()(SignIn)
const HomeScene = connect()(Home)

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="signUp" component={SignUpScene} title="SignUp" initial={true} hideNavBar={true}/>
    <Scene key="signIn" component={SignInScene} title="SignIn" hideNavBar={true}/>
    <Scene key="home" component={HomeScene} title="Home" hideNavBar={true}/>
  </Scene>
);

class App extends React.Component<{}> {
  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide()
  }

  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux scenes={scenes}/>
      </Provider>
    );
  }
}

describe('App', () => {
  it('renders correctly', () => {
    const instance = renderer.create(<App/>).toJSON();

    expect(instance).toMatchSnapshot();
  });
});