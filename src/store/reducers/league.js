import { actions } from '../../common/constants';

const initialState = {
  data: {},
  isLoading: false,
};

const actionMap = {
  [actions.LEAGUE_GET_REQUEST]: state => ({ ...state, isLoading: true }),
  [actions.LEAGUE_GET_SUCCESS]: (state, { result }) => ({ ...state, isLoading: false, data: result.data }),
  [actions.LEAGUE_GET_FAILURE]: state => ({ ...state, isLoading: false }),
};

export default (state = initialState, action) => {
  if (actionMap[action.type]) {
    return actionMap[action.type](state, action);
  }

  return state;
};
