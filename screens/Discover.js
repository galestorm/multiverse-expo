import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import Header from '../components/Header';
import PoemPreviewList from '../components/PoemPreviewList';

class Discover extends Component {
  state = { poems: [], lat: null, lng: null };

  componentWillMount() {
    const getPoems = () => {
      axios.get(`http://localhost:3000/weather?lat=${this.state.lat}&lon=${this.state.lng}`)
        .then((weatherResponse) => {
          const weatherDescription = weatherResponse.data.weather[0].main;
          axios.get(`http://localhost:3000/poems?query=${weatherDescription}`)
            .then((poemsResponse) => {
              this.setState({ poems: poemsResponse.data });
            });
        });
    };

    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
      getPoems();
    });
  }

  render() {
    console.log(`in index.js, state is ${this.state.poems.length}`);
    return (
      <View>
        <Header headerText="Poems" />
        <PoemPreviewList poems={this.state.poems} />
      </View>
    );
  }
}
export default Discover;
