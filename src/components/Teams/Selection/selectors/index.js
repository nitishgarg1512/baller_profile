export default state => ({
  teams: state.teams.data,
  isLoading: state.teams.isLoading,
  authUser: state.user.authData,
});
