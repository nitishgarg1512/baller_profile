import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  mb40: {
    marginBottom: 40,
  },
  skillButtonAlternate: {
    padding: 7,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 0.8,
    borderColor: '#0071c0',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 4,
  },
  skillsButtonContentAlternate: {
    marginTop: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  skillButtonText: {
    fontSize: 12,
    fontFamily: 'calibri',
    textAlign: 'center',
  },
  skillButton: {
    margin: 4,
    padding: 7,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 0.8,
    borderColor: '#0071c0',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  secondarySkillsContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  secondarySkillsContainer: {
    marginTop: 10,
    marginBottom: 10,
    elevation: 0,
    borderRadius: 5,
    backgroundColor: '#fff',
    width: '100%',
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  attackingText: {
    alignSelf: 'center',
    fontSize: 20,
    fontFamily: 'calibri',
    textAlign: 'center',
  },
  attackingContainer: {
    marginTop: 10,
    marginBottom: 10,
    elevation: 0,
    borderRadius: 5,
    backgroundColor: '#fff',
    width: '100%',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  skillsContainer: {
    marginTop: 10,
    marginBottom: 10,
    elevation: 0,
    borderRadius: 5,
    backgroundColor: '#fff',
    width: '100%',
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alternatePlayerCard: {
    marginTop: 10,
    marginBottom: 10,
    elevation: 0,
    borderRadius: 5,
    backgroundColor: '#fff',
    width: '100%',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  attributeText: {
    fontSize: 12,
    fontFamily: 'calibri-italic',
    color: 'rgba(0,0,0,.6)',
  },
  flexEndColumn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'column',
  },
  ratingContent: {
    width: width - 10,
    alignSelf: 'center',
  },
  ratingContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  h25w25: {
    height: 25,
    width: 25,
  },
  h100w100: {
    width,
    height,
  },
  labelText: {
    color: '#0071c0',
    fontFamily: 'calibri-italic',
  },
  bgBlue: {
    backgroundColor: '#0071c0',
  },
  disabledTab: {
    fontFamily: 'calibri-italic',
  },
  activeTab: {
    fontFamily: 'calibri-italic',
    color: '#0071c0',
  },
  flexCenterColumn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  bgWhite: {
    backgroundColor: '#fff',
  },
  navigationText: {
    fontFamily: 'calibri',
    fontSize: 20,
    color: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  bottomMainButtonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'calibri-italic',
    textAlign: 'center',
  },
  footerButton: {
    backgroundColor: '#0071c0',
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
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  fontSize30: {
    fontSize: 30,
  },
  colorLightBlue: {
    color: '#006dbf',
  },
  skillPillScore: {
    marginLeft: 2,
    borderRadius: 41,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    backgroundColor: '#0071c0',
    padding: 3,
    paddingLeft: 15,
    paddingRight: 15,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  skillPill: {
    borderRadius: 41,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: '#0071c0',
    padding: 3,
    paddingLeft: 15,
    paddingRight: 15,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  skillPillText: {
    fontFamily: 'calibri-italic',
    fontSize: 16,
    color: '#fff',
  },
  skillPillContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
    marginBototm: 10,
  },
  profileImage: {
    height: 60,
    width: 60,
    borderRadius: 60,
  },
  borderRadiusCircle: {
    borderRadius: 60,
    borderWidth: 1,
    borderColor: '#fff',
  },
  playerFollowingButton: {
    borderRadius: 41,
    backgroundColor: '#0071c0',
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft: 15,
  },
  playerFollowingButtonText: {
    fontFamily: 'calibri',
    fontSize: 13,
    color: '#fff',
  },
  playerFollowButton: {
    borderRadius: 41,
    borderColor: '#0071c0',
    borderWidth: 0.8,
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft: 15,
  },
  playerFollowButtonText: {
    fontFamily: 'calibri',
    fontSize: 13,
    color: '#0071c0',
  },
  hrLineSecondary: {
    borderBottomStyle: 'solid',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,0.3)',
  },
  playerCardContainer: {
    justifyContent: 'center',
    width: width - 25,
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'column',
  },
  playerCard: {
    marginTop: 10,
    marginBottom: 10,
    elevation: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    width: '100%',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexCenterRow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  playerCardName: {
    marginLeft: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  nameText: {
    fontFamily: 'calibri-italic',
    color: '#000',
    fontSize: 15,
  },
  tagText: {
    fontFamily: 'calibri-italic',
    color: 'rgba(0,0,0,.3)',
    fontSize: 11,
  },
  descText: {
    fontFamily: 'calibri-italic',
    color: 'rgba(0,0,0,.6)',
    fontSize: 13,
  },
  flexItemsEndColumn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'column',
  },
  bookingView: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: 10
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
        height: 44,
        width: 44,
    },
    bookingIcons: {
        alignItems: 'flex-end',
        flex: 1
    },
    navigationRightText: {
        fontFamily: 'calibri-italic',
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 12,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 5
    },
    navigationLeftText: {
        alignItems: 'flex-start',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    overView: {
    },
    statOverView: {
      display: 'flex',
    },
    profileOverView: {

    },
    profilePictureView: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 10,
      paddingTop: 10,
    },
    profileStatNavigate: {
      backgroundColor: '#fff',
    },
    navigateItemView: {
      justifyContent: 'center',
      flexDirection: 'row',
      borderWidth: 0.5,
      borderColor: '#e7e7e7',
    },
    navigateItemCol: {
      paddingTop: 10,
      paddingBottom: 10,
      flexDirection: 'row',
    },
    navigateTitleView: {
      flex: 3,
      paddingLeft: 15,
      alignItems: 'flex-start',
    },
    navigatePointView: {
      flex: 1
    },
    navigateTitleText: {
      fontSize: 12,
      color: '#595959',
      paddingTop: 3
    },
    navigatePointText: {
      fontSize: 14,
      color: '#595959',
      paddingTop: 3
    },
    navigateTitleImage: {
      height: 24,
      width: 24,
      borderRadius: 24/2,
      justifyContent: 'center',
    },
    navigateTitleContentView: {
      flex: 1
    },
    navigateTitleImageContentView: {
      flex: 1
    },
    playerPictureView: {
      
    },
    playerPicture: {
      height: 64,
      width: 64,
      borderRadius: 64/2,
    },
    playerMainTeamView: {
    },
    playerMainTeamPicture: {
      height: 28,
      width: 28,
      borderRadius: 28/2,
      marginLeft: 10,
    },
    fontSize10: {
      fontSize: 10,
    },
    ml10: {
      marginLeft: 10,
    },
    colorBlack: {
      color: '#000000',
    },
    navigateIcon: {
      paddingRight: 10,
      justifyContent: 'center',
    },
    fontSize20: {
      fontSize: 20,
    },
};
