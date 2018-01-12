import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Card from '../components/Card';
import CardSection from '../components/CardSection';

class PoemDetail extends Component {
  constructor(props) {
    super(props);

    const { title, author, lines, source } = this.props.navigation.state.params.poem;
    this.poem = { title, author, lines, source };
  }
  render() {
    return (
      <Card>
        <CardSection>
          <View style={styles.headerContentStyle}>
            <Text style={styles.headerTextStyle}>{this.poem.title}</Text>
            <Text>{this.poem.author}</Text>
          </View>
        </CardSection>
        <CardSection>
          <Text>{this.poem.lines}</Text>
        </CardSection>
        <CardSection>
          <Text>{this.poem.source}</Text>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
}

export default PoemDetail;
