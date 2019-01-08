import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  container: {
    height: 200,
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
  	height: 100,
  	width: '100%',
  	borderBottomWidth: 1,
  	borderBottomColor: '#CCC'
  },
  scoreView: {
  	height: 100,
  	width: '100%',
  	flexDirection: 'row',
    flexWrap:'wrap'
  },
  goalScoreLeftView: {
  	height: 100,
  	width: 100
  },
  goalScoreIconView: {
  	height: 100,
  	width: 100,
  	textAlign: 'center',
  	flexDirection: 'row',
    flexWrap:'wrap'
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
  goalScoreIconOfficiateView: {
  	height: 100,
  	flex: 1,
  	textAlign: 'center'
  },
  goalScoreRightView: {
  	height: 100,
  	width: 100
  }
};
