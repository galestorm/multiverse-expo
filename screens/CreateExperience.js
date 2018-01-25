import React, { Component } from 'react';
import { ScrollView, Text, Alert, Image, View, TextInput, AsyncStorage } from 'react-native';
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
              placeholder={'Title...'}
              value={this.state.title}
              onChangeText={title => this.setState({ title })}
              autoCorrect={false}
              style={{height: 40, width: 260, paddingLeft: 10, paddingRight: 10, fontSize: 18}}
              />
              <TextInput
                placeholder={'Notes...'}
                value={this.state.notes}
                onChangeText={notes => this.setState({ notes })}
                autoCorrect={false}
                //multiline={true}
                autoGrow={true}
                style={{height: 40, width: 260, paddingLeft: 10, paddingRight: 10}}
                />
            <View style={styles.imageContainer}>
              <Image source={{ uri: `${FileSystem.documentDirectory}photos/Photo_${photoId}.jpg` }} style={styles.imageStyle} />
            </View>
            <Button text={'Save Experience'} onPress={() => this.saveExperience()}/>
            <Text style={styles.title}>{this.props.navigation.state.params.poem.title}</Text>
            <Text style={styles.author}>{this.props.navigation.state.params.poem.author}</Text>
            <Text style={styles.lines}>{this.props.navigation.state.params.poem.lines}</Text>
          </CardSection>
        </Card>
      </ScrollView>
    );
  }
};

const styles = {
  imageStyle: {
      height: 260,
      flex: 1,
      width: 260
    },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  title: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 10
  },
  author: {
    paddingLeft: 10,
    paddingBottom: 10
  },
  lines: {
    paddingLeft: 10
  }
}


export default CreateExperience;
