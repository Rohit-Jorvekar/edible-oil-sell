import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileHome from './ProfileTabScreens/ProfileHome';
import Editprofile from './ProfileTabScreens/UpdateProfile';
import UpdateProfile from './ProfileTabScreens/UpdateProfile';


const Stack = createNativeStackNavigator();

const ProfileTab= () => {
  return (
 
    <Stack.Navigator initialRouteName='Profilehome' screenOptions={{headerShown:false}}>

      <Stack.Screen name='Profilehome' component={ProfileHome} options={{ headerShown: false }} />
      <Stack.Screen name="UpdateProfile" component={UpdateProfile} />

    </Stack.Navigator>
    
  )
}

export default ProfileTab