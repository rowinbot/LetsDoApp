import React, { Component } from 'react';
import { 
  TouchableOpacity, 
  View,
  Text,
  StyleSheet
} from 'react-native';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { alphaHexStyle } from '../../helpers/Styles'

class BackgroundButton extends Component<{}> {
  static propTypes = {
    handler: PropTypes.func.isRequired,
  }
  
  render() {          
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          style={[styles.button, alphaHexStyle("backgroundColor", this.props.colors.colorPrimary, 0.4)]}
          onPress={ (e) => { this.props.handler(e) } }>
          
          <Text style={[styles.text, this.props.colors.colorText, this.props.textSize != undefined ? { fontSize: this.props.textSize } : { fontSize: 26 }]}>
            {this.props.text}
          </Text>
          
        </TouchableOpacity>
      </View>
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
)(BackgroundButton);

const styles = StyleSheet.create({
  container: {
    height: 60,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 40,
    borderRadius: 25,
    borderWidth: 0,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  text: {
    fontFamily: 'Montserrat-Medium',
  }
});