import React from 'react';
import { Text, View, AsyncStorage, FlatList, Button } from 'react-native';
import axios from 'axios';

export default class SavedPoemsScreen extends React.Component {
  static navigationOptions = {
    title: 'SavedPoems',
  };

  // state = {saved_poems: []}

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
      // const saved_poems = this.props.navigation.state.params.saved_poems
      // this.setState({ saved_poems: saved_poems })
      this.getSavedPoems()
      console.log(`savedPoemps state changing`)
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   AsyncStorage.getItem('saved_poems')
  //     .then((saved_poems) => {
  //       this.setState({ saved_poems: saved_poems })
  //       .then(() => {
  //         return true
  //       })
  //     })
  // // You can access `this.props` and `this.state` here
  // // This function should return a boolean, whether the component should re-render.
  // }

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
        <FlatList data={this.props.navigation.state.params.saved_poems} renderItem={({item}) => <Text>{item.title}</Text>}/>
        <Button title="refresh" onPress={() => {this.getSavedPoems()}} />
        </View>
      );
    } else if (this.state) {
      return (
        <View>
        <FlatList data={this.state.saved_poems} renderItem={({item}) => <Text>{item.title}</Text>}/>
        <Button title="refresh" onPress={() => {this.getSavedPoems()}} />
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
