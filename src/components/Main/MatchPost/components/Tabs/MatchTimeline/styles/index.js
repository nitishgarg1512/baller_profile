import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  contentContainer: {
  },
  bookingView: {
  	marginTop: 20,
  	borderBottomWidth: 1,
  	borderBottomColor: '#CCC',
  	flex: 1,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'red',
  },
  playerView: {
  	paddingTop: 20,
  	paddingBottom: 10,
  	paddingLeft: 10,
  	paddingRight: 10,
  	flex: 0.5,
  	flexDirection: 'row',
    flexWrap:'wrap'
  },
  bookingIconFrame: {
  	height: 44,
  	width: 44,
  	borderRadius: 44/2,
  	backgroundColor: '#FFF',
  	position: 'relative',
  	alignItems: 'center',
    justifyContent: 'center',
  },
  playerImage: {
  	justifyContent: 'center',
  	flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  	width: 40,
  },
  bookingIcons: {
  	paddingTop: 5,
  	paddingLeft: 10,
  	paddingBottom: 5,
  	flex: 1
  },
  bookingImage: {
  	height: 30,
  	width: 30,
  	resizeMode: 'contain'
  },
  bookingIconTime: {
  	paddingTop: 5,
  	color: '#FFF',
  	fontSize: 14,
  	fontStyle: 'italic',
	fontFamily: 'calibri-italic',
  },
  bookingContent: {
  	paddingTop: 10,
  	paddingLeft: 5,
  	paddingBottom: 5,
  	flex: 3.5
  },
  bookingContentTitle: {
  	color: '#FFF',
  	fontSize: 20,
  	fontWeight: 'bold',
  	fontStyle: 'italic',
	fontFamily: 'calibri-italic',
  },
  bookingContentDesciption: {
  	color: '#FFF',
  	fontSize: 16,
  	fontStyle: 'italic',
	fontFamily: 'calibri-italic',
  },
  playerLinkText: {
  	textDecorationLine: 'underline'
  },
  bookingPlayer: {
  	paddingLeft: 5,
  	flex: 1
  }
};
