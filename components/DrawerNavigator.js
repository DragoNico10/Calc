import React from 'react'
import { Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import Calculator from '../screens/Calc.js'
import History from '../screens/History'
import Options from '../screens/Options'

const Drawer=createDrawerNavigator()

const DrawerNavigator=()=>{
  return(
    <NavigationContainer>
      <Drawer.Navigator initialRoute='Calculator'>
        <Drawer.Screen name='Calculator' component={Calculator}/>
        <Drawer.Screen name='History' component={History}/>
        <Drawer.Screen name='Options' component={Options} options={{}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default DrawerNavigator;