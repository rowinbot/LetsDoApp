import React, { Component } from 'react';
import { 
  TextInput, 
  StyleSheet 
} from 'react-native';

import { connect } from 'react-redux';
import { alphaHexStyle } from '../helpers/Styles'

class LoginInput extends Component<{}> {
  render() {
    return (
      <TextInput
        {...this.props}
        style={[
          styles.input, 
          this.props.colors.colorText, 
          alphaHexStyle(
            "borderColor", 
            this.props.colors.colorPrimary, 
            0.4
          )
        ]}
        disableFullscreenUI={true}
        underlineColorAndroid={'transparent'}
        placeholderTextColor={alphaHexStyle("none", this.props.colors.colorAccent, 0.5)}
        selectionColor={alphaHexStyle("none", this.props.colors.colorAccent, 0.2)}
        selectTextOnFocus={false}
        returnKeyType={'next'}
        />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    colors: state.colors.ui
  };
}

export default connect(
  mapStateToProps
)(LoginInput);

const styles = StyleSheet.create({
  input: {
    width: 250,
    height: 40,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 50,
    borderWidth: 2,
    fontSize: 17,
    marginTop: 10,
    textDecorationLine: 'none'
  }
});