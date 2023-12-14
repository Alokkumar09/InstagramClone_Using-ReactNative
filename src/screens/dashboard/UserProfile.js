import {View, Text} from 'react-native';
import React from 'react';
import ProfileHeader from '../../components/ProfileHeader';
import ProfileDetails from '../../components/ProfileDetails';
import ProfilePost from '../../components/ProfilePost';

const UserProfile = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ProfileHeader />
      <ProfileDetails />
      <ProfilePost />
    </View>
  );
};

export default UserProfile;
