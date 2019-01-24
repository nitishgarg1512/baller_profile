import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  contentContainer: {

  },
  manView: {
    borderBottomWidth: 1,
    borderBottomColor: '#d8d8d8',
  },
  manTitle: {
    flex: 1,
    paddingTop: 16,
    paddingBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  manTitleText: {
    fontSize: 16,
    fontStyle: 'italic',
    fontFamily: 'calibri-italic',
  },
  manContent: {
    flex: 1,
    flexDirection: 'row',
    flexWrap:'wrap',
    paddingBottom: 8
  },
  manNameView: {
    paddingLeft: 20,
    alignItems: 'flex-start',
    flex: 2,
  },
  manNameText: {
    fontSize: 16,
    fontStyle: 'italic',
    fontFamily: 'calibri-italic',
    color: '#3f3f3f'
  },
  manPlayerPosition: {
    fontSize: 12,
    fontStyle: 'italic',
    fontFamily: 'calibri-italic',
    color: '#7f7f7f',
    paddingTop: 5
  },
  playerView: {
    paddingBottom: 8,
    paddingLeft: 20,
  	flex: 0.5,
  },
  playerImage: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: 40,
  	width: 40,
  },
  teamLogo: {
  	height: 40,
  	resizeMode: 'contain'
  },
  team2BadgeLogoView: {
  	flex: 1.5,
  	alignItems: 'flex-start',
  },
};
