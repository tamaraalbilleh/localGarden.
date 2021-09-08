import React from 'react';
import colors from '../configs/colors';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
const AppButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
const styles = StyleSheet.create({
  button: {
    marginTop: 6,
    width: '100%',
    padding: 16,
    backgroundColor: colors.buttonPrimary,
    borderRadius: 8,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: 'capitalize',
    textAlign: 'center',
  },
});
