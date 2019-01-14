import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    height: 600,
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
  	marginRight: 50,
  	resizeMode: 'contain',
  },
  teamInfoText: {
  	fontSize: 26,
  	color: '#323232',
  	marginTop: 10,
  	fontStyle: 'italic',
	fontFamily: 'calibri-italic',
  },
  goalKeeperView: {
  	height: 120,
  	borderBottomWidth: 1,
  	borderBottomColor: '#CCC'
  },
  defenderView: {
  	height: 250,
  	borderBottomWidth: 1,
  	borderBottomColor: '#CCC'
  },
  midFielderView: {
  	height: 100,
  	borderBottomWidth: 1,
  	borderBottomColor: '#CCC'
  },
  positionTitle: {
  	height: 38,
  	borderBottomWidth: 1,
  	borderBottomColor: '#CCC',
  	alignItems: 'center',
    justifyContent: 'center',
  },
  positionTitleText: {
  	fontSize: 24,
  	color: '#666666',
  	paddingTop: 10,
  	paddingBottom: 10,
  	fontStyle: 'italic',
	fontFamily: 'calibri-italic',
  },
};
