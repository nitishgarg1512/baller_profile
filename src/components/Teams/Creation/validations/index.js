import axios from 'axios';

import { validations } from '../../../common/utils';
import { paths } from '../../../../common/constants';

export default {
  team_name: (value) => {
    let error = '';

    if (validations.isEmpty(value)) {
      error = 'Team name is required';
    }

    if (!error) {
      return axios.get(`${paths.api.TEAMS}?team_name=${value}`)
        .then(() => 'Team name is already taken')
        .catch(() => '');
    }

    return Promise.resolve(error);
  },

  format: value => Promise.resolve(validations.isEmpty(value) ? 'Format is required' : ''),

  location: value => Promise.resolve(validations.isEmpty(value) ? 'Location is required' : ''),

  nickname: (value) => {
    let error = '';

    if (validations.isEmpty(value)) {
      error = 'Nickname is required';
    }

    if (!error) {
      return axios.get(`${paths.api.TEAMS}?nickname=${value}`)
        .then(() => 'Nickname is already taken')
        .catch(() => '');
    }

    return Promise.resolve(error);
  },

  abbreviated_name: (value) => {
    let error = '';

    if (validations.isEmpty(value)) {
      error = 'Abbreviated name is required';
    }

    if (!error) {
      return axios.get(`${paths.api.TEAMS}?abbreviated_name=${value}`)
        .then(() => 'Abbreviated name is already taken')
        .catch(() => '');
    }

    return Promise.resolve(error);
  },
};
