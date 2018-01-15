import React from 'react';
import { Text, View, AsyncStorage } from 'react-native';
import axios from 'axios';

export default class SavedPoemsScreen extends React.Component {
  static navigationOptions = {
    title: 'SavedPoems',
  };

  componentDidMount() {
    AsyncStorage.getItem('uid')
      .then((uid) => {
        axios.get(`http://localhost:3000/saved_poems?uid=${uid}`)
          .then((response) => {
            this.setState({ saved_poems: response.data });
          });
      });
  }

  render() {

    if (this.state) {
      return (
        <View style={styles.container}>
          <Text>{this.state.saved_poems[0].title}</Text>
        </View>
      );
    } else {
      return null;
    }
  }
}

const styles = {
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
};
