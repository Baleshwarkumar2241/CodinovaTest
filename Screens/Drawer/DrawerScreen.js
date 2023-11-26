import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import EmpListScreen from '../EmpListScreen';
import CustomDrawerContent from './CustomDrawer';

const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
  return (
    <Drawer.Navigator
    drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="EmpList"
        component={EmpListScreen}
        options={{
          headerShown:false,
          animation: 'fade',
          
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerScreen;
