import React, { Component } from 'react';
import { View, Text, Alert, ScrollView, AsyncStorage } from 'react-native';
import Card from '../components/Card';
import CardSection from '../components/CardSection';
import Button from '../components/Button';
import axios from 'axios';

class PoemDetail extends Component {
  constructor(props) {
    super(props);

    const { title, author, lines, source, id } = this.props.navigation.state.params.poem;

    this.poem = { title, author, lines, source, id };
  }

  updateParentState() {
    console.log(`in update parent state`)
    this.props.navigation.state.params.updateParentState();
  }

  savePoem() {
    AsyncStorage.getItem('uid')
      .then((uid) => {
        axios.post(`http://localhost:3000/saved_poems?uid=${uid}&poem_id=${this.poem.id}`)
        .then((response) => {
          if(response.status == 200) {
            Alert.alert(`Successfully saved poem!`)
            this.updateParentState();
          }
        })
      })
  }

  render() {
    console.log(`state is ${this.state}`)
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
        </Card>
      </ScrollView>
    );
  }
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
}

export default PoemDetail;
