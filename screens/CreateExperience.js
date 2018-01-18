import React, { Component } from 'react';
import { ScrollView, Text, Alert, Image, TextInput, AsyncStorage } from 'react-native';
import { FileSystem } from 'expo';
import axios from 'axios';
import Card from '../components/Card';
import CardSection from '../components/CardSection';
import Button from '../components/Button';

class CreateExperience extends Component {
  state = { title: '', notes: '' }

  saveExperience() {
    const title = this.state.title
    const photoId = this.props.navigation.state.params.photoId
    const poem_id = this.props.navigation.state.params.poem.id
    const notes = this.state.notes
    AsyncStorage.getItem('uid')
      .then((uid) => {
        console.log(uid)
        axios.post(`https://multiverse-api.herokuapp.com/experiences?uid=${uid}&poem_id=${poem_id}&photoId=${photoId}&title=${title}&notes=${notes}`)
          .then((response) => {
            if (response.status === 200) {
              Alert.alert('Successfully saved experience!');
            } else {
              Alert.alert('Something went wrong')
            }
            this.navigateToExperienceGallery();
          });
      });
  }

  navigateToExperienceGallery() {
    AsyncStorage.getItem('uid')
      .then((uid) => {
        console.log('got uid')
        axios.get(`https://multiverse-api.herokuapp.com/experiences?uid=${uid}`)
          .then((response) => {
            console.log('got experiences')
            this.props.navigation.navigate('ExperienceGallery', { experiences: response.data });
          });
      });
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
