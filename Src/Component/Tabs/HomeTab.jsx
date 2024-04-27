import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './HomeTabScreens/Home';
import { Provider } from 'react-redux';
import { Store } from '../../../Redux/Store';
import ProductDetails from './HomeTabScreens/ProductDetails';
import Seeall from './HomeTabScreens/Seeall';


const Stack = createNativeStackNavigator();

const HomeTab = () => {
  return (
    <Provider store={Store}>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="sellall" component={Seeall} options={{headerShown:true,title:'See All products'}} />

    </Stack.Navigator>
    </Provider>
  )
}

export default HomeTab