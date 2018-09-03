import { actions, paths } from '../common/constants';

export default {
  createRequest: id => ({
    [actions.API_CALL]: {
      types: [
        actions.REQUEST_CREATE_REQUEST,
        actions.REQUEST_CREATE_SUCCESS,
        actions.REQUEST_CREATE_FAILURE,
      ],
      promise: client => client.get(paths.build(paths.api.REQUESTS, id)),
    },
  }),
};
