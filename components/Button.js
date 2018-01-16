import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress }) => { //destructured props obj
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>Save for Later</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonstyle: {
    flex: 1,
    alignSelf: 'stretch', //stretch to fill container
    borderRadius: 5,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
};

export default Button;
