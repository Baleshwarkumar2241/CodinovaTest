import {FlatList, StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EmpDataList from './EmpDataList';

const EmpListScreen = ({navigation}) => {
  const [ListData, setListData] = React.useState([]);

  const removeDuplicatesData = (array, key) => {
    return array.filter(
      (item, index, self) =>
        index === self.findIndex(t => t[key] === item[key]),
    );
  };

  const GetData = async () => {
    const storedData = await AsyncStorage.getItem('showList');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      const uniqueData = removeDuplicatesData(parsedData, 'fname');

      const sortedData = uniqueData.sort((a, b) => {
        const fnameComparison = a.fname.localeCompare(b.fname);
        if (fnameComparison !== 0) {
          return fnameComparison;
        }
        return a.lname.localeCompare(b.lname);
      });
  
      setListData(sortedData);
    } else {
      console.log('No data');
    }
  };

  useEffect(() => {
    GetData();
  }, []);

  // console.log('listData>>>>>', ListData);

  const Header = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'green',
          paddingHorizontal: 13,
          paddingVertical: 18,
        }}>
        <Pressable onPress={() => navigation.openDrawer()}>
          <Image
            source={require('../assest/menu.png')}
            resizeMode="contain"
            style={{
              width: 40,
              height: 40,
              alignSelf: 'center',
            }}
          />
        </Pressable>
        <Text
          style={{
            fontSize: 23,
            fontWeight: 600,
            color: '#000',
            alignSelf: 'center',
          }}>
          Inbox
        </Text>
        <Image
          source={require('../assest/dots.png')}
          resizeMode="contain"
          style={{
            width: 50,
            height: 30,
            alignSelf: 'center',
          }}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={ListData}
        style={{marginBottom:10}}
        renderItem={({item, index}) => {
          return (
            <View style={{flex: 1}}>
              <EmpDataList data={item} index={index} />
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
      />
      <Pressable
        onPress={() => navigation.navigate('AddEmpScreen')}
        style={{position: 'absolute', bottom: 0, right: 0}}>
        <Image
          source={require('../assest/fab.png')}
          resizeMode="contain"
          style={{
            width: 130,
            height: 130,
            alignSelf: 'center',
          }}
        />
      </Pressable>
    </View>
  );
};

export default EmpListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
