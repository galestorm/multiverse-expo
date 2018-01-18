import React from 'react';
import { Text, View, AsyncStorage, FlatList } from 'react-native';
import axios from 'axios';

export default class ExperienceGallery extends React.Component {
  static navigationOptions = {
    title: 'ExperienceGallery',
  };

  componentWillMount() {
    AsyncStorage.getItem('uid')
      .then((uid) => {
        axios.get(`https://multiverse-api.herokuapp.com/experiences?uid=${uid}`)
          .then((response) => {
            this.setState({ experiences: response.data });
          });
      });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps != this.props) {
      this.getExperiences();
    }
  }

  getExperiences() {
    AsyncStorage.getItem('uid')
      .then((uid) => {
        axios.get(`https://multiverse-api.herokuapp.com/experiences?uid=${uid}`)
          .then((response) => {
            this.setState({ experiences: response.data });
          });
      });
  }

  render() {
    if (this.props.navigation.state.params != undefined) {
      return(
        <View>
          <FlatList data={this.props.navigation.state.params.experiences}
          renderItem={({ item }) => <Text>{item.title}</Text>}
          keyExtractor={(item, index) => index} />
        </View>
      );
    } else if (this.state) {
      <View>
        <FlatList data={this.state.experiences}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        keyExtractor={(item, index) => index} />
      </View>
    }
    return null;
  }
}
