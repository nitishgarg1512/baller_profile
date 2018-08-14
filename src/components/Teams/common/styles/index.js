import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  my70: {
    marginTop: 70,
    marginBottom: 70,
  },
  borderRadiusCircle: {
    borderRadius: 100,
  },
  marginBottom80: {
    paddingBottom: 80,
  },
  marginTop50: {
    marginTop: 50,
  },
  playerFollowButtonText: {
    fontFamily: 'calibri-bold',
    fontSize: 18,
    color: '#0c406a',
  },
  playerFollowButton: {
    marginTop: 15,
    borderRadius: 10,
    borderColor: '#0c406a',
    borderWidth: 2,
    padding: 6,
    paddingLeft: 25,
    paddingRight: 25,
  },
  wx80: {
    width: width - 80,
  },
  displayFlexSpaceBetweenRow: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  playerNameText: {
    fontFamily: 'calibri-bold',
    color: '#000',
    fontSize: 18,
  },
  playerNameSecondaryText: {
    fontFamily: 'calibri',
    fontSize: 15,
  },
  pb5: {
    paddingBottom: 5,
  },
  py10: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  TeamsJoinSecondaryText: {
    fontSize: 25,
    fontFamily: 'calibri',
    color: 'gray',

  },
  headerMain: {
    fontFamily: 'calibri',
    fontSize: 20,
    color: '#000',
  },
  thumbnailProp: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
  teamModalLeagueContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 10,
  },
  teamModalProps: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 10,
  },
  modalContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 30,
  },
  marginBottom50: {
    marginBottom: 50,
  },
  inviteBallersText: {
    marginTop: 20,
    fontFamily: 'calibri',
    color: '#000',
    fontSize: 16,
  },
  inviteBallersContainer: {
    marginBottom: 90,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'column',
  },
  inviteBallersButton: {
    backgroundColor: '#000',
    borderRadius: 41,
    padding: 20,
    paddingLeft: 35,
    paddingRight: 35,
  },
  inviteBallersButtonText: {
    fontFamily: 'calibri',
    fontSize: 23,
    color: '#fff',
  },
  TeamsConfrimationMessageContainer: {
    paddingLeft: 30,
    paddingRight: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  TeamsConfrimationSecondaryText: {
    paddingTop: 15,
    fontFamily: 'calibri',
    fontSize: 20,
    textAlign: 'center',
    color: '#000',
  },
  TeamsConfrimationMainText: {
    fontFamily: 'calibri-bold',
    fontSize: 25,
    color: '#000',
  },
  profilePicIcon: {
    fontSize: 30,
  },
  profilePicText: {
    bottom: 10,
    position: 'absolute',
    fontFamily: 'calibri-italic',
    color: '#000',
  },
  profilePicContainer: {
    marginTop: 15,
    marginBottom: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  TeamsConfrimationPicContainer: {
    marginTop: 20,
    marginBottom: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  profilePic: {
    position: 'relative',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000',
    height: 180,
    width: 180,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerIcon: {
    fontSize: 35,
    color: 'rgba(0,0,0,.3)',
    paddingRight: 25,
    paddingTop: 10,
  },
  headerContainer: {
    display: 'flex',
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  footerModal: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  footer: {
    position: 'relative',
    bottom: 0,
    width: '100%',
  },
  footerButtonModal: {
    backgroundColor: '#000',
    color: '#fff',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 16,
    paddingBottom: 16,
    elevation: 7,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'grey',
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  footerButton: {
    backgroundColor: '#000',
    color: '#fff',
    width,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 16,
    paddingBottom: 16,
    elevation: 7,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'grey',
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  bottomSecondaryText: {
    fontFamily: 'calibri-italic',
    textDecorationLine: 'underline',
    fontSize: 18,
    marginBottom: 30,
  },
  bottomActions: {
    marginTop: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },
  bottomMainButton: {
    backgroundColor: '#000',
    color: '#fff',
    width: width - 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 16,
    paddingBottom: 16,
    marginBottom: 20,
    elevation: 7,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'grey',
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  bottomMainButtonTextConfirmation: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'calibri-italic',
    textAlign: 'center',
  },
  bottomMainButtonTextModal: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'calibri',
    textAlign: 'center',
  },
  bottomMainButtonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'calibri-italic',
    textAlign: 'center',
  },
  scrollerContainer: {
    borderTopColor: 'rgba(0,0,0,.08)',
    borderTopWidth: 1,
    borderBottomColor: 'rgba(0,0,0,.08)',
    borderBottomWidth: 1,
  },
  teamScroller: {
    marginLeft: 20,
    paddingTop: 12,
    paddingBottom: 15,
    marginBottom: 10,
  },
  marginTop20: {
    marginTop: 20,
  },
  displayFlexCenterRowCreation: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  displayFlexCenterRow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },
  displayFlexCenterColumn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  TeamsJoinMainText: {
    fontFamily: 'calibri-bold',
    fontWeight: 'bold',
    color: '#000',
    fontSize: 25,
    textAlign: 'center',
  },
  TeamsSelectionTitle: {
    marginTop: 20,
    fontFamily: 'calibri-bold',
    fontWeight: 'bold',
    color: '#000',
    fontSize: 25,
    textAlign: 'center',
  },
  teamModalTitle: {
    fontFamily: 'calibri-bold',
    fontWeight: 'bold',
    color: '#000',
    fontSize: 28,
    textAlign: 'center',
  },
  itemLabel: {
    fontFamily: 'calibri-italic',
    fontSize: 16,
  },
  joinTeamCardImage: {
    height: 90,
    width: 90,
  },
  teamCardImage: {
    height: 125,
    width: 125,
  },
  TeamsConfrimationImage: {
    height: 180,
    width: 180,
  },
  item: {
    width: width - 50,
  },
  findTeamItem: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    width: width - 50,
    marginBottom: 25,
  },
  TeamsSelectionModalCardImage: {
    borderRadius: 5,
    borderWidth: 4,
    borderColor: '#fff',
    margin: 10,
    marginBottom: 30,
    elevation: 1,
    shadowColor: 'grey',
    shadowOpacity: 1,
    shadowRadius: 1,
    shadowOffset: { width: 0, height: 0 },
  },
  TeamsJoinCardImage: {
    borderRadius: 5,
    borderWidth: 4,
    borderColor: '#fff',
  },
  TeamsSelectionCardImage: {
    borderRadius: 5,
    borderWidth: 4,
    borderColor: '#fff',
    elevation: 4,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'grey',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    margin: 10,
  },
  TeamsSelectionCard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  TeamsSelectionModalCard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  TeamsSelectionCardDetails: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },
  TeamsSelectionCardDetailsText: {
    fontFamily: 'calibri-italic',
    fontSize: 16,
  },
  TeamsSelectionModalDetailsText: {
    fontFamily: 'calibri-italic',
    fontSize: 18,
    textAlign: 'center',
  },
  teamModalLeague: {
    fontFamily: 'calibri-italic',
    fontSize: 18,
    textAlign: 'center',
  },
  modal: {
    height: height - 50,
    width: width - 50,
  },
  modalContent: {
    flex: 1,
    backgroundColor: '#fff',
  },
  pt20: {
    paddingTop: 20,
  },
};
