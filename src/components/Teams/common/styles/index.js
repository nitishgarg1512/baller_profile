import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default {
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
  },
  bottomMainButtonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'calibri-italic',
    textAlign: 'center',
  },
  teamScroller: {
    borderTopColor: 'rgba(0,0,0,.08)',
    borderTopWidth: 1,
    borderBottomColor: 'rgba(0,0,0,.08)',
    borderBottomWidth: 1,
    paddingLeft: 20,
    paddingTop: 12,
    paddingBottom: 15,
    marginBottom: 10,
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
  teamSelectionTitle: {
    fontFamily: 'calibri-bold',
    fontWeight: 'bold',
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
  },
  itemLabel: {
    fontFamily: 'calibri-italic',
    fontSize: 16,
  },
  teamCardImage: {
    height: 125,
    width: 125,
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
  teamSelectionCardImage: {
    borderRadius: 5,
    borderWidth: 4,
    borderColor: '#fff',
    elevation: 4,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'grey',
    shadowOpacity: 1,
    shadowRadius: 10,
    margin: 10,
  },
  teamSelectionCard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  teamSelectionCardDetails: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },
  teamSelectionCardDetailsText: {
    fontFamily: 'calibri-italic',
    fontSize: 16,
  },
};
