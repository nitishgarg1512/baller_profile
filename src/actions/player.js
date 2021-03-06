import { actions, paths } from '../common/constants';

export default {
  getPlayer: id => ({
    [actions.API_CALL]: {
      types: [
        actions.PLAYER_GET_REQUEST,
        actions.PLAYER_GET_SUCCESS,
        actions.PLAYER_GET_FAILURE,
      ],
      promise: client => client.get(paths.build(paths.api.PLAYERS_ID, id)),
    },
  }),

  getPlayerByUsername: username => ({
    [actions.API_CALL]: {
      types: [
        actions.PLAYER_GET_REQUEST,
        actions.PLAYER_GET_SUCCESS,
        actions.PLAYER_GET_FAILURE,
      ],
      promise: client => client.get(`${paths.api.PLAYERS_SINGLE}?username=${username}`),
    },
  }),

  updatePlayer: (values, id) => ({
    [actions.API_CALL]: {
      types: [
        actions.PLAYER_UPDATE_REQUEST,
        actions.PLAYER_UPDATE_SUCCESS,
        actions.PLAYER_UPDATE_FAILURE,
      ],
      promise: client => {
        console.log(paths.build(paths.api.PLAYERS_ID, id));
        console.log(values);
        client.patch(paths.build(paths.api.PLAYERS_ID + "/", id), values)
      }
    },
  }),

  getAuthPlayer: username => ({
    [actions.API_CALL]: {
      types: [
        actions.AUTH_PLAYER_GET_REQUEST,
        actions.AUTH_PLAYER_GET_SUCCESS,
        actions.AUTH_PLAYER_GET_FAILURE,
      ],
      promise: client => client.get(`${paths.api.PLAYERS_SINGLE}?username=${username}`),
    },
  }),

  getPlayerConnection: id => ({
    [actions.API_CALL]: {
      types: [
        actions.PLAYER_CONNECTION_GET_REQUEST,
        actions.PLAYER_CONNECTION_GET_SUCCESS,
        actions.PLAYER_CONNECTION_GET_FAILURE,
      ],
      promise: client => client.get(paths.build(paths.api.PLAYERS_ID, id)),
    },
  }),
};
