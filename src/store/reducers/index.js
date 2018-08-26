import { combineReducers } from 'redux';

import authentication from './authentication';
import teams from './teams';
import forms from './forms';
import team from './team';
import user from './user';
import player from './player';

export default combineReducers({
  authentication,
  teams,
  forms,
  team,
  user,
  player,
});
