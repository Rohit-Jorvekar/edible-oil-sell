import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabButton from './Src/Component/TabButton';
import HomeTab from './Src/Component/Tabs/HomeTab';
import LikeTab from './Src/Component/Tabs/LikeTab';
import CartTab from './Src/Component/Tabs/CartTab';
import ProfileTab from './Src/Component/Tabs/ProfileTab';
import Signup from './Src/Screens/Signup';
import Login from './Src/Screens/Login';
import Splash from './Src/Screens/Splash';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => {
  const tabs = [
    {
      id: 1,
      title: 'Home',
      screen: 'Home',
      icon: 'home',
      Component: HomeTab,
    },
    {
      id: 2,
      title: 'Likes',
      screen: 'Likes',
      icon: 'heart',
      Component: LikeTab,
    },
    {
      id: 3,
      title: 'Cart',
      screen: 'Cart',
      icon: 'cart',
      Component: CartTab,
    },
    {
      id: 4,
      title: 'My Account',
      screen: 'Profile',
      icon: 'account',
      Component: ProfileTab,
    },
  ];

  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      {tabs.map((item, index) => (
        <Tab.Screen
          key={item.id}
          name={item.screen}
          component={item.Component}
          options={{
            tabBarShowLabel: false,
            tabBarButton: (props) => <TabButton item={item} {...props} />,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Tabs' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Splash' component={Splash}/>
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name="Tabs" component={TabNavigator} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flex: 1,
    height: 70,
    position: 'absolute',
    bottom: 25,
    marginHorizontal: 16,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#dadada',
  },
});

export default App;
