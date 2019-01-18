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
    marginRight: 10,
  },
  itemView: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
  },
  infoView: {
    alignItems: 'flex-start',
    marginLeft: 10,
    justifyContent: 'center',
    flex: 1.5,
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
    width: 80,
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
    fontSize: 10,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  playButton: {
    backgroundColor: 'red',
    borderRadius: 20,
    padding: 5,
    marginBottom: 5,
    width: 80,
  },
  playButtonText: {
    fontFamily: 'calibri',
    fontSize: 15,
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#ffffff',
  },
  numberText: {
    fontFamily: 'calibri',
    fontSize: 25,
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#0000ff',
  },
  bgWhite: {
    backgroundColor: '#fff',
  },
  disabledTab: {
    fontFamily: 'calibri-italic',
  },
  activeTab: {
    fontFamily: 'calibri-italic',
    color: '#0071c0',
  },
  labelText: {
    color: '#0071c0',
    fontFamily: 'calibri-italic',
  },
  bgBlue: {
    backgroundColor: '#0071c0',
  },
  flexCenterColumn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
};
