import {View, Text, Image, TouchableOpacity, Modal} from 'react-native';
import React, {useState} from 'react';

const ProfileHeader = () => {
  const [open, setOpen] = useState(false);
  const handleModal = () => {
    setOpen(!open);
  };
  return (
    <View style={{paddingHorizontal: 15, paddingTop: 10, height: 55}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 24, fontWeight: '500', color: 'black'}}>
          alokbharti09
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity>
            <Image
              style={{height: 24, width: 24, marginRight: 15}}
              source={require('../assests/footer/post.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleModal}>
            <Image
              style={{height: 23, width: 23, tintColor: 'black'}}
              source={require('../assests/Menu/menu.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={open}
        onRequestClose={() => {
          setOpen(!open);
        }}>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <View
            style={{
              backgroundColor:'#ffffff'
              ,
              height: 500,
              borderTopStartRadius: 25,
              borderTopEndRadius: 25,
            }}>
            <TouchableOpacity onPress={handleModal}>
              <Image
                style={{
                  alignSelf: 'center',
                  height: 5,
                  width: 70,
                  marginTop: 20,
                }}
                source={require('../assests/modalClose.png')}
              />
              <View style={{paddingHorizontal: 20}}>
                <TouchableOpacity style={{borderBottomWidth: 1}}>
                  <Text style={{fontSize: 18, paddingVertical: 15}}>
                    Setting and privacy
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderBottomWidth: 1}}>
                  <Text style={{fontSize: 18, paddingVertical: 15}}>
                    Your Activity
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderBottomWidth: 1}}>
                  <Text style={{fontSize: 18, paddingVertical: 15}}>
                    Archive
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderBottomWidth: 1}}>
                  <Text style={{fontSize: 18, paddingVertical: 15}}>Saved</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderBottomWidth: 1}}>
                  <Text style={{fontSize: 18, paddingVertical: 15}}>
                    SuperVision
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderBottomWidth: 1}}>
                  <Text style={{fontSize: 18, paddingVertical: 15}}>
                    Meta Verified
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderBottomWidth: 1}}>
                  <Text style={{fontSize: 18, paddingVertical: 15}}>
                    Closed Friends
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderBottomWidth: 1}}>
                  <Text style={{fontSize: 18, paddingVertical: 15}}>
                    Favourites
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ProfileHeader;
