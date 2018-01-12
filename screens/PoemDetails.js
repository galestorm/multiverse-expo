import React, { Component } from 'react';
import { View, Text } from 'react-native';

class PoemDetail extends Component {
  constructor(props) {
    super(props);

    const { title, author, lines, source } = this.props.navigation.state.params.poem;
    this.poem = { title, author, lines, source };
  }
  render() {
    return (
      <View style={styles.detailContainer}>
        <Text>{this.poem.title}</Text>
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
