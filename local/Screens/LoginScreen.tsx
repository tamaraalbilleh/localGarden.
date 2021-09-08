import React from 'react';
<Text>HI</Text>;
import {View, StyleSheet, Image, Text} from 'react-native';
import colors from '../configs/colors';
import AppForm from '../components/Form';
import Logo from '../assets/Vector.svg';

function LoginScreen({navigation}) {
  return (
    <>
      <View style={styles.screen}>
        <Image
          style={styles.backGroundVector}
          source={require('../assets/BG.png')}
        />
        <View style={styles.logoContainer}>
          {/* <Text>HI</Text> */}
          <Logo width={40} height={45} />
        </View>

        <View style={styles.container}>
          <AppForm navigation={navigation} />
        </View>
      </View>
    </>
  );
}

export default LoginScreen;
const styles = StyleSheet.create({
  logoContainer: {
    backgroundColor: colors.white,
    width: 104,
    height: 104,
    borderRadius: 52,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 96,
    marginBottom: 116,
  },
  logo: {
    width: 40,
    height: 45,
  },
  screen: {
    backgroundColor: colors.homeBg,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backGroundVector: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    width: '100%',
    backgroundColor: colors.background,
    position: 'absolute',
    bottom: 0,
    paddingBottom: 83,
    paddingTop: 50,
    borderWidth: 1,
    borderTopLeftRadius: 35,
    borderTopEndRadius: 35,
  },
});
