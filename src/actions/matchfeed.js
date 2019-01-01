import { actions, paths } from '../common/constants';

export default {
  getUpcomminMatch: () => ({
    [actions.API_CALL]: {
      types: [
        actions.UPCOMMING_MATCHFEED_GET_FAILURE,
        actions.UPCOMMING_MATCHFEED_GET_REQUEST,
        actions.UPCOMMING_MATCHFEED_GET_SUCCESS,
      ],
      promise: client => client.get(paths.api.UPCOMMING_MATCH),
    },
  }),
};