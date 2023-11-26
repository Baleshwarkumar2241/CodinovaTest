import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

const InputText = props => {
  const {placeholder, value, onChangeText, error, lableName,isNumber} = props;
  const handleTextChange = (text) => {
    if (isNumber && !/^\d+$/.test(text)) {
      return; 
    }

    onChangeText(text);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.labelStyle}>{lableName}</Text>
      <View style={styles.inputView}>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={handleTextChange}
          style={styles.input}
        />
      </View>
      {/* {error && <Text style={styles.errortext}>{error}</Text>} */}
      {error ? <Text style={styles.errortext}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: 'green',
    height: 45,
    opacity: 0.7,
  },
  input: {
    flex: 1,
    color:"#1E1E1E"
  },
  labelStyle:{
    fontSize: 14,
    color: '#1E1E1E',
},
  errortext: {
    color: 'red',
    // marginVertical: 3,
  },
});

export default InputText;
