import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
  contentContainer: {
  },
  postView: {
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  postIcons: {
    paddingRight: 5,
    paddingBottom: 5,
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  trumpetImage: {
    height: 54,
    width: 54,
    resizeMode: 'contain'
  },
  postContent: {
    paddingTop: 10,
    paddingLeft: 5,
    paddingBottom: 5,
    flex: 3,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  postContentTitle: {
    color: '##3f3f3f',
    fontSize: 20,
    fontStyle: 'italic',
    fontFamily: 'calibri-italic',
  },
  postPlayer: {
  	paddingLeft: 5,
  	flex: 1
  },
  playerView: {
  	paddingTop: 10,
  	paddingBottom: 10,
  	flex: 0.5,
  	flexDirection: 'row',
    flexWrap:'wrap'
  },
  playerImage: {
  	justifyContent: 'center',
  	flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
  	width: 44,
  },
  icoNavigate: {
    width: 30,
    height: 30,
  },
};
