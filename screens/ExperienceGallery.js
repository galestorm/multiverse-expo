import React from 'react';
import { Text, View, AsyncStorage, FlatList } from 'react-native';
import axios from 'axios';
import Header from '../components/Header';
import ThumbnailList from '../components/ThumbnailList';

export default class ExperienceGallery extends React.Component {
  static navigationOptions = {
    title: 'ExperienceGallery',
  };

  componentWillMount() {
    AsyncStorage.getItem('uid')
      .then((uid) => {
        axios.get(`https://multiverse-api.herokuapp.com/experiences?uid=${uid}`)
          .then((response) => {
            console.log('setting state for experiences')
            this.setState({ experiences: response.data });
          });
      });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
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
    if (this.props.navigation.state.params !== undefined) {
      return (
        <View style={{backgroundColor: 'white'}}>
          <FlatList data={this.props.navigation.state.params.experiences}
          renderItem={({ item }) => <ThumbnailList experience={item.experience} poem={item.poem} navigate={this.props.navigation.navigate} />}
          keyExtractor={(item, index) => index} />
        </View>
      );
    } else if (this.state) {
      return (
        <View style={{backgroundColor: 'white'}}>
          <FlatList data={this.state.experiences}
          renderItem={({ item }) => <ThumbnailList experience={item.experience} poem={item.poem} navigate={this.props.navigation.navigate} />}
          keyExtractor={(item, index) => index} />
        </View>
      )
    }
    return null;
  }
}
