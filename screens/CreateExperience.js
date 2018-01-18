import React, { Component } from 'react';
import { ScrollView, Text, Alert, Image, TextInput } from 'react-native';
import { FileSystem } from 'expo';
import Card from '../components/Card';
import CardSection from '../components/CardSection';
import Button from '../components/Button';

class CreateExperience extends Component {
  state = { title: '', notes: '' }

  saveExperience() {
    console.log (`Title is ${this.state.title}.`)
    console.log (`photoID is ${this.props.navigation.state.params.photoId}`)
    console.log (`${this.props.navigation.state.params.poem}`)
    console.log (`Notes are ${this.state.notes}`)
  }

  render() {
    // console.log(this.props.navigation.state.params.poem)
    // console.log(`photoID is ${this.props.navigation.state.params.photoId}`)
    const photoId = this.props.navigation.state.params.photoId;
    return (
      <ScrollView>
        <Card>
          <CardSection>
            <TextInput
              placeholder={'Give your experience a title'}
              value={this.state.title}
              onChangeText={title => this.setState({ title })}
              style={{height: 20, width: 100}}
              />
          </CardSection>
          <CardSection>
            <Image source={{ uri: `${FileSystem.documentDirectory}photos/Photo_${photoId}.jpg` }} style={styles.imageStyle} />
          </CardSection>
          <CardSection>
            <Text>{this.props.navigation.state.params.poem.lines}</Text>
          </CardSection>
          <CardSection>
            <TextInput
              placeholder={'Notes...'}
              value={this.state.notes}
              onChangeText={notes => this.setState({ notes })}
              style={{height: 20, width: 100}}
              />
          </CardSection>
          <CardSection>
            <Button text={'Save Experience'} onPress={() => this.saveExperience()}/>
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
