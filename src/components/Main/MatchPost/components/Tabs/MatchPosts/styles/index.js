import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  container: {
    flex: 1,
    backgroundColor: '#bfbfbf',
  },
  contentContainer: {
  },
  headerView: {
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  headerIcons: {
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
  headerContent: {
    paddingTop: 10,
    marginLeft: 20,
    paddingBottom: 5,
    flex: 3,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  headerContentTitle: {
    color: '#3f3f3f',
    fontSize: 20,
    fontStyle: 'italic',
    fontFamily: 'calibri-italic',
  },
  headerPlayer: {
  	paddingLeft: 5,
  	flex: 0.5
  },
  playerView: {
  	paddingTop: 10,
  	paddingBottom: 10,
  	flex: 1,
  	flexDirection: 'row',
    flexWrap:'wrap'
  },
  playerImage: {
  	justifyContent: 'center',
  	flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: 44,
  	width: 44,
  },
  icoNavigate: {
    width: 30,
    height: 30,
  },
  footerView: {
    marginLeft: 5,
    marginRight: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  footerLike: {
    paddingTop: 5,
    paddingBottom: 8,
    paddingLeft: 10,
    paddingRight: 5,
    flex: 1,
    alignItems: 'flex-end',
    display: 'flex',
    flexDirection: 'row'
  },
  footerComments: {
    paddingTop: 5,
    paddingBottom: 8,
    paddingLeft: 5,
    paddingRight: 5,
    flex: 1,
    alignItems: 'flex-end',
    display: 'flex',
    flexDirection: 'row'
  },
  likeImage: {
    height: 34,
    width: 34,
    resizeMode: 'contain',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  commentImage: {
    height: 34,
    width: 34,
    resizeMode: 'contain',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  totalLike: {
    paddingBottom: 8,
    flex: 1,
    paddingLeft: 12,
    justifyContent: 'center',
  },
  backgroundVideo: {
    height: 160,
    width: '100%',
  },
  contentView: {
    marginLeft: 5,
    marginRight: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  content2View: {
    marginLeft: 5,
    marginRight: 5,
    flex: 1,
  },
  postPicture: {
    height: 160,
    width: '100%',
    flex: 1,
  }
};
