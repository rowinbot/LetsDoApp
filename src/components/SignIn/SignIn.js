import React, { Component } from 'react';

import { 
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableHighlight
} from 'react-native';

import { Actions } from 'react-native-router-flux'
import LoginInput from '../../controls/LoginInput'
import BackgroundButton from '../../controls/buttons/BackgroundButton'
import PropTypes from 'prop-types';

import styles from './styles';
import strings from './strings'

export default class SignIn extends Component<{}> {
  constructor(props) {
    super(props);
    
    this.state = {
      user: {
        userName: "",
        password: ""
      }
    }
  }
  
  static propTypes = {
    ui: PropTypes.object.isRequired
  };
  
  render() {   
    const ui = this.props.ui;
               
    return (
      <ScrollView 
        style={ui.colorBackgroud}
        contentContainerStyle={styles.containerScrollView}
        keyboardShouldPersistTaps={"handled"}
        >
        <Text style={[styles.titleMain, ui.colorText]}>
          {strings.titleMain}
        </Text>
        
        <LoginInput
          onChange={e => this.setState({user: { ...this.state.user, userName: e.nativeEvent.text }})}
          placeholder="USER NAME"
          value={this.state.user.userName}/>
            
        <LoginInput
          onChange={e => this.setState({user: { ...this.state.user, password: e.nativeEvent.text }})}
          placeholder="PASSWORD"
          value={this.state.user.password} 
          secureTextEntry={true}/>

        <BackgroundButton
          handler={ () => {  } }
          text={strings.buttonSignIn}/>
      </ScrollView>
    );
  }
}