export default state => ({
  player: state.player.data,
  players: state.players.data,
  isLoading: state.player.isLoading || state.players.isLoading,
});
