import React from 'react';
import { Text, View, AsyncStorage, FlatList } from 'react-native';
import axios from 'axios';

export default class SavedPoemsScreen extends React.Component {
  static navigationOptions = {
    title: 'SavedPoems',
  };

  componentWillMount() {
    AsyncStorage.getItem('uid')
      .then((uid) => {
        axios.get(`http://localhost:3000/saved_poems?uid=${uid}`)
          .then((response) => {
            this.setState({ saved_poems: response.data });
          });
      });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.getSavedPoems();
    }
  }

  getSavedPoems() {
    AsyncStorage.getItem('uid')
      .then((uid) => {
        axios.get(`http://localhost:3000/saved_poems?uid=${uid}`)
          .then((response) => {
            this.setState({ saved_poems: response.data });
          });
      });
  }

  render() {
    if (this.props.navigation.state.params !== undefined) {
      return (
        <View>
          <FlatList data={this.props.navigation.state.params.saved_poems}
          renderItem={({ item }) => <Text>{item.title}</Text>}
          keyExtractor={(item, index) => index} />
        </View>
      );
    } else if (this.state) {
      return (
        <View>
          <FlatList data={this.state.saved_poems}
          renderItem={({ item }) => <Text>{item.title}</Text>}
          keyExtractor={(item, index) => index} />
        </View>
      );
    }
    return null;
  }
}

const styles = {
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
};
