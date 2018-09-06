import { actions } from '../../common/constants';

const initialState = {
  showToast: false,
};

const actionMap = {
  [actions.TOAST_SHOW]: state => ({ ...state, showToast: true }),

  [actions.TOAST_CLEAR]: () => ({ ...initialState }),
};

export default (state = initialState, action) => {
  if (actionMap[action.type]) {
    return actionMap[action.type](state, action);
  }

  return state;
};
