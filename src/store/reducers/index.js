import { combineReducers } from 'redux';

import authentication from './authentication';
import teams from './teams';
import forms from './forms';

export default combineReducers({
  authentication,
  teams,
  forms,
});
