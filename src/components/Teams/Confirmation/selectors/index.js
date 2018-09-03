export default state => ({
  team: state.team.data,
  user: state.user.authData,
  isLoading: state.user.isLoading || state.team.isLoading,
});
