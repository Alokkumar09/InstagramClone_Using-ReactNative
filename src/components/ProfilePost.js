import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React, {useState} from 'react';
import {UserData, typeData} from '../utils/Userdata';
import {useNavigation} from '@react-navigation/native';

const ProfilePost = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(1);

  const renderItem = item => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('PostView')}>
        <View>
          <Image
            style={{height: 130.9, width: 130.9}}
            source={item.item.post.image}
          />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{marginTop: 20}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        {typeData.map(item => {
          return (
            <View
              key={item.id}
              style={{
                width: 180,
                paddingBottom: 15,
                borderBottomWidth: selected === item.id ? 1 : 0,
              }}>
              <TouchableOpacity onPress={() => setSelected(item.id)}>
                <Image
                  style={{
                    tintColor: 'black',
                    alignSelf: 'center',
                    height: 40,
                    width: 40,
                  }}
                  source={item.image}
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
      {selected == 1 && (
        <FlatList
          data={UserData}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          numColumns={3}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default ProfilePost;
