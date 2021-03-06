import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default {
  my80: {
    marginTop: 80,
    marginBottom: 80,
  },
  colorBlack: {
    color: '#000',
  },
  backgroundWhite: {
    backgroundColor: '#fff',
  },
  backgroundRed: {
    backgroundColor: '#e30000',
  },
  my20: {
    marginTop: 20,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,.79)',
    display: 'flex',
    flexDirection: 'column',
  },
  contentContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  display1: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'uppercase',
    fontFamily: 'calibri',
    textAlign: 'center',
  },
  display1Step2: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'uppercase',
    fontFamily: 'calibri',
    textAlign: 'center',
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
  submitButton: {
    backgroundColor: '#0172c1',
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 0,
    width: width - 50,
  },
  subeading2Welcome: {
    fontFamily: 'calibri',
    color: '#fff',
    fontSize: 20,
    paddingTop: 30,
  },
  loginLink: {
    fontFamily: 'calibri-bold',
    color: '#fff',
    fontSize: 20,
    paddingTop: 30,
    paddingBottom: 50,
    textDecorationLine: 'underline',
  },
  submitButtonText: {
    color: '#fff',
    fontFamily: 'calibri',
    fontSize: 20,
    textAlign: 'center',
  },
  display1Welcome: {
    fontFamily: 'calibri-italic',
    fontSize: 30,
    color: '#fff',
    paddingBottom: 10,
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
  flex1: {
    flex: 1,
  },
  flex025: {
    flex: 0.25,
  },
  flex05: {
    flex: 0.5,
  },
  flexContainer: {
  },
  footerContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingBottom: 30,
  },
  headerIcon: {
    fontSize: 35,
    color: 'rgba(255,255,255,.3)',
    paddingRight: 25,
    paddingTop: 10,
  },
  headerCloseContainer: {
    position: 'absolute',
    top: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    flex: 1,
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
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  footerChildContainer: {
    position: 'absolute',
    bottom: 23,
    right: 34,
  },
  skipButton: {
    fontFamily: 'calibri',
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 21,
  },
  dotStyle: {
    backgroundColor: 'rgba(255,255,255,.3)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  activeDotStyle: {
    backgroundColor: '#fff',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
};
