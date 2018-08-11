import { actions, paths } from '../common/constants';

export default {
  register: data => ({
    [actions.API_CALL]: {
      types: [
        actions.AUTHENTICATION_REGISTRATION_REQUEST,
        actions.AUTHENTICATION_REGISTRATION_SUCCESS,
        actions.AUTHENTICATION_REGISTRATION_FAILURE,
      ],
      promise: client => client.post(paths.AUTHENTICATION_REGISTER, data),
    },
  }),
};
