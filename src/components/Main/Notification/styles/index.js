import { StyleSheet, Dimensions } from 'react-native';

export default {
  container: {
    flex: 1,
  },
  headerWrapper: {
    backgroundColor: 'blue',
    height: 50,
    lineHeight: 50,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  headerText: {
    textTransform: 'uppercase',
    fontFamily: 'calibri',
    fontSize: 20,
    textAlign: 'left',
    color: '#FFFFFF',
  },
  teamContainer: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  itemView: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: 'row',
  },
  infoView: {
    alignItems: 'flex-start',
    marginLeft: 10,
    justifyContent: 'center',
  },
  username: {
    fontFamily: 'calibri',
    fontSize: 18,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  infoText: {
    fontFamily: 'calibri',
    fontSize: 15,
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#CCC',
  },
  signView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  signButton: {
    backgroundColor: 'blue',
    borderRadius: 20,
    padding: 5,
    marginBottom: 5,
  },
  signButtonText: {
    fontFamily: 'calibri',
    fontSize: 15,
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#ffffff',
  },
  timerText: {
    fontFamily: 'calibri',
    fontSize: 12,
    textAlign: 'center',
    fontStyle: 'italic',
  },
};
