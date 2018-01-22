import React from 'react';
import { View, Text, Button } from 'react-native';
import { onSignOut } from '../auth';

export default class SettingsScreen extends React.Component {
  // static navigationOptions = {
  //   title: 'app.json',
  // };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title="SIGN OUT"
          onPress={() => onSignOut().then(() => this.props.navigation.navigate("Login"))}
          />
      </View>
    )
  }
}

const styles = {
  buttonContainer: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    borderWidth: 2,
    borderColor: 'black',
    flex: 1,
  }
}
