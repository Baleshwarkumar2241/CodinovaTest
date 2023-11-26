import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
  FlatList,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';

const {width, height} = Dimensions.get('window');

const EmpDataList = ({data, index}) => {
  const [isImage1Visible, setIsImage1Visible] = useState(false);
  const [favList, setFavList] = useState([]);
  const fL1 = data.Lname.charAt(0).toUpperCase();
  const fL2 = data.fname.trim().charAt(0).toUpperCase();
  let showList = [];

  const handleFabemp = async data => {
    setIsImage1Visible(!isImage1Visible);
    const storedData = await AsyncStorage.getItem('favList');
    if (storedData) {
      showList = JSON.parse(storedData);

      const isDuplicate = showList.some(item => item.fname === data.fname);

      if (!isDuplicate) {
        showList.push(data);
      } else {
        showList = showList.filter(item => item.fname !== data.fname);
      }
    } else {
      showList.push(data);
    }

    await AsyncStorage.setItem('favList', JSON.stringify(showList));
    setFavList(showList);
  };

  const getFavList = async () => {
    const storedFavList = await AsyncStorage.getItem('favList');
    if (storedFavList) {
      setFavList(JSON.parse(storedFavList));
    }
  };

  useEffect(() => {
    getFavList();
  }, []);

  const isFav = favList.some(item => item.fname === data.fname);

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <View
          style={styles.atarStyle}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: 'green',
              alignSelf: 'center',
              color: '#000',
            }}>
            {fL2}
            {fL1}
          </Text>
        </View>

        <View style={{marginStart: 10}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 500,
              alignSelf: 'center',
              color: '#000',
            }}>
            {data.fname} {data.Lname}
          </Text>
          <Text
            style={{
              fontSize: 13,
              fontWeight: 500,
              color: 'grey',
            }}>
            {data.JobTitle}
          </Text>
        </View>
      </View>

      <Pressable onPress={() => handleFabemp(data)} style={{}}>
        {isFav ? (
          <Image
            source={require('../assest/images.png')}
            resizeMode="contain"
            style={{
              width: 35,
              height: 35,
              alignSelf: 'center',
            }}
          />
        ) : (
          <Image
            source={require('../assest/w_star.png')}
            resizeMode="contain"
            style={{
              width: 35,
              height: 35,
              alignSelf: 'center',
            }}
          />
        )}
      </Pressable>
    </View>
  );
};

export default EmpDataList;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    backgroundColor: '#fff',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.4,
    elevation: 5,
    marginVertical: 6,
    borderRadius: 4,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  atarStyle: {
    backgroundColor: 'green',
    marginEnd: 10,
    padding: 10,
    borderRadius: 25,
    width: 50,
    height: 50,
    alignItems: 'center',
    alignSelf: 'center',
  }
});
