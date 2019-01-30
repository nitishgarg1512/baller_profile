import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  container: {
    backgroundColor: 'white',
    color: '#CCC',
 	flex: 1,
  },
  row: {
  	paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    flexWrap:'wrap'
  },
  leagueText: {
  	paddingRight: 20
  },
  teamView: {
  	width: '100%',
  	borderBottomWidth: 1,
  	borderBottomColor: '#CCC'
  },
  teamBadgeLogoView: {
  	flex: 1,
  	flexDirection: 'row',
    flexWrap:'wrap',
    alignItems: 'center',
  },
  team1BadgeLogoView: {
  	flex: 1,
  	alignItems: 'center',
  },
  teamBadgeLogoScore: {
  	flex: 1,
  	textAlign: 'center',
  	flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  teamBadgeLogoScoreText: {
  	fontSize: 24,
  },
  team2BadgeLogoView: {
  	flex: 1,
  	alignItems: 'center'
  },
  teamLogo: {
  	height: 80,
  	alignItems: 'center',
  	resizeMode: 'contain',
  	margin: 10,
  },
  teamOfficiateView: {
  	flex: 1,
  	width: '100%',
  	textAlign: 'center',
  	alignItems: 'center',
  	justifyContent: 'flex-end',
	  marginBottom: 10,
  },
  teamOfficiateText: {
  	fontStyle: 'italic',
  },
  scoreView: {
  	width: '100%',
  	flexDirection: 'row',
    flexWrap:'wrap',
  },
  goalScoreLeftView: {
  	width: '40%'
  },
  goalScoreTextInline: {
  	flexDirection: 'row',
    flexWrap:'wrap'
  },
  goalScoreIconView: {
  	width: '20%',
  	paddingLeft: 20,
  	paddingRight: 20,
  	flexDirection: 'row',
  	flex: 1,
  	alignItems: 'center',
    justifyContent: 'center'
  },
  goalScoreIconViewLeft: {
  	flex: 1
  },
  goalScoreIconViewCenter: {
  	flex: 0.5
  },
  goalScoreIconViewRight: {
  	flex: 1
  },
  goalScoreRightView: {
  	width: '40%'
  },
  sportIcon: {
  	width: 25,
  	height: 25
  },
  goalScoreText: {
  	width: '50%',
  	height: 30,
  	textAlign: 'right'
  }
};
