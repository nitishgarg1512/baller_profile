import { actions, paths } from '../common/constants';

export default {
  createTeam: data => ({
    [actions.API_CALL]: {
      types: [
        actions.TEAMS_CREATE_REQUEST,
        actions.TEAMS_CREATE_SUCCESS,
        actions.TEAMS_CREATE_FAILURE,
      ],
      promise: client => client.post(paths.api.TEAMS_CREATE, data),
    },
  }),
};
