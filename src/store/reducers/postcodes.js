import { actions } from '../../common/constants';

const initialState = {
  data: [],
  isLoading: false,
  hasFailedToLoad: false,
};

const actionMap = {
  [actions.POSTCODES_GET_REQUEST]: state => ({ ...state, isLoading: true }),
  [actions.POSTCODES_GET_SUCCESS]: (state, { result }) => ({ ...state, data: result.data, isLoading: false }),
  [actions.POSTCODES_GET_FAILURE]: state => ({ ...state, isLoading: false }),
};

export default (state = initialState, action) => {
  if (actionMap[action.type]) {
    return actionMap[action.type](state, action);
  }

  return state;
};
