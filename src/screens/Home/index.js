import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabs from './BottomTabs';
import ProfileScreen from '../Profile';
import SupportScreen from '../Support';
import MemberScreen from '../Member';

const Drawer = createDrawerNavigator();

// Main Home Component
const Home = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#f8f8f8',
          width: 250,
        },
      }}
    >
      <Drawer.Screen name="Home" component={BottomTabs} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Support" component={SupportScreen} />
      <Drawer.Screen name="Member" component={MemberScreen} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Home;
