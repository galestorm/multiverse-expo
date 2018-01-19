import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ListItem, Thumbnail, Text, Body } from 'native-base';
import { FileSystem } from 'expo';
export default class ThumbnailList extends Component {

  navigateToExperienceDetails() {
    console.log('We out here navigating yall')
  }
  render() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
    date = new Date(this.props.experience.created_at);
    const day = date.getDate();
    const month = monthNames[date.getMonth() + 1]
    const year = date.getFullYear();
    return (
        <ListItem>
            <Thumbnail square size={80} source={{ uri: `${FileSystem.documentDirectory}photos/Photo_${this.props.experience.photo_id}.jpg` }} />
            <TouchableOpacity onPress={() => this.navigateToExperienceDetails()}>
              <Body>
                <Text>{this.props.experience.title}</Text>
                <Text note>{`${month} ${day}, ${year}`}</Text>
              </Body>
            </TouchableOpacity>
        </ListItem>
    );
  }
}
