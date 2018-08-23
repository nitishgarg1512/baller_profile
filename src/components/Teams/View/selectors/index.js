export default state => ({
  team: state.team.data,
  isLoading: state.team.isLoading || state.user.isLoading,
});
