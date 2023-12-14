import {
  View,
  Text,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const StoryView = ({route}) => {
  console.log(route.params);
  const selectedItem = route.params.item;
  const navigation = useNavigation();
  const currentTime = new Date();
  const currentHr = currentTime.getHours();
  const storyTime = currentHr - selectedItem.story.time;
  const screenHeight = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window').width;
  useEffect(() => {
    const timeOut = setTimeout(() => {
      navigation.goBack();
    }, 2000);
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <View
        style={{
          flexDirection: 'row',
          paddingLeft: 12,
          paddingTop: 12,
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}>
        <Image
          style={{height: 40, width: 40, borderRadius: 20, marginRight: 10}}
          source={selectedItem.profile}
        />
        <Text style={{fontSize: 18, fontWeight: '700', color: 'white'}}>
          {selectedItem.name}
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            marginLeft: 10,
            color: 'white',
          }}>
          {storyTime}Hr
        </Text>
      </View>
      <View style={{position: 'absolute'}}>
        <Image
          style={{
            height: screenHeight - 90,
            width: screenWidth,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }}
          source={selectedItem.story.image}
        />
        <View
          style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: 'white',
              width: 285,
              paddingHorizontal: 15,
              borderRadius: 30,
              marginHorizontal: 20,
            }}
            placeholder="Message"
            placeholderTextColor={'white'}
          />
          <TouchableOpacity>
            <Image
              style={{tintColor: 'white', height: 20, width: 20}}
              source={require('../assests/message.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default StoryView;
