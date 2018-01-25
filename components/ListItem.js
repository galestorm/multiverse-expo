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
            this.props.navigate('SavedPoems', { saved_poems: response.data.reverse() });
          });
      });
  }

  render() {
    const {titleStyle, lineStyle} = styles;
    return (
      <View style={styles.container}>
        <View style={styles.poemContainer}>
          <Text style={titleStyle}>{this.props.savedPoem.title}</Text>
          <Text style={lineStyle} numberOfLines={1}>{this.props.savedPoem.lines}...</Text>
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
      </View>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
  lineStyle: {
    fontSize: 10,
    paddingLeft: 15,
    paddingTop: 5,
  },
  poemContainer: {
    flex: 4,
    justifyContent: 'center',
  },
  iconContainer: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 15,
    paddingTop: 7,
  },
  container: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#D5D4DA',
    borderWidth: 1,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#fff',
    position: 'relative',
    },
  };

export default ListItem;
