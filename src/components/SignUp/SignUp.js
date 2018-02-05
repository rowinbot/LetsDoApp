import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import { Actions } from 'react-native-router-flux'

import LinearGradient from 'react-native-linear-gradient';

import LoginInput from '../../controls/LoginInput'
import BorderedButton from '../../controls/buttons/BorderedButton'
import BackgroundButton from '../../controls/buttons/BackgroundButton'
import UserPicker from '../../controls/UserPicker'
import PropTypes from 'prop-types';

import styles from './styles';
import strings from './strings'

export default class SignUp extends Component<{}> {
  constructor(props) {
    super(props);
    
    this.state = {
      user: {
        name: "",
        userName: "",
        email: "",
        password: ""
      }
    }
  }
  
  static propTypes = {
    ui: PropTypes.object.isRequired,
    onChangeUserType: PropTypes.func.isRequired
  };
  
  render() {
    const changeUserType = this.props.onChangeUserType,
          ui             = this.props.ui;
                        
    return (
      <ScrollView 
        style={ui.colorBackgroud}
        contentContainerStyle={styles.containerScrollView}
        keyboardShouldPersistTaps={"handled"}
        >
        <Text style={[styles.titleMain, ui.colorText]}>
          {strings.titleMain}
        </Text>
        
        <UserPicker 
          handler={
            (number) => changeUserType(number)
          } />
        
        <BorderedButton
          handler={ (e) => { Actions.signIn() } }
          textSize={20}
          text={strings.buttonSignIn}/>
        
        <LoginInput
          onChange={e => this.setState({user: { ...this.state.user, name: e.nativeEvent.text }})}
          placeholder="NAME"
          value={this.state.user.name}/>
          
        <LoginInput
          onChange={e => this.setState({user: { ...this.state.user, userName: e.nativeEvent.text }})}
          placeholder="USER NAME"
          value={this.state.user.userName}/>
            
        <LoginInput
          onChange={e => this.setState({user: { ...this.state.user, email: e.nativeEvent.text }})}
          placeholder="EMAIL"
          value={this.state.user.email}/>
          
        <LoginInput
          onChange={e => this.setState({user: { ...this.state.user, password: e.nativeEvent.text }})}
          placeholder="PASSWORD"
          value={this.state.user.password} 
          secureTextEntry={true}/>

        <BackgroundButton
          handler={ (e) => { Actions.home() } }
          text={strings.buttonSignUp}/>
      </ScrollView>
    );
  }
}