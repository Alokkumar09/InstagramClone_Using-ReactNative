import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import Stories from '../../components/Stories';
import Post from '../../components/Post';

const Dashboard = () => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View style={{flex: 1}}>
        <Header />
        <Stories />
        <Post />
      </View>
    </ScrollView>
  );
};

export default Dashboard;
