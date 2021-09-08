import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import colors from '../configs/colors';
// import { MaterialCommunityIcons } from "";

function AppTextInput({lable, ...otherProps}) {
  return (
    <View style={styles.component}>
      <Text style={styles.lable}>{lable}</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.text}
          placeholderTextColor={colors.textPrimary}
          {...otherProps}
        />
      </View>
    </View>
  );
}

export default AppTextInput;
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 8,
    width: '100%',
    padding: 13,

    fontFamily: 'SF Pro Text',
    borderColor: colors.border,
    borderWidth: 1,
    borderStyle: 'solid',
  },
  text: {
    color: colors.textPrimary,
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '400',
  },
  lable: {
    marginLeft: 14,
    fontSize: 16,
    fontWeight: '400',
    color: colors.textSecondary,
    marginBottom: 5,
  },
  component: {
    marginBottom: 43,
  },
});
