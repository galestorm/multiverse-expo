import React, { Component } from 'react';
import { View, Text, Alert, ScrollView, Image } from 'react-native';
import { FileSystem } from 'expo';
import Card from '../components/Card';
import CardSection from '../components/CardSection';


export default class ExperienceDetails extends Component {
  constructor(props) {
    super(props);

    const { title, author, lines, source, id } = this.props.navigation.state.params.poem;
    const { photo_id, notes, created_at } = this.props.navigation.state.params.experience;
    this.experience_title = this.props.navigation.state.params.experience.title;

    this.poem = { title, author, lines, source, id };
    this.experience = { photo_id, notes, created_at };
  }
  render() {
    console.log(this.props)
    return (
      <ScrollView>
        <Card>
          <CardSection>
            <Text style={{fontSize: 18}}>{this.experience_title}</Text>
          </CardSection>
          <CardSection>
            <Text>Notes: {this.experience.notes}</Text>
          </CardSection>
          <CardSection>
            <Image source={{ uri: `${FileSystem.documentDirectory}photos/Photo_${this.experience.photo_id}.jpg` }} style={styles.imageStyle} />
          </CardSection>
          <CardSection>
            <Text>{this.poem.lines}</Text>
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
};
