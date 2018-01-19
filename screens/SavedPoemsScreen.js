import React from 'react';
import { Text, View, AsyncStorage, FlatList } from 'react-native';
import axios from 'axios';
import Header from '../components/Header';
import ListItem from '../components/ListItem';


export default class SavedPoemsScreen extends React.Component {
  static navigationOptions = {
    title: 'SavedPoems',
  };

  componentWillMount() {
    AsyncStorage.getItem('uid')
      .then((uid) => {
        axios.get(`https://multiverse-api.herokuapp.com/saved_poems?uid=${uid}`)
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
        axios.get(`https://multiverse-api.herokuapp.com/saved_poems?uid=${uid}`)
          .then((response) => {
            this.setState({ saved_poems: response.data });
          });
      });
  }

  renderRow(item) {
    console.log('row is re-rendering')
    return(
      <ListItem savedPoem={item}
      navigate={this.props.navigation.navigate}
      />
    )
  }

  render() {
    console.log('list is re-rendering')
    if (this.props.navigation.state.params !== undefined) {
      return (
        <View style={styles.container}>
          <Header headerText={'Saved Poems'}/>
          <FlatList data={this.props.navigation.state.params.saved_poems}
          renderItem={({ item }) => this.renderRow(item)}
          keyExtractor={(item, index) => index} />
        </View>
      );
    } else if (this.state) {
      return (
        <View style={styles.container}>
          <Header headerText={'Saved Poems'}/>
          <FlatList data={this.state.saved_poems}
          renderItem={({ item }) => this.renderRow(item)}
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
    backgroundColor: '#fff',
  },
};
