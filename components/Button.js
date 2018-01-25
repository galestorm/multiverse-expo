import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, text }) => { //destructured props obj
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress} >
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch', //stretch to fill container
    borderRadius: 5,
    borderColor: 'red',
    marginLeft: 5,
    marginRight: 5,
  },
  textStyle: {
    alignSelf: 'center',
    color: '#141C1E',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
};

export default Button;
