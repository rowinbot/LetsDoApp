import React, { Component } from 'react';

import { 
  Text,
  TextInput,
  View,
  TouchableHighlight
} from 'react-native';

import { Actions } from 'react-native-router-flux'
import PropTypes from 'prop-types';
import LoginInput from '../../controls/LoginInput'
import GradientScrollView from '../../controls/GradientScrollView'
import TopBar from '../../controls/TopBar'

import { alphaHex } from '../../helpers/Styles'

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
      <GradientScrollView>
        <TopBar title={strings.titleMain} />
      </GradientScrollView>
    );
  }
}