import React from 'react';
import { createRootNavigator } from './navigation/RootNavigation';
import { isSignedIn } from './auth';
import { Font } from 'expo';

export default class App extends React.Component {
  state = {
    signedIn: false,
    checkedSignIn: false,
  };

  componentWillMount() {
    Font.loadAsync({
      'Cabin': require('./assets/fonts/PoiretOne-Regular.ttf'),
    }).then(() => {
      isSignedIn()
        .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
        .catch(err => console.log(err));
    })
  }

  componentDidMount() {
    Font.loadAsync({
      'Tangerine': require('./assets/fonts/Tangerine-Bold.ttf'),
    });
  }

  render() {
    const { checkedSignIn, signedIn } = this.state;

    // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
    if (!checkedSignIn) {
      return null;
    }

    const Layout = createRootNavigator(signedIn);
    return <Layout />;
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
};
