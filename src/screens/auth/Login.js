import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import InputBox from '../../components/InputBox';
import CustomButton from '../../components/CustomButton';
import {Formik} from 'formik';
import {loginInitialValue, loginValidationSchema} from './utils';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const handleLogin = values => {
    console.log(values);

    navigation.navigate('Dashboard');
  };
  return (
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'space-between'}}>
      <View style={{flex: 0.8, justifyContent: 'center'}}>
        <Image
          source={require('../../assests/download.jpg')}
          style={{alignSelf: 'center ', marginBottom: 50}}
        />
        <Formik
          initialValues={loginInitialValue}
          loginValidationSchema={loginValidationSchema}
          onSubmit={handleLogin}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
            errors,
            isvalid,
          }) => {
            return (
              <View>
                <InputBox
                  placeholder={'Username'}
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  value={values.username}
                  touched={touched.username}
                  errors={errors.username}
                />
                <InputBox
                  placeholder={'password'}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  touched={touched.password}
                  errors={errors.username}
                  secureTextEntry={true}
                />
                <CustomButton title={'Login'} onPress={handleSubmit} />
              </View>
            );
          }}
        </Formik>
        <TouchableOpacity style={{marginTop: 20, alignSelf: 'center'}}>
          <Text style={{fontSize: 16}}>Forgotten Password?</Text>
        </TouchableOpacity>
      </View>
      <View style={{justifyContent: 'flex-end'}}>
        <TouchableOpacity
          style={{marginBottom: 20}}
          onPress={() => navigation.navigate('Signup')}>
          <Text>Create new accounts</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
