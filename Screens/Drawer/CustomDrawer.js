import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const CustomDrawerContent = ({navigation}) => {
  const [ListData, setListData] = React.useState([]);
  const [febData,setFebData]=React.useState([])
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
      setListData(uniqueData);
    } else {
      console.log('No data');
    }
  };

  const GetNewItem=async()=>{
    const newItem = await AsyncStorage.getItem('favList')
    if (newItem) {
      const parsedData = JSON.parse(newItem);
      const uniqueData = removeDuplicatesData(parsedData, 'fname');
      setFebData(uniqueData);
    } else {
      console.log('No data');
    }
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      GetData();
      GetNewItem()
    });

    GetData();
    GetNewItem()
    return unsubscribe;
  }, [navigation]);

  useEffect(()=>{
    GetNewItem()
  })
   

  
 

  return (
    <View style={{marginTop: 30, paddingHorizontal: 15}}>
      <Text style={{color:"green", fontSize:16, fontWeight:'800', marginBottom:30}}>TOTAL NUMBER OF EMPLOYEE</Text>
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
        <Text style={{fontSize: 16, color: '#000'}}>
          Total number of Employee :{' '}
        </Text>
        <Text style={{fontSize: 16, color: '#000'}}>{ListData.length}</Text>
      </View>

      <View
        style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
        <Text style={{fontSize: 16, color: '#000'}}>
          Total number of favorites :{' '}
        </Text>
        <Text style={{fontSize: 16, color: '#000'}}>{febData.length}</Text>
      </View>
    </View>
  );
};

export default CustomDrawerContent;
