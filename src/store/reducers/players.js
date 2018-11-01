import { actions } from '../../common/constants';

const initialState = {
  data: [],
  isLoading: false,
  hasFailedToLoad: false,
};

const actionMap = {
  [actions.PLAYERS_GET_REQUEST]: state => ({ ...state, isLoading: true }),
  [actions.PLAYERS_GET_SUCCESS]: (state, { result }) => ({ ...state, data: result.data.data, isLoading: false }),
  [actions.PLAYERS_GET_FAILURE]: state => ({ ...state, isLoading: false }),
  [actions.PLAYERS_CONNECTIONS_GET_REQUEST]: state => ({ ...state, isLoading: true }),
  [actions.PLAYERS_CONNECTIONS_GET_SUCCESS]: (state, { result }) => ({ ...state, data: result.data.data, isLoading: false }),
  [actions.PLAYERS_CONNECTIONS_GET_FAILURE]: state => ({ ...state, isLoading: false }),
};

export default (state = initialState, action) => {
  if (actionMap[action.type]) {
    return actionMap[action.type](state, action);
  }

  return state;
};
