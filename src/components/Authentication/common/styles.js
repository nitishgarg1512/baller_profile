import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default {
  tosChildren: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  displayFlexCenterRow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerMain: {
    fontSize: 25,
    color: '#000',
    fontFamily: 'calibri',
  },
  headerBaller: {
    color: '#004372',
  },
  headerProfile: {
    color: '#e30000',
  },
  tos: {
    marginTop: 30,
    paddingTop: 30,
  },
  tosMain: {
    marginTop: 30,
    fontFamily: 'calibri',
    fontSize: 16,
    textAlign: 'center',
  },
  tosTerms: {
    marginTop: 0,
    fontFamily: 'calibri',
    fontSize: 16,
    textAlign: 'center',
    color: '#e30000',
    textDecorationLine: 'underline',
  },
  tosConditions: {
    marginTop: 0,
    fontFamily: 'calibri',
    fontSize: 16,
    textAlign: 'center',
    color: '#4088c9',
    textDecorationLine: 'underline',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,.9)',
    display: 'flex',
  },
  contentContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  backgroundImageStyle: {
    resizeMode: 'cover',
  },
  buttonContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainerKeyboard: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  itemEmail: {
    marginTop: 20,
    borderBottomWidth: 2,
  },
  itemPassword: {
    marginTop: 25,
    borderBottomWidth: 2,
  },
  displayFlexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButton: {
    backgroundColor: 'transparent',
    borderColor: '#fff',
    borderStyle: 'solid',
    borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 41,
    marginLeft: 25,
    marginRight: 25,
    width: 270,
  },
  reverseSubmitButton: {
    backgroundColor: '#0172c1',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 41,
    marginLeft: 25,
    marginRight: 25,
    width: 270,
  },
  registrationReverseSubmitButton: {
    backgroundColor: '#0172c1',
    paddingTop: 9,
    paddingBottom: 9,
    borderRadius: 41,
    width: width - 50,
  },
  submitButtonRegistration: {
    backgroundColor: '#0172c1',
    paddingTop: 7,
    paddingBottom: 7,
    borderRadius: 41,
    width: width - 50,
  },
  registrationSubmitButtonText: {
    color: '#fff',
    fontFamily: 'calibri',
    fontSize: 19,
    textAlign: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontFamily: 'calibri',
    fontSize: 23,
    textAlign: 'center',
  },
  subheadingWelcome: {
    fontFamily: 'calibri',
    fontSize: 16,
    color: '#fff',
  },
  backgroundImageSize: {
    width: '100%',
    height: '100%',
  },
  flexContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  registrationFlexContainer: {
    marginTop: 20,
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: '#000',
  },
  footerContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingBottom: 10,
  },
  logo: {
    flex: 'auto',
    height: 100,
    width: 100,
  },
  logoWelcome: {
    marginTop: 30,
    flex: 1,
    height: 100,
    width: 100,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  footerChildContainer: {
    position: 'absolute',
    bottom: 17,
    right: 38,
  },
  avoidingView: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    color: '#fff',
    fontFamily: 'calibri',
    fontSize: 19,
  },
  inputLabel: {
    color: 'rgba(255,255,255,.3)',
    fontFamily: 'calibri-italic',
    fontSize: 16,
    flex: 1,
  },
  inputLabelRegistration: {
    color: 'rgba(0,0,0,.6)',
    fontFamily: 'calibri-italic',
    fontSize: 16,
    flex: 1,
  },
  subeading2Login: {
    fontFamily: 'calibri',
    color: '#fff',
    fontSize: 15,
    paddingTop: 30,
  },
  loginLink: {
    fontFamily: 'calibri',
    color: '#0172c1',
    fontSize: 15,
    paddingTop: 30,
    paddingBottom: 50,
  },
  forgotPasswordContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'flex-start',
    textAlign: 'left',
  },
  forgotPassword: {
    color: '#0172c1',
    textDecorationLine: 'underline',
    fontFamily: 'calibri-italic',
    fontSize: 15,
    textAlign: 'left',
    marginTop: 24,
  },
  registrationItem: {
    marginBottom: 8,
    borderBottomColor: '#0172c1',
    marginLeft: 27,
    marginRight: 27,
  },
  registrationOr: {
    fontFamily: 'calibri-italic',
    fontSize: 18,
    color: '#000',
  },
  registrationOrContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 7,
    marginBottom: 7,
  },
  globalFlex: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  instaButton: {
    borderColor: '#9220a3',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 41,
    width: width - 50,
    padding: 7,
    display: 'flex',
    paddingLeft: 17,
    paddingRight: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  instaText: {
    color: '#9220a3',
    fontSize: 15,
    fontFamily: 'calibri',
  },
  twitterButton: {
    marginTop: 17,
    borderColor: '#26a6d1',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 41,
    width: width - 50,
    padding: 10,
    paddingLeft: 17,
    paddingRight: 17,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  twitterText: {
    color: '#26a6d1',
    fontSize: 15,
    fontFamily: 'calibri',
    textAlign: 'center',
  },
  logoTwitter: {
    height: 27,
    width: 27,
  },
  logoInsta: {
    height: 27,
    width: 27,
  },
};
