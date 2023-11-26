import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
const {width, height} = Dimensions.get('window');
const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('AddEmp');
    }, 1000);
  });
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center',
      }}>
      <Image
        source={require('../assest/download.png')}
        resizeMode="contain"
        style={{width: width / 1.3}}
      />
    </View>
  );
};

export default SplashScreen

const styles = StyleSheet.create({});
