import React from 'react';
import colors from '../configs/colors';
import LoginScreen from '../Screens/LoginScreen';
import HomeScreen from '../Screens/HomeScreen';
import AppIcon from 'react-native-vector-icons/AntDesign';
import CartIcon from 'react-native-vector-icons/Ionicons';
import DotsIcon from 'react-native-vector-icons/Ionicons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.activeIcon,
        tabBarInactiveTintColor: colors.inactiveIcons,
        tabBarStyle: {position: 'absolute'},
      }}
      initialRouteName="Home">
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <AppIcon name="appstore1" color={color} size={25} />
          ),
        }}
        name="Login"
        component={LoginScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <CartIcon name="cart-outline" color={color} size={30} />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <DotsIcon name="ellipsis-vertical-sharp" color={color} size={30} />
          ),
        }}
        name="Logout"
        component={LoginScreen}
      />
    </Tab.Navigator>
  );
}
export default TabNavigation;
