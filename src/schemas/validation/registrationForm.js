import * as yup from 'yup'

export const registrationFormValues = {
  middle_name: '* Type your middle name *',
  last_name: '* Type your last name *',
  first_name: '* Type your first name *',
  email_prefix: 'super_thief',
  email_domain: '',
  email_extension: '',
  full_address: '',
  city_name: '',
  street_name: '',
  state: '',
}

export const schema = yup.object({
  middle_name: yup.string().required(),
  last_name: yup.string().required(),
  first_name: yup.string().required(),
  email_prefix: yup.string().required(),
  email_domain: yup.string().required(),
  email_extension: yup.string().required(),
  full_address: yup.string().required(),
  city_name: yup.string().required(),
  street_name: yup.string().required(),
  state: yup.string().required(),

  phone_number_0: yup.string().matches(/^[0-9]+$/gi, 'Must be a number').required('Phone number is invalid'),
  phone_number_1: yup.string().matches(/^[0-9]+$/gi, 'Must be a number').required('Phone number is invalid'),
  phone_number_2: yup.string().matches(/^[0-9]+$/gi, 'Must be a number').required('Phone number is invalid'),
  phone_number_3: yup.string().matches(/^[0-9]+$/gi, 'Must be a number').required('Phone number is invalid'),
  phone_number_4: yup.string().matches(/^[0-9]+$/gi, 'Must be a number').required('Phone number is invalid'),
  phone_number_5: yup.string().matches(/^[0-9]+$/gi, 'Must be a number').required('Phone number is invalid'),
  phone_number_6: yup.string().matches(/^[0-9]+$/gi, 'Must be a number').required('Phone number is invalid'),
  phone_number_7: yup.string().matches(/^[0-9]+$/gi, 'Must be a number').required('Phone number is invalid'),
  phone_number_8: yup.string().matches(/^[0-9]+$/gi, 'Must be a number').required('Phone number is invalid'),
  phone_number_9: yup.string().matches(/^[0-9]+$/gi, 'Must be a number').required('Phone number is invalid'),
  phone_number_10: yup.string().matches(/^[0-9]+$/gi, 'Must be a number').required('Phone number is invalid'),
  
  phone_number_verification_0: yup.string().matches(/^[0-9]+$/gi, 'Must be a number').required('Phone number is invalid').oneOf([yup.ref('phone_number_0'), null], 'Phone number does not match'),
  phone_number_verification_1: yup.string().matches(/^[0-9]+$/gi, 'Must be a number').required('Phone number is invalid').oneOf([yup.ref('phone_number_1'), null], 'Phone number does not match'),
  phone_number_verification_2: yup.string().matches(/^[0-9]+$/gi, 'Must be a number').required('Phone number is invalid').oneOf([yup.ref('phone_number_2'), null], 'Phone number does not match'),
  phone_number_verification_3: yup.string().matches(/^[0-9]+$/gi, 'Must be a number').required('Phone number is invalid').oneOf([yup.ref('phone_number_3'), null], 'Phone number does not match'),
  phone_number_verification_4: yup.string().matches(/^[0-9]+$/gi, 'Must be a number').required('Phone number is invalid').oneOf([yup.ref('phone_number_4'), null], 'Phone number does not match'),
  phone_number_verification_5: yup.string().matches(/^[0-9]+$/gi, 'Must be a number').required('Phone number is invalid').oneOf([yup.ref('phone_number_5'), null], 'Phone number does not match'),
  phone_number_verification_6: yup.string().matches(/^[0-9]+$/gi, 'Must be a number').required('Phone number is invalid').oneOf([yup.ref('phone_number_6'), null], 'Phone number does not match'),
  phone_number_verification_7: yup.string().matches(/^[0-9]+$/gi, 'Must be a number').required('Phone number is invalid').oneOf([yup.ref('phone_number_7'), null], 'Phone number does not match'),
  phone_number_verification_8: yup.string().matches(/^[0-9]+$/gi, 'Must be a number').required('Phone number is invalid').oneOf([yup.ref('phone_number_8'), null], 'Phone number does not match'),
  phone_number_verification_9: yup.string().matches(/^[0-9]+$/gi, 'Must be a number').required('Phone number is invalid').oneOf([yup.ref('phone_number_9'), null], 'Phone number does not match'),
  phone_number_1verification_0: yup.string().matches(/^[0-9]+$/gi, 'Must be a number').required('Phone number is invalid').oneOf([yup.ref('phone_number__0'), null], 'Phone number does not match'),
})