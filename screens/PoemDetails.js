import React, { Component } from 'react';
import { View, Text } from 'react-native';

class PoemDetail extends Component {
  render() {
    return (
      <View style={styles.detailContainer}>
        <Text>{this.props.navigation.state.params.poem.title}</Text>
      </View>
    );
  }
}

const styles = {
  detailContainer: {
    marginTop: 50,
  },
};

export default PoemDetail;
