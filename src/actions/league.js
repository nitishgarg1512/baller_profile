import { actions, paths } from '../common/constants';

export default {
  getLeague: id => ({
    [actions.API_CALL]: {
      types: [
        actions.LEAGUE_GET_REQUEST,
        actions.LEAGUE_GET_SUCCESS,
        actions.LEAGUE_GET_FAILURE,
      ],
      promise: client => client.get(paths.build(paths.api.LEAGUES_ID, id)),
    },
  }),
};
