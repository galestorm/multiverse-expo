import React, { Component } from 'react';
import { ScrollView, Text, Alert, Image } from 'react-native';
import { FileSystem } from 'expo';
import Card from '../components/Card';
import CardSection from '../components/CardSection';

class CreateExperience extends Component {

  render() {
    console.log(this.props.navigation.state.params.poem)
    console.log(`photoID is ${this.props.navigation.state.params.photoId}`)
    const photoId = this.props.navigation.state.params.photoId;
    return (
      <ScrollView>
        <Card>
          <CardSection>
            <Text>Create New Experience</Text>
          </CardSection>
          <CardSection>
            <Image source={{ uri: `${FileSystem.documentDirectory}photos/Photo_${photoId}.jpg` }} style={styles.imageStyle} />
          </CardSection>
          <CardSection>
            <Text>{this.props.navigation.state.params.poem.lines}</Text>
          </CardSection>
        </Card>
      </ScrollView>
    );
  }
};

const styles = {
  imageStyle: {
      height: 300,
      flex: 1,
      width: null
    }
}


export default CreateExperience;
