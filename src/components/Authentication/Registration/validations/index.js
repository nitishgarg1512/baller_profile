import { validations } from '../../../common/utils';

export default {
  username: value => Promise.resolve(validations.isEmpty(value) ? 'Username is required' : ''),

  email: value => Promise.resolve(validations.isEmpty(value) ? 'Email is required' : ''),

  password: value => Promise.resolve(validations.isEmpty(value) ? 'Password is required' : ''),

  phone_number: value => Promise.resolve(validations.isEmpty(value) ? 'Phone number is required' : ''),
};
