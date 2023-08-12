import * as React from 'react';
import { View, Text, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screens
import HomeScreen from './screens/HomeScreen'
import MaliciousScreen from './screens/MaliciousScreen'
import SubscriptionScreen from './screens/SubscriptionScreen'
import CarbonScreen from './screens/CarbonScreen';

//Screen names
const homeName = '홈';
const carbonName = '탄소 발자국';
const maliciousName = ' 악성 메일';
const subscriptionName = '구독 메일';

const Tab = createBottomTabNavigator();

const TabBarIcon = (focused, name) => {
    let iconImagePath;

    if (name==='홈') {
        iconImagePath = require('../assets/favicon.png')
    } else if (name==='악성 메일') {
        iconImagePath = require('../assets/pics/malicious_icon.svg')
    } else if (name ==='구독 메일') {
        iconImagePath = require('../assets/pics/subscription_icon.svg')
    } else if (name === '탄소 발자국') {
        iconImagePath = require('../assets/pics/carbon_icon.svg')
    }

    return (
        <Image style={{
            width: focused ? 24 : 20,
            height: focused ? 24 : 20
        }}
        source = {iconImagePath}
        />
    )
}

export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName="Home"
            // screenOptions={{headerShown: false}}       
            tabBarOptions={{
                activeTintColor: 'black',
                inactiveTintColor: '#929292',
                labelStyle: {
                    fontSize: 12,
                    paddingTop: 12
                },
                tabStyle: {
                    backgroundColor: '#A3C89D',
                    height: 80,
                    padding: 20
                    
                }
            }}
            screenOptions={
                ({route}) => ({
                tabBarLabel: route.name,
                tabBarIcon: ({focused})=>(
                    TabBarIcon(focused, route.name)
                )
            })
        }
            >

                <Tab.Screen name={homeName} component={HomeScreen}></Tab.Screen>
                <Tab.Screen name={maliciousName} component={MaliciousScreen}></Tab.Screen>
                <Tab.Screen name={subscriptionName} component={SubscriptionScreen}></Tab.Screen>
                <Tab.Screen name={carbonName} component={CarbonScreen}></Tab.Screen>


            </Tab.Navigator>
        </NavigationContainer>
    )
}