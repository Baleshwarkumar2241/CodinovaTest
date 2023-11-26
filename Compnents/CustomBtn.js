import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';

const {width} = Dimensions.get('window');
const CustomBtn = props => {
  const {
    title,
    onPress,
    style,
    textstyle,
    leftComponent = false,
    disabled,
  } = props;
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={[styles.buttonText, textstyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomBtn;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#8278FC',
    padding: 10,
    height: 48,
    width: width / 1.1,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    
  },
});
