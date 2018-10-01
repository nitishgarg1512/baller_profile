import { get, map, filter } from 'lodash';

import { forms, formats, genders } from '../../../../common/constants';

export default state => ({
  values: get(state, `forms.data[${forms.PROFILES_CREATION}].values`, {}),
  leaguesOptions: map(state.leagues.data, league => ({ label: league.league_name, value: league.id })),
  playingPositionsOptions: map(filter(state.playingPositions.data, playingPosition => playingPosition.sport === 'Football'), position => ({ label: position.playing_position, value: position.id })),
  postcodesOptions: map(state.postcodes.data, postcode => ({ label: postcode.postcode, value: postcode.id, region: postcode.region })),
  nationsOptions: map(state.nations.data, nation => ({ label: nation.country, value: nation.id })),
  formatsOptions: map(formats, format => ({ label: format.label, value: format.value })),
  gendersOptions: map(genders, gender => ({ label: gender.label, value: gender.value })),
  authUser: state.user.authData,
  authPlayer: state.player.authData,
  isSubmitting: state.player.isSubmitting,
});
