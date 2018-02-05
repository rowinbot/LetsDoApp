import React, { Component } from 'react';
import { 
  BackHandler 
} from 'react-native';

const withBackHandler = (WrappedComponent) => {
  class Wrapper extends React.PureComponent {
    componentDidMount() {
      BackHandler.addEventListener('hardwareBackPress', () => {console.log(this.props.navigation.goBack()); return true})
    }

    componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', () => {console.log(this.props.navigation.goBack()); return true})
    }
    
    render() {
      return (
        <WrappedComponent {...this.props}/>
      );
    }  
  }
  return Wrapper;
}

export default withBackHandler