import * as React from 'react';
import { Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

//Screens
import HomeScreen from './screens/HomeScreen'
import MaliciousScreen from './screens/MaliciousScreen'
import SubscriptionScreen from './screens/SubscriptionScreen'
import CarbonScreen from './screens/CarbonScreen';
import AccountScreen from './screens/AccountScreen';
import SubscribeDeleteScreen from './screens/SubscribeDeleteScreen';
import HomeErrorScreen from './screens/HomeErrorScreen';
import BulletinBoardScreen from './screens/BulletinBoardScreen';
import ServiceSurveyScreen from './screens/ServiceSurveyScreen';
import BulletinEdit from './screens/BulletinEdit';
import BulletinWriteScreen from './screens/BulletinWriteScreen';

//Screen names
const homeName = '홈';
const carbonName = '탄소';
const maliciousName = '악성';
const subscriptionName = '구독';
const bulletinName = '라운지';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

MainScreen = () => {
    return(
        <Tab.Navigator
            initialRouteName="Home"   
            tabBarOptions={{
                activeTintColor: 'black',
                inactiveTintColor: '#929292',
                labelStyle: {
                    fontSize: 14,
                    paddingTop: 12
                },
                tabStyle: {
                    backgroundColor: '#A3C89D',
                    height: 80,
                    padding: 20
                    
                }
            }}
            screenOptions = { 
                ({route}) => ({
                    tabBarLabel: route.name,
                    tabBarIcon: ({focused})=>(
                        TabBarIcon(focused, route.name)
                    )
                })
                
            }
            >

                <Tab.Screen name={homeName} component={HomeScreen} options={{headerShown: false}}></Tab.Screen>
                <Tab.Screen name={maliciousName} component={MaliciousScreen} options={{headerShown: false}}></Tab.Screen>
                <Tab.Screen name={subscriptionName} component={SubscriptionScreen} options={{headerShown: false}}></Tab.Screen>
                <Tab.Screen name={carbonName} component={CarbonScreen} options={{headerShown: false}}></Tab.Screen>
                <Tab.Screen name={bulletinName} component={BulletinBoardScreen} options={{headerShown: false}}></Tab.Screen>


            </Tab.Navigator>
    )
}

const TabBarIcon = (focused, name) => {
    let iconImagePath;

    if (name==='홈') {
        iconImagePath = require('../assets/pics/home_icon.png')
    } else if (name ==='악성') {
        iconImagePath = require('../assets/pics/malicious_icon.png')
    } else if (name ==='구독') {
        iconImagePath = require('../assets/pics/subscription_icon.png')
    } else if (name === '탄소') {
        iconImagePath = require('../assets/pics/carbon_icon.png')
    } else if (name === '라운지') {
        iconImagePath = require('../assets/pics/doggyLounge_logo.png')
    }

    return (
        <Image style={{
            resizeMode: true,
            width: focused ? 37 : 30,
            height: focused ? 37 : 30,
            tintColor: focused ? 'black' : 'grey'
        }}
        source = {iconImagePath}
        />
    )
}

export default function MainContainer(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="GooDoggy" component={MainScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Account_Page" component={AccountScreen}/>
                <Stack.Screen name="Home_Error_Page" component={HomeErrorScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Red_Delete" component={SubscribeDeleteScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Survey_Page" component={ServiceSurveyScreen} options={{headerShown: false}} />
                <Stack.Screen name="BulletinEdit" component={BulletinEdit} options={{headerShown: false}}/>
                <Stack.Screen name="BulletinWrite" component={BulletinWriteScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}