import { actions, paths } from '../common/constants';

export default {
  getPlayingPositions: () => ({
    [actions.API_CALL]: {
      types: [
        actions.PLAYING_POSITIONS_GET_REQUEST,
        actions.PLAYING_POSITIONS_GET_SUCCESS,
        actions.PLAYING_POSITIONS_GET_FAILURE,
      ],
      promise: client => client.get(paths.api.PLAYING_POSTITIONS),
    },
  }),
};
