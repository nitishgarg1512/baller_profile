import { actions, paths } from '../common/constants';

export default {
  getPlayersByNation: nation => ({
    [actions.API_CALL]: {
      types: [
        actions.PLAYERS_GET_REQUEST,
        actions.PLAYERS_GET_SUCCESS,
        actions.PLAYERS_GET_FAILURE,
      ],
      promise: client => client.get(`${paths.api.PLAYERS_SINGLE}?nationality=${nation}`),
    },
  }),
};
