import React, { Component } from 'react';
import { View, Text, Alert, ScrollView, AsyncStorage } from 'react-native';
import axios from 'axios';
import Card from '../components/Card';
import CardSection from '../components/CardSection';
import Button from '../components/Button';


class PoemDetail extends Component {
  constructor(props) {
    super(props);

    const { title, author, lines, source, id } = this.props.navigation.state.params.poem;

    this.poem = { title, author, lines, source, id };
  }

  navigateToSavedPoems() {
    AsyncStorage.getItem('uid')
      .then((uid) => {
        axios.get(`https://multiverse-api.herokuapp.com/saved_poems?uid=${uid}`)
          .then((response) => {
            this.props.navigation.navigate('SavedPoems', { saved_poems: response.data.reverse() });
          });
      });
  }

  savePoem() {
    AsyncStorage.getItem('uid')
      .then((uid) => {
        axios.post(`https://multiverse-api.herokuapp.com/saved_poems?uid=${uid}&poem_id=${this.poem.id}`)
          .then((response) => {
            if (response.status === 200) {
              Alert.alert('Successfully saved poem!');
            }
            this.navigateToSavedPoems();
          });
      });
  }

  navigateToCamera() {
    this.props.navigation.navigate('CameraScreen', { poem: this.poem });
  }

  render() {
    return (
      <ScrollView>
        <Card>
          <CardSection style={{flexDirection: 'column'}}>
            <Text style={styles.headerTitle}>{this.poem.title}</Text>
            <Text style={styles.headerSubtitle}>{this.poem.author}</Text>
            <Text style={styles.lines}>{this.poem.lines}</Text>
          </CardSection>
          <CardSection>
            <Text style={styles.source}>{this.poem.source}</Text>
          </CardSection>
          <CardSection>
            <Button onPress={() => this.savePoem()} text={'Save Poem'} />
          </CardSection>
          <CardSection>
            <Button onPress={() => this.navigateToCamera()} text={'Create Experience'} />
            <View style={{marginBottom: 20}}></View>
          </CardSection>
        </Card>
      </ScrollView>
    );
  }
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTitle: {
    fontSize: 18,
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 10
  },
  headerSubtitle: {
    paddingLeft: 10,
    paddingBottom: 10
  },
  lines: {
    paddingLeft: 10
  },
  source: {
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 10
  }
};

export default PoemDetail;
