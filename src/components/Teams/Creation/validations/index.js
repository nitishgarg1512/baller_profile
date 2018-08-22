import { validations } from '../../../common/utils';

export default {
  name: value => Promise.resolve(validations.isEmpty(value) ? 'Name is required' : ''),

  league: value => Promise.resolve(validations.isEmpty(value) ? 'League is required' : ''),

  format: value => Promise.resolve(validations.isEmpty(value) ? 'Format is required' : ''),

  location: value => Promise.resolve(validations.isEmpty(value) ? 'Location is required' : ''),
};
