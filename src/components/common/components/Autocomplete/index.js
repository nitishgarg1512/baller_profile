import Autocomplete from 'react-native-autocomplete-input';
import React, { Component } from 'react';
import { isEqual } from 'lodash';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 25,
    width: '100%',
    borderWidth: 0,
    borderColor: 'transparent',
  },
  autocompleteContainer: {
    left: 25,
    position: 'absolute',
    right: 25,
    top: 0,
    zIndex: 1,
    height: 'auto',
    width: '87%',
    justifyContent: 'center',
    borderWidth: 0,
    borderColor: 'transparent',
  },
  itemText: {
    fontSize: 15,
    margin: 2,
    color: 'black',
    borderColor: 'transparent',
  },
  descriptionContainer: {
    backgroundColor: '#fff',
    marginTop: 25,
    borderWidth: 0,
    borderColor: 'transparent',
  },
  infoText: {
    textAlign: 'center',
    borderColor: 'transparent',
  },
  titleText: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center',
    fontFamily: 'calibri',
    borderWidth: 0,
    borderColor: 'transparent',
  },
  directorText: {
    color: 'grey',
    fontSize: 12,
    marginBottom: 10,
    textAlign: 'center',
    borderWidth: 0,
    borderColor: 'transparent',
  },
  openingText: {
    textAlign: 'center',
    borderWidth: 0,
    borderColor: 'transparent',
  },
});

class AutocompleteExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: props.data,
      query: '',
    };
  }

  componentWillReceiveProps(newProps) {
    const { data } = this.props;

    if (!isEqual(newProps.data, data)) {
      this.setState({
        films: newProps.data,
      });
    }
  }

  findFilm(query) {
    if (query === '') {
      return [];
    }

    const { films } = this.state;
    const regex = new RegExp(`${query.trim()}`, 'i');
    return films.filter(film => film.label.search(regex) >= 0);
  }

  static renderFilm() {
    return (
      <View>
        <Text style={styles.titleText}>&nbsp;</Text>
      </View>
    );
  }

  render() {
    const { query } = this.state;
    const films = this.findFilm(query);
    const comp = (a, b) => a.label.toLowerCase().trim() === b.label.toLowerCase().trim();

    return (
      <View style={[styles.container, { height: films.length > 0 ? films.length * 15 : 60 }]}>
        <Autocomplete
          autoCapitalize="none"
          autoCorrect={false}
          inputContainerStyle={{ borderWidth: 0, borderBottomWidth: 1, borderColor: 'black' }}
          containerStyle={styles.autocompleteContainer}
          data={films.length === 1 && comp(query, films[0]) ? [] : films}
          defaultValue={query}
          onChangeText={text => this.setState({ query: text })}
          placeholder="Postcode"
          placeholderTextColor="black"
          renderItem={item => (
            <TouchableOpacity onPress={() => this.setState({ query: item.label })}>
              <Text style={styles.itemText}>
                {item.label}
              </Text>
            </TouchableOpacity>
          )}
        />
        <View style={styles.descriptionContainer}>
          {films.length > 0 ? (
            AutocompleteExample.renderFilm(films[0])
          ) : null}
        </View>
      </View>
    );
  }
}

export default AutocompleteExample;
