import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View
      style={{
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
      }}>
      <View>
        <Image
          style={{height: 28, width: 110}}
          source={require('../assests/insta1.png')}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={{marginRight: 15}}>
          <Image
            style={{height: 25, width: 25}}
            source={require('../assests/like.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{position: 'relative'}}>
            <Image
              style={{height: 25, width: 25}}
              source={require('../assests/message.png')}
            />
            <View style={{position: 'absolute'}}>
              <Text
                style={{
                  backgroundColor: 'red',
                  borderRadius: 15,
                  paddingHorizontal: 5,
                  bottom: 7,
                  left: 13,
                  color:"white"
                }}>
                5
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
