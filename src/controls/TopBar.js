import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  Text
} from 'react-native';

import { connect } from 'react-redux'
import { alphaHex, darkerColor } from '../helpers/Styles'

class TopBar extends Component<{}> {  
  render() {   
    const ui = this.props.colors;
               
    return (
      <View 
        style={[
          styles.topBar, 
          {backgroundColor: ui.colorDark}
        ]}>
        <Text style={[styles.title, ui.colorText]}>
          {this.props.title}
        </Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    colors: state.colors.ui
  }
}

export default connect(
  mapStateToProps
)(TopBar)

const styles = StyleSheet.create({
  title: {
    width: 200,
    fontSize: 24,
    marginTop: 25,
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center'
  },
  topBar: {
    alignSelf: 'stretch',
    alignItems: 'center',
    height: 75,
    marginTop: 0,
  }
})