import * as yup from 'yup';

export const loginInitialValue = {
  username: '',
  password: '',
};
export const loginValidationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  paasword: yup.string().required('Username is required'),
});

export const SignupInitialValue = {
  number: '',
};
export const SignupValidationSchema = yup.object().shape({
  number: yup
    .string()
    .min(10, ({min}) => `${'Mobile number must be'} ${min} ${'character'}`)
    .required('Mobile Number is required ')
    .matches(/^[789]\d{9}$/, 'Mobile number should be start from 7,8,9'),
});
