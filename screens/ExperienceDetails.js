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
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
    date = new Date(this.experience.created_at);
    const day = date.getDate();
    const month = monthNames[date.getMonth() + 1];
    const year = date.getFullYear();
    return (
      <ScrollView>
        <Card>
          <CardSection style={{flexDirection: 'row'}}>
            <Text style={styles.expTitle}>{this.experience_title}</Text>
            <Text style={styles.lines}>{`${month} ${day}, ${year}`}</Text>
            <Text style={styles.notes}>Notes: {this.experience.notes}</Text>
            <View style={styles.imageContainer}>
              <Image source={{ uri: `${FileSystem.documentDirectory}photos/Photo_${this.experience.photo_id}.jpg` }} style={styles.imageStyle} />
            </View>
            <Text style={styles.expTitle}>{this.poem.title}</Text>
            <Text style={styles.lines}>{this.poem.author}</Text>
            <Text style={styles.lines}>{this.poem.lines}</Text>
            <Text style={styles.source}>{this.poem.source}</Text>
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
      width: 260,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  expTitle: {
    fontSize: 23,
    // fontFamily: 'Cabin',
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 10
  },
  notes: {
    paddingLeft: 10,
    paddingBottom: 10,
    paddingRight: 10,
    fontStyle: 'italic'
  },
  lines: {
    paddingLeft: 10,
    paddingBottom: 10
  },
  source: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    fontSize: 10
  }

};
