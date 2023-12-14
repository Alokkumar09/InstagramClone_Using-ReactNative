import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';

const InputBox = ({
  placeholder,
  secureTextEntry,
  onChangeText,
  value,
  maxLength,
  onBlur,
  keyboardType,
  errors,
  touched,
}) => {
  return (
    <View style={styles.MainContainer}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        value={value}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        maxLength={maxLength}
        onBlur={onBlur}
        keyboardType={keyboardType}
        errors={errors}
        touched={touched}
      />
      {errors && touched && (
        <Text style={{color: 'red', paddingLeft: 5}}>{errors}</Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  MainContainer: {
    height: 78,
  },
  textInput: {
    borderWidth: 1,
    width: 340,
    borderColor: 'grey',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default InputBox;
