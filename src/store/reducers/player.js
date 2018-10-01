import { actions } from '../../common/constants';

const initialState = {
  data: {},
  authData: {},
  isLoading: false,
  hasFailedToLoad: false,
  isSubmitting: false,
};

const actionMap = {
  [actions.PLAYER_GET_REQUEST]: state => ({ ...state, isLoading: true }),
  [actions.PLAYER_GET_SUCCESS]: (state, { result }) => ({ ...state, data: result.data[0] || result.data, isLoading: false }),
  [actions.PLAYER_GET_FAILURE]: state => ({ ...state, isLoading: false }),

  [actions.PLAYER_UPDATE_REQUEST]: state => ({ ...state, isSubmitting: true }),
  [actions.PLAYER_UPDATE_SUCCESS]: state => ({ ...state, data: state.data, isSubmitting: false, x: console.error('jebo te krist vise') }),
  [actions.PLAYER_UPDATE_FAILURE]: state => ({ ...state, isSubmitting: false }),

  [actions.AUTH_PLAYER_GET_REQUEST]: state => ({ ...state, isLoading: true }),
  [actions.AUTH_PLAYER_GET_SUCCESS]: (state, { result }) => ({ ...state, authData: result.data[0] || result.data, isLoading: false }),
  [actions.AUTH_PLAYER_GET_FAILURE]: state => ({ ...state, isLoading: false }),

};

export default (state = initialState, action) => {
  if (actionMap[action.type]) {
    return actionMap[action.type](state, action);
  }

  return state;
};
