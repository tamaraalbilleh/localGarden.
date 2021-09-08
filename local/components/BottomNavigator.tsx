import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AppIcon from 'react-native-vector-icons/AntDesign';
import CartIcon from 'react-native-vector-icons/Ionicons';

import DotsIcon from 'react-native-vector-icons/Ionicons';
AppIcon.loadFont('AntDesign');
CartIcon.loadFont('Ionicons');
DotsIcon.loadFont('Ionicons');

function BottomNavigator({navigation}) {
  const [selected, setSelected] = useState({
    app: false,
    cart: false,
    dots: false,
  });

  const handlePress = name => {
    let state = {...selected};
    if (state.app || state.cart || state.dots) {
      setSelected({app: false, cart: false, dots: false});
    } else {
      state[name] = !state[name];
      setSelected(state);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          handlePress('app');
          navigation.navigate('Login');
        }}>
        <AppIcon
          color={selected.app ? 'rgba(114, 3, 255, 0.5)' : '#9586A8'}
          size={30}
          name={!selected.app ? 'appstore-o' : 'appstore1'}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          handlePress('cart');
        }}>
        <CartIcon
          color={selected.cart ? 'rgba(114, 3, 255, 0.5)' : '#9586A8'}
          size={30}
          name={selected.cart ? 'cart' : 'cart-outline'}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handlePress('dots')}>
        <DotsIcon
          size={30}
          color={selected.dots ? 'rgba(114, 3, 255, 0.5)' : '#9586A8'}
          name={
            selected.dots
              ? 'ellipsis-vertical-sharp'
              : 'ellipsis-vertical-outline'
          }
        />
      </TouchableOpacity>
    </View>
  );
}

export default BottomNavigator;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    height: '10%',
    backgroundColor: 'rgba(248, 248, 248, 0.12)',
    opacity: 0.9,
  },
});
