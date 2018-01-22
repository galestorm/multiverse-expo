import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Swiper from './Swiper';

class PoemPreviewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poems: props.poems,
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      poems: props.poems,
    });
  }

  openPoemDetailsScreen(cardIndex) {
    const poem = this.state.poems[cardIndex];
    this.props.navigate('PoemDetails', { poem: poem });
  }

  render() {
    if (this.state.poems.length !== 0) {
      return (
        <View style={styles.container}>
          <Swiper
            cards={this.state.poems}
            renderCard={(card) => {
              return (
                <View style={styles.card}>
                  <Text style={styles.text} numberOfLines={10}>{card.lines}</Text>
                </View>
              );
            }}
            onSwiped={(cardIndex) => { console.log(cardIndex); }}
            onSwipedAll={() => { console.log('onSwipedAll'); }}
            onSwipedRight={(cardIndex) => this.openPoemDetailsScreen(cardIndex)}
            cardIndex={0}
            backgroundColor="#4FD0E9"
          >
          </Swiper>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Swiper
            cards={[]}
            renderCard={(card) => {
              return (
                <View style={styles.card}>
                  <Text style={styles.noResults}>...</Text>
                </View>
              );
            }}
            backgroundColor="#4FD0E9"
          >
          </Swiper>
        </View>
      );
    }
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    textAlign: 'left',
    lineHeight: 25,
    fontSize: 18,
    backgroundColor: 'transparent',
    paddingLeft: 20,
  },
  noResults: {
    textAlign: 'center',
    fontSize: 45,
    backgroundColor: 'transparent',
  },
};

export default PoemPreviewList;
