import { map, filter } from 'lodash';

export default state => ({
  player: state.player.data,
  authPlayer: state.player.authData,
  players: state.players.data,
  isLoading: state.player.isLoading || state.players.isLoading || state.nations.isLoading || state.playingPositions.isLoading,
  playingPositions: map(filter(state.playingPositions.data, playingPosition => playingPosition.sport === 'Football'), position => ({ label: position.playing_position, id: position.id })),
  nations: state.nations.data,
});
