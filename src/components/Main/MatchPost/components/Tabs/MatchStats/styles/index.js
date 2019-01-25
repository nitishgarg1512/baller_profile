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
  individualView: {
    paddingLeft: 10,
    borderTopWidth: 1,
    borderTopColor: '#d8d8d8'
  },
  individualStatsView: {
    paddingBottom: 20
  },
  individualStatsBpPoint: {
    paddingTop: 18,
    flex: 1,
    flexDirection: 'row',
    flexWrap:'wrap',
  },
  individualStatsBpPointNumber: {
    flex: 0.5,
    alignItems: 'flex-start',
  },
  individualStatsBpPointNumberText: {
    fontSize: 16,
    fontStyle: 'italic',
    fontFamily: 'calibri-italic',
    color: '#0070c0',
    fontWeight: 'bold'
  },
  individualStatsBpPointTitle: {
    flex: 2.5,
    paddingLeft: 30,
    alignItems: 'flex-start',
  },
  individualStatsTitleText: {
    fontSize: 16,
    fontStyle: 'italic',
    fontFamily: 'calibri-italic',
    color: '#3f3f3f',
    justifyContent: 'center',
    fontWeight: 'bold'
  },
  individualStatsPointList: {
    paddingTop: 16,
    paddingLeft: 30,
    flex: 1,
    flexDirection: 'row',
    flexWrap:'wrap',
  },
  individualStatsPointTitle: {
    flex: 1.5,
    alignItems: 'flex-start',
  },
  individualStatsPointTitleText: {
    fontSize: 12,
    fontStyle: 'italic',
    fontFamily: 'calibri-italic',
    color: '#3f3f3f',
  },
  individualStatsPointTotal: {
    flex: 1,
    alignItems: 'flex-start',
  },
  individualStatsPointTotalText: {
    fontSize: 12,
    fontStyle: 'italic',
    fontFamily: 'calibri-italic',
    color: '#3f3f3f',
  },
  individualStatsPointPoint: {
    flex: 0.5,
    alignItems: 'flex-start',
  },
  individualStatsPointPointText: {
    fontSize: 12,
    fontStyle: 'italic',
    fontFamily: 'calibri-italic',
    color: '#3f3f3f',
  },
  heatMapContainer: {
    flex: 1,
  },
  heatMapMain: {
    flex: 1,
    flexDirection: 'row'
  },
  heatMapCol1: {
    flex: 0.5
  },
  heatMapCol2: {
    flex: 3,
    backgroundColor: '#70ad47ff'
  },
  heatMapCol3: {
    flex: 0.5
  },
  heatMapTitle: {
    flex: 1,
    alignItems: 'center',
  },
  heatMapTitleText: {
    justifyContent: 'center',
    fontSize: 18,
    fontStyle: 'italic',
    fontFamily: 'calibri-italic',
    color: '#3f3f3f',
    paddingTop: 16,
    paddingBottom: 16
  },
  heatMapView: {
    flex: 1,
  },
  heatMapItem: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#d8d8d8'
  },
  heatMapRaws: {
    flex: 1,
    flexDirection: 'row'
  },
  boxItem: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff',
    borderLeftWidth: 1,
    borderLeftColor: '#ffffff',
    height: 60,
    width: 80,
    flexDirection: 'row',
  },
  heatBallImage: {
    height: 22,
    width: 22,
    resizeMode: 'contain',
    marginRight: 4,
    marginTop: 30
  },
  heatBallNumber: {
    alignItems: 'flex-end',
    color: '#ffffff',
    fontSize: 14,
    fontStyle: 'italic',
    fontFamily: 'calibri-italic',
    justifyContent: 'flex-end',
    marginTop: 40,
  },
  boxCol1: {
    flex: 1,
  },
  boxCol2: {
    flex: 1.3,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  boxCol3: {
    flex: 0.7,
  },
  boxCol1Trumpet: {
    flex: 0.5,
  },
  boxCol2Trumpet: {
    flex: 2.5,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginLeft: 10
  },
  trumpetIcon: {
    height: 44,
    width: 44,
    resizeMode: 'contain',
    marginTop: 20
  },
  heatTrumpetNumber: {
    alignItems: 'flex-end',
    color: '#ffffff',
    fontSize: 14,
    fontStyle: 'italic',
    fontFamily: 'calibri-italic',
    justifyContent: 'flex-end',
    marginTop: 42,
    marginLeft: -10
  },
};
