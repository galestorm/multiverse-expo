import React, { Component } from 'react';
import { Text, View, TouchableOpacity, AsyncStorage, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import CardSection from './CardSection';

class ListItem extends Component {

  navigateToPoemDetails(savedPoem) {
    this.props.navigate('PoemDetails', { poem: savedPoem })
  }

  deleteSavedPoem(savedPoem) {
    AsyncStorage.getItem('uid')
      .then((uid) => {
        axios.delete(`https://multiverse-api.herokuapp.com/saved_poems?uid=${uid}&poem_id=${savedPoem.id}`)
          .then(() => {
            Alert.alert('Removing from Saved Poems')
            this.navigateToSavedPoems()
          });
      });
  }

  navigateToSavedPoems() {
    AsyncStorage.getItem('uid')
      .then((uid) => {
        axios.get(`https://multiverse-api.herokuapp.com/saved_poems?uid=${uid}`)
          .then((response) => {
            this.props.navigate('SavedPoems', { saved_poems: response.data });
          });
      });
  }

  render() {
    const {titleStyle} = styles;
    return (
      <CardSection>
        <View style={styles.poemContainer}>
          <Text style={titleStyle}>{this.props.savedPoem.title}</Text>
        </View>
        <TouchableOpacity onPress={() => this.navigateToPoemDetails(this.props.savedPoem)}>
          <View style={styles.iconContainer}>
            <Ionicons
              name={`ios-book-outline`}
              size={28}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.deleteSavedPoem(this.props.savedPoem)}>
          <View style={styles.iconContainer}>
            <Ionicons
              name={`ios-trash-outline`}
              size={28}
            />
          </View>
        </TouchableOpacity>
      </CardSection>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
  poemContainer: {
    flex: 4,
  },
  iconContainer: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 15,
  },
};

export default ListItem;
