import React, { Component } from 'react';
import { 
  ScrollView,
  StyleSheet
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient'

import { connect } from 'react-redux'
import { alphaHexStyle } from '../helpers/Styles'

class GradientScrollView extends Component<{}> {  
  render() {   
    const ui = this.props.colors;
               
    return (
      <ScrollView 
        style={ui.colorBackgroud}
        contentContainerStyle={styles.scrollView}
        keyboardShouldPersistTaps={"always"}
        >
        <LinearGradient 
          start={{x: 1.0, y: 0.5}} end={{x: 0.5, y: 0.0}}
          colors={[ui.colorPrimary, ui.colorDark]}
          style={styles.linearGradient}>
          
          {this.props.children}
          
        </LinearGradient>
      </ScrollView>
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
)(GradientScrollView)

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1
  },
  linearGradient: {
    flex: 1,
    alignItems: 'center'
  }
})