import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { Store } from '../../../Redux/Store';
import CartScreen from './CartTabScreens/CartScreen'


const Stack = createNativeStackNavigator();
const CartTab = () => {
  return (
    <Provider store={Store}>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name='Home' component={CartScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
    </Provider>
  )
}

export default CartTab