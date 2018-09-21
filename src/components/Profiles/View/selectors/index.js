export default state => ({
  player: state.player.data,
  authPlayer: state.player.authData,
  players: state.players.data,
  isLoading: state.player.isLoading || state.players.isLoading,
});
