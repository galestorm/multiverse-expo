import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ListItem, Thumbnail, Text, Body } from 'native-base';
import { FileSystem } from 'expo';
import { Ionicons } from '@expo/vector-icons';


export default class ThumbnailList extends Component {

  navigateToExperienceDetails(props) {
    this.props.navigate('ExperienceDetails', { experience: props.experience, poem: props.poem })
  }
  render() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
    date = new Date(this.props.experience.created_at);
    const day = date.getDate();
    const month = monthNames[date.getMonth() + 1]
    const year = date.getFullYear();
    return (
        <ListItem style={{marginRight: 20 }}>
            <Thumbnail square size={80} source={{ uri: `${FileSystem.documentDirectory}photos/Photo_${this.props.experience.photo_id}.jpg` }} />
            <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.navigateToExperienceDetails(this.props)}>
                <Body>
                  <Text style={{fontSize: 18}}>{this.props.experience.title}</Text>
                  <Text note>{`${month} ${day}, ${year}`}</Text>
                </Body>
                <View style={{marginRight: 45}}>
                <Ionicons
                  name={`ios-arrow-forward`}
                  size={28}
                />
                </View>
            </TouchableOpacity>
        </ListItem>
    );
  }
}
