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
            this.props.navigation.navigate('SavedPoems', { saved_poems: response.data });
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
          <CardSection>
            <View style={styles.headerContentStyle}>
              <Text style={styles.headerTextStyle}>{this.poem.title}</Text>
              <Text>{this.poem.author}</Text>
            </View>
          </CardSection>
          <CardSection>
            <Text>{this.poem.lines}</Text>
          </CardSection>
          <CardSection>
            <Text>{this.poem.source}</Text>
          </CardSection>
          <CardSection>
            <Button onPress={() => this.savePoem()} />
          </CardSection>
          <CardSection>
            <Text>Experiences</Text>
            <Button onPress={() => this.navigateToCamera()} />
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
  headerTextStyle: {
    fontSize: 18,
  },
};

export default PoemDetail;
