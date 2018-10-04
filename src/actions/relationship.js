import { actions, paths } from '../common/constants';

export default {
  createRelationship: id => ({
    [actions.API_CALL]: {
      types: [
        actions.RELATIONSHIP_CREATE_REQUEST,
        actions.RELATIONSHIP_CREATE_SUCCESS,
        actions.RELATIONSHIP_CREATE_FAILURE,
      ],
      promise: client => client.post(paths.api.RELATIONSHIPS, { idUserToFollow: id }),
    },
  }),

  deleteRelationship: id => ({
    [actions.API_CALL]: {
      types: [
        actions.RELATIONSHIP_DELETE_REQUEST,
        actions.RELATIONSHIP_DELETE_SUCCESS,
        actions.RELATIONSHIP_DELETE_FAILURE,
      ],
      promise: client => client.delete(paths.api.RELATIONSHIPS, { idUserToUnfollow: id }),
    },
  }),
};
