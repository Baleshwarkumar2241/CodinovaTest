import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomBtn from '../Compnents/CustomBtn';


const AddEmp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <CustomBtn title="ADD EMPLOYEE" onPress={()=>navigation.navigate("AddEmpScreen")} style={{backgroundColor:'darkgreen'}} textstyle={{color: 'white',
    fontSize: 18,fontWeight:700}} />
    </View>
  );
};

export default AddEmp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
