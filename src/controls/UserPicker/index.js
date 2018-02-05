import React, { Component } from 'react';
import { 
  View, 
  StyleSheet 
} from 'react-native';

import UserTypeButton from './UserTypeButton'
import { connect } from 'react-redux';

class UserPicker extends Component<{}> {
  render() {
    const colors = ["one", "two", "three"]
    return (
      <View style={styles.containerColors}>
        {colors.map((color, i) =>
          <UserTypeButton
            colors={this.props.colors}
            number={color}
            handler={this.props.handler}
            key={i}
            />
        )}
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
)(UserPicker);

const styles = StyleSheet.create({
  containerColors: {
    width: 250,
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});