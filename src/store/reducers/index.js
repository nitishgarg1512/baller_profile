import { combineReducers } from 'redux';

import authentication from './authentication';
import forms from './forms';
import league from './league';
import leagues from './leagues';
import nations from './nations';
import player from './player';
import players from './players';
import playingPositions from './playingPositions';
import postcodes from './postcodes';
import team from './team';
import teams from './teams';
import toasts from './toasts';
import user from './user';

export default combineReducers({
  authentication,
  forms,
  league,
  leagues,
  nations,
  player,
  players,
  playingPositions,
  postcodes,
  team,
  teams,
  toasts,
  user,
});
