import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {AppColor} from '../utils/utils';

const CustomButton = ({title, onPress, disabled}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} disabled={disabled}>
        <View
          style={{
            width: 340,
            backgroundColor: disabled ? AppColor.DBTN : AppColor.BTN,
            borderRadius: 5,
          }}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              paddingVertical: 10,
              fontSize: 18,
            }}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
