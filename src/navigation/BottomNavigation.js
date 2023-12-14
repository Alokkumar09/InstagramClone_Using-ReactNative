import {View, Text, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Reel from '../screens/dashboard/Reel';
import Dashboard from '../screens/dashboard/Dashboard';
import UserProfile from '../screens/dashboard/UserProfile';
import Search from '../screens/dashboard/Search';
import AddPost from '../screens/dashboard/AddPost';

const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{height: 25, width: 25}}
              source={
                focused
                  ? require('../assests/footer/Homefilled.png')
                  : require('../assests/footer/home.png')
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{height: 25, width: 25}}
              source={
                focused
                  ? require('../assests/footer/SearchFilled.png')
                  : require('../assests/footer/search.png')
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="AddPost"
        component={AddPost}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{height: 25, width: 25}}
              source={
                focused
                  ? require('../assests/footer/postFilled.png')
                  : require('../assests/footer/post.png')
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Reel"
        component={Reel}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{height: 25, width: 25}}
              source={
                focused
                  ? require('../assests/footer/reelFilled.png')
                  : require('../assests/footer/reel.png')
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={UserProfile}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{height: 25, width: 25}}
              source={
                focused
                  ? require('../assests/footer/userFilled.png')
                  : require('../assests/footer/user.png')
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
