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
    height: 34,
  	width: 34,
  },
  teamLogo: {
  	height: 34,
  	resizeMode: 'contain'
  },
  team2BadgeLogoView: {
  	flex: 1.5,
  	alignItems: 'flex-start',
  },
  statsView: {
    paddingBottom: 20
  },
  statsTeam: {
    paddingTop: 10,
    flex: 1,
    flexDirection: 'row',
    flexWrap:'wrap',
  },
  statsTeam1Logo: {
    flex: 1,
    alignItems: 'flex-end',
  },
  statsTeam1Image: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
    justifyContent: 'center',
  },
  statsTeamTitle: {
    flex: 2,
    alignItems: 'center',
  },
  statsTeam1TitleText: {
    fontSize: 16,
    fontStyle: 'italic',
    fontFamily: 'calibri-italic',
    color: '#3f3f3f',
    justifyContent: 'center',
  },
  statsTeam2Logo: {
    flex: 1,
    alignItems: 'flex-start',
  },
  statsTeam2Image: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
    justifyContent: 'center',
  },
  statsBpPoint: {
    paddingTop: 18,
    flex: 1,
    flexDirection: 'row',
    flexWrap:'wrap',
  },
  statsTeam1BpPoint: {
    flex: 1,
    alignItems: 'flex-end',
  },
  statsBpPointNumber: {
    fontSize: 12,
    fontStyle: 'italic',
    fontFamily: 'calibri-italic',
    color: '#3f3f3f',
    fontWeight: 'bold'
  },
  statsBpPointTitle: {
    alignItems: 'center',
    flex: 2,
  },
  statsBpPointTitleText: {
    fontSize: 12,
    fontStyle: 'italic',
    fontFamily: 'calibri-italic',
    color: '#3f3f3f',
    fontWeight: 'bold'
  },
  statsTeam2BpPoint: {
    flex: 1,
    alignItems: 'flex-start',
  },
  statsPointList: {
    paddingTop: 16,
    flex: 1,
    flexDirection: 'row',
    flexWrap:'wrap',
  },
  statsTeam1Point: {
    flex: 1,
    alignItems: 'flex-end',
  },
  statsPointNumber: {
    fontSize: 12,
    fontStyle: 'italic',
    fontFamily: 'calibri-italic',
    color: '#3f3f3f',
  },
  statsPointTitle: {
    flex: 2,
    alignItems: 'center',
  },
  statsPointTitleText: {
    fontSize: 12,
    fontStyle: 'italic',
    fontFamily: 'calibri-italic',
    color: '#3f3f3f',
  },
  statsTeam2Point: {
    flex: 1,
    alignItems: 'flex-start',
  },
  teamStatsView: {
    borderTopWidth: 1,
    borderTopColor: '#d8d8d8',
    marginTop: 20
  },
};
