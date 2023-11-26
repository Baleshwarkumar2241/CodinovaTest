import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './Screens/SplashScreen';
import AddEmp from './Screens/AddEmp';
import AddEmpScreen from './Screens/AddEmpScreen';
import EmpListScreen from './Screens/EmpListScreen';
import DrawerScreen from './Screens/Drawer/DrawerScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={SplashScreen}
          name="login1"
          options={{headerShown: false, animation: 'fade'}}
        />
        <Stack.Screen
          component={AddEmp}
          name="AddEmp"
          options={{headerShown: false, animation: 'fade'}}
        />
        <Stack.Screen
          component={AddEmpScreen}
          name="AddEmpScreen"
          options={{headerShown: false, animation: 'fade'}}
        />
        <Stack.Screen
          component={DrawerScreen}
          name="DrawerScreen"
          options={{headerShown: false, animation: 'fade'}}
        />

        <Stack.Screen
          component={EmpListScreen}
          name="EmpList"
          options={{ animation: 'fade'}}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})