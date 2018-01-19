// Import libraries for making Component
import React from 'react';
import { Text, View } from 'react-native';

// Make Component
const Header = (props) => {
  const { textStyle, viewStyle } = styles; // destructured syntax
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 87,
    paddingTop: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    borderBottomColor: 'black',
  },
  textStyle: {
    fontSize: 16,
  },
};

// Make component available to other parts of the app
export default Header;
