import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingRight: 10,
    paddingLeft: 10,
  },
  headerContainer: {
    height: 60,
  },
  header: {
    borderRadius: 10,
    borderColor: '#AAAAAA',
    borderWidth: 0.8,
    height: 60,
  },
  upcomingContainer: {
    width,
    height: 100,
    backgroundColor: 'yellow',
  },
  resultContainer: {
    width,
    height: 100,
    backgroundColor: 'pink',
  },
  fastestGoalsContainer: {
    width,
    height: 100,
    backgroundColor: 'green',
  },
  h3: {
    fontFamily: 'calibri',
    fontSize: 20,
    textTransform: 'capitalize',
  },
  group: {
    borderColor: '#AAAAAA',
    borderWidth: 0.8,
  },
  leagueName: {
    fontFamily: 'calibri',
    fontSize: 9,
  },
  matchGroup: {
    margin: 10,
  },
  match: {

  },
  teamName: {
    fontFamily: 'calibri',
    fontSize: 9,
  },
  infoMatch: {

  },
  notificationsItem: {

  },
  likeItem: {

  }
};
