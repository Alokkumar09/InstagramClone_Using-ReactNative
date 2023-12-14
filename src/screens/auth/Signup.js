import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import InputBox from '../../components/InputBox';
import CustomButton from '../../components/CustomButton';
import {Formik} from 'formik';
import {SignupInitialValue, SignupValidationSchema} from './utils';
import {useNavigation} from '@react-navigation/native';

const Signup = () => {
  const navigation = useNavigation();
  const handleSignup = values => {
    console.log(values);
  };
  return (
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'space-between'}}>
      <View style={{flex: 0.8, justifyContent: 'center'}}>
        <Text style={{fontSize: 18, fontWeight: '700', marginBottom: 20}}>
          Signup with your mobile number
        </Text>
        <Formik
          initialValues={SignupInitialValue}
          validationSchema={SignupValidationSchema}
          onSubmit={handleSignup}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
            errors,
            isValid,
          }) => {
            return (
              <View>
                <InputBox
                  placeholder={'Mobile Number'}
                  onChangeText={handleChange('number')}
                  onBlur={handleBlur('number')}
                  value={values.number}
                  touched={touched.number}
                  errors={errors.number}
                  maxLength={10}
                  keyboardType={'numeric'}
                />

                <CustomButton
                  title={'Sign up'}
                  onPress={handleSubmit}
                  disabled={!isValid}
                />
              </View>
            );
          }}
        </Formik>
      </View>
      <View style={{justifyContent: 'flex-end'}}>
        <TouchableOpacity
          style={{marginBottom: 20, alignSelf: 'center'}}
          onPress={() => navigation.goBack()}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;
