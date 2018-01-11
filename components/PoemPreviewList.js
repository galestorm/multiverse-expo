import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Swiper from './Swiper';
import PoemDetail from './PoemDetail';

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

  render() {
    console.log(`rendering... state is ${this.state.poems.length}`);
    if (this.state.poems.length !== 0) {
      return (
        <View style={styles.container}>
          <Swiper
            cards={this.state.poems}
            renderCard={(card) => {
              return (
                <View style={styles.card}>
                  <Text style={styles.text}>{card.title}</Text>
                </View>
              );
            }}
            onSwiped={(cardIndex) => { console.log(cardIndex); }}
            onSwipedAll={() => { console.log('onSwipedAll'); }}
            onSwipedRight={(cardIndex) => {
              return (
                <PoemDetail />
              );
            }}
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
            cards={['...']}
            renderCard={(card) => {
              return (
                <View style={styles.card}>
                  <Text style={styles.text}>{card}</Text>
                </View>
              );
            }}
            onSwiped={(cardIndex) => { console.log(cardIndex); }}
            onSwipedAll={() => { console.log('onSwipedAll'); }}
            onSwipedRight={(cardIndex) => {
              return (
                <PoemDetail />
              );
            }}
            cardIndex={0}
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
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent',
  },
};

export default PoemPreviewList;
