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
    height: 50,
  },
  logoImg: {
    width: 40,
    height: 40,
  },
  soccerImg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginTop: 5,
  },
  header: {
    borderRadius: 10,
    borderColor: '#AAAAAA',
    borderWidth: 0.8,
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  upcomingContainer: {
    width: width - 20,
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
  itemContainer: {
    marginTop: 10,
  },
  h3: {
    fontFamily: 'calibri',
    fontSize: 20,
    textTransform: 'capitalize',
    marginBottom: 10,
  },
  group: {
    borderColor: '#AAAAAA',
    borderWidth: 0.8,
    borderRadius: 10,
    padding: 10,
  },
  leagueImg: {
    width: 30,
    height: 30,
  },
  leagueGroup: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leagueCol1: {
    height: 30,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leagueCol2: {
    height: 30,
    flex: 1,
    alignItems: 'flex-end',
  },
  leagueName: {
    fontFamily: 'calibri',
    fontSize: 14,
    textAlign: 'center',
    paddingTop: 5,
  },
  matchGroup: {
    margin: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  match: {
    flex: 1.2,
    alignItems: 'flex-start',
    paddingRight: 20,
  },
  seperateVertical: {
    borderColor: '#AAAAAA',
    borderRightWidth: 0.8,
    width: 1,
  },
  teamView: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
  },
  clubImage: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  teamName: {
    fontFamily: 'calibri',
    fontSize: 16,
  },
  infoMatch: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 20,
  },
  notificationsItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  pdLeft10: {
    paddingLeft: 10,
  },
};
