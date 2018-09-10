import { actions, paths } from '../common/constants';

export default {
  getPostcodes: () => ({
    [actions.API_CALL]: {
      types: [
        actions.POSTCODES_GET_REQUEST,
        actions.POSTCODES_GET_SUCCESS,
        actions.POSTCODES_GET_FAILURE,
      ],
      promise: client => client.get(paths.api.POSTCODES),
    },
  }),
};
