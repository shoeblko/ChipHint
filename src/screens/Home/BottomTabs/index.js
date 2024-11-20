import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();
import DashboardScreen from '../../Dashboard';
import NotificationsScreen from '../../Notifications';
import RepurchaseScreen from '../../Repurchase';
import TeamScreen from '../../Team';

// Bottom Tab Navigation
const BottomTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: {
                    textTransform: 'uppercase', // This will make the text capitalized
                    marginTop: 2,
                    fontSize: 8, // You can adjust the font size as needed
                },
                headerShown: false, // Disable header for Bottom Tabs
                tabBarStyle: { backgroundColor: '#02448A' },
                tabBarActiveTintColor: '#fff',
            }}
        >
            <Tab.Screen name="Dashboard" component={DashboardScreen} options={{
                tabBarLabel: 'Dashboard',
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={require('../../../assets/icons/tabs/ic_dashboard.png')} // Your custom icon
                        style={{
                            width: 24,
                            height: 24,
                            tintColor: focused ? '#02448A' : '#C7C7C7', // Change color based on focus state
                        }}
                    />
                ),
            }} />
           
            <Tab.Screen name="Repurchase" component={RepurchaseScreen} options={{
                tabBarLabel: 'Repurchase',
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={require('../../../assets/icons/tabs/ic_purchase.png')} // Your custom icon
                        style={{
                            width: 24,
                            height: 24,
                            tintColor: focused ? '#02448A' : '#C7C7C7', // Change color based on focus state
                        }}
                    />
                ),
            }} />
            <Tab.Screen name="Team" component={TeamScreen} options={{
                tabBarLabel: 'Team',
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={require('../../../assets/icons/tabs/ic_team.png')} // Your custom icon
                        style={{
                            width: 24,
                            height: 24,
                            tintColor: focused ? '#02448A' : '#C7C7C7', // Change color based on focus state
                        }}
                    />
                ),
            }} />
            <Tab.Screen name="Notification" component={NotificationsScreen} options={{
                tabBarLabel: 'Notification',
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={require('../../../assets/icons/tabs/ic_notification.png')} // Your custom icon
                        style={{
                            width: 24,
                            height: 24,
                            tintColor: focused ? '#02448A' : '#C7C7C7', // Change color based on focus state
                        }}
                    />
                ),
            }} />
        </Tab.Navigator>
    );
};



export default BottomTabs;
