import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
} from 'react-native';

import ArtistList from './ArtistList'
import { getArtists } from './api-client'

export default class HomeView extends Component {
  state = {
    artists: []
  }

  componentDidMount() {
    getArtists()
      .then(artists => this.setState({ artists }))
  }

  render() {
    return (
      <View style={styles.container}>
        <ArtistList artists={this.state.artists} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 20,
  },
});