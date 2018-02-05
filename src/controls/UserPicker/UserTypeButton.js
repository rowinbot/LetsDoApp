import React from 'react';
import { 
  TouchableOpacity, 
  View,
  StyleSheet
} from 'react-native';

import { capitalize } from '../../helpers/Text'

const UserTypeButton = (props) => {
  const { colors, number, handler } = props;
  return (
    <TouchableOpacity
      style={[
        styles.buttonUserType, 
        colors.colorButtons, 
        colors.colorBorder, 
        styles[`buttonColor${capitalize(number)}`]
      ]}
      onPress={ 
        () => { handler(number) } 
      }>
      
      <View></View>
      
    </TouchableOpacity>
  );
}

export default UserTypeButton

const styles = StyleSheet.create({
  buttonUserType: {
    width: 65, 
    height: 65, 
    borderRadius: 50,
    borderWidth: 1
  },
  buttonColorOne: {
    backgroundColor: '#FC5659'
  },
  buttonColorTwo: {
    backgroundColor: '#B664E3'
  },
  buttonColorThree: {
    backgroundColor: '#FFFFFF'
  }
});