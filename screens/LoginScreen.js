import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Alert,
  Button,
  View,
} from 'react-native';
import Expo, { WebBrowser } from 'expo';
import axios from 'axios';
import { onSignIn } from '../auth';
import { window } from '../constants/Layout';



export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };



  logIn() {
    Expo.Facebook.logInWithReadPermissionsAsync('1451919964933498', {
      permissions: ['public_profile'],
    })
      .then((response) => {
        const { type, token } = response;
        if (type === 'success') {
          fetch(`https://graph.facebook.com/me?access_token=${token}`)
            .then((data) => {
              console.log('got me a token')
              data.json()
                .then((parsed) => {
                  axios.post(`https://multiverse-api.herokuapp.com/users?uid=${parsed.id}&name=${parsed.name}`)
                    .then(() => {
                        Alert.alert(`Welcome, ${parsed.name.split(" ")[0]}`);
                        onSignIn(parsed.id)
                          .then(() => { this.props.navigation.navigate('SignedIn'); });
                    })
                });
            });
        }
      });
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.logoContainer}>
          <Text style={styles.title}>multiVerse</Text>
          <Text style={styles.subtitle}>live in poetry</Text>
          <Button
            onPress={this.logIn.bind(this)}
            title='Login with Facebook'
          />
        </View>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    }
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode, your app will run at full speed.
      </Text>
    );
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes');
  };
}

const styles = StyleSheet.create({
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white'

  },
  title: {
    fontSize: 80,
    marginBottom: 5,
    fontFamily: 'Tangerine',
    color: '#310A31'
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 70
  }
});
