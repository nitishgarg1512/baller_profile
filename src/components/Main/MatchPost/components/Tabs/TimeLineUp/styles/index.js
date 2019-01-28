import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  contentContainer: {
  },
  teamInfoView: {
  	height: 50,
  	borderBottomWidth: 1,
  	borderBottomColor: '#CCC',
  	flex: 1,
    display: 'flex',
    flexDirection: 'row'
  },
  teamInfoIcon: {
  	height: 45,
  	width: 45,
  	marginTop: 3,
  	marginLeft: 5,
  	marginRight: 30,
  	resizeMode: 'contain',
  },
  teamInfoText: {
  	fontSize: 20,
  	color: '#323232',
  	marginTop: 16,
  	fontStyle: 'italic',
	fontFamily: 'calibri-italic',
  },
  teamInfoLineUpText: {
  	fontSize: 16,
  	color: '#4c4c4c',
  	marginTop: 19,
  	fontStyle: 'italic',
	fontFamily: 'calibri-italic',
  },
  goalKeeperView: {
  	height: 100,
  	borderBottomWidth: 1,
  	borderBottomColor: '#CCC'
  },
  defenderView: {
  	borderBottomWidth: 1,
  	borderBottomColor: '#CCC'
  },
  midFielderView: {
  	borderBottomWidth: 1,
  	borderBottomColor: '#CCC'
  },
  subView: {
  	borderBottomWidth: 1,
  	borderBottomColor: '#CCC'
  },
  subTitle: {
  	height: 38,
  	backgroundColor: '#000000',
  	borderBottomWidth: 1,
  	borderBottomColor: '#CCC',
  	alignItems: 'center',
    justifyContent: 'center',
  },
  subTitleText: {
  	fontSize: 16,
  	color: '#FFF',
  	paddingTop: 10,
  	paddingBottom: 10,
  	fontStyle: 'italic',
	fontFamily: 'calibri-italic',
  },
  positionTitle: {
  	height: 38,
  	borderBottomWidth: 1,
  	borderBottomColor: '#CCC',
  	alignItems: 'center',
    justifyContent: 'center',
  },
  positionTitleText: {
  	fontSize: 16,
  	color: '#666666',
  	paddingTop: 10,
  	paddingBottom: 10,
  	fontStyle: 'italic',
	fontFamily: 'calibri-italic',
  },
  playerView: {
  	paddingTop: 10,
  	paddingBottom: 10,
  	paddingLeft: 10,
  	paddingRight: 10,
  	flex: 1,
  	flexDirection: 'row',
    flexWrap:'wrap',
  },
  playerImage: {
  	height: 40,
  	width: 40,
  	justifyContent: 'center',
  	flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playerNameText: {
  	paddingLeft: 30,
  	paddingTop: 10,
  	flex: 2,
  	textAlign: 'left',
  	flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
    color: '#323232',
    fontStyle: 'italic',
	fontFamily: 'calibri-italic',
  },
  playerNumberText: {
  	flex: 1,
  	paddingLeft: 30,
  	paddingRight: 30,
  	paddingTop: 10,
  	textAlign: 'right',
  	alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    color: '#323232',
    fontStyle: 'italic',
	fontFamily: 'calibri-italic',
  }
};
