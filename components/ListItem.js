import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CardSection from './CardSection';

class ListItem extends Component {

  navigateToPoemDetails(savedPoem) {
    console.log('navigating')
    this.props.navigate('PoemDetails', { poem: savedPoem })
  }

  deleteSavedPoem(savedPoem) {
    console.log(savedPoem)
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
