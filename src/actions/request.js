import { actions, paths } from '../common/constants';

export default {
  createRequest: data => ({
    [actions.API_CALL]: {
      types: [
        actions.REQUEST_CREATE_REQUEST,
        actions.REQUEST_CREATE_SUCCESS,
        actions.REQUEST_CREATE_FAILURE,
      ],
      promise: client => {console.log(data); client.post(paths.api.REQUESTS, data)},
    },
  }),
};
