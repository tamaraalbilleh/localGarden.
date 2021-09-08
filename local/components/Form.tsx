import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import AppTextInput from './AppTextInput';
import AppButton from './AppButton';
import colors from '../configs/colors';
function AppForm({navigation}) {
  // const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Local Garden</Text>
      <Text style={styles.subTitle}>Because you deserve to eat fresh</Text>
      <AppTextInput lable="Email" placeholder="example@example.com" />
      <AppTextInput lable="Password" />
      <AppButton title="LOGIN" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

export default AppForm;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    padding: 20,
  },
  heading: {
    textAlign: 'center',
    // fontFamily: 'SF Pro Text',
    fontWeight: '700',
    fontSize: 30,
    lineHeight: 41,
    color: colors.textPrimary,
    marginBottom: 8,
  },
  subTitle: {
    textAlign: 'center',
    // fontFamily: 'SF Pro Text',
    fontWeight: '400',
    fontSize: 17,
    lineHeight: 25.5,
    color: colors.textSecondary,
    marginBottom: 38,
  },
});
