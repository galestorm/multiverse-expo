import React, { Component } from 'react';
import { Container, Header, Content, Button, Icon, Text } from 'native-base';
export default class FBbutton extends Component {
  render() {
    return (
          <Button iconLeft light>
            <Icon name='arrow-back' />
            <Text>Login with Facebook</Text>
          </Button>
    );
  }
}
