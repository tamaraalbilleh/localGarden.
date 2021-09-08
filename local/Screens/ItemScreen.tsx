import React from 'react';
import {View, StyleSheet} from 'react-native';
import ImageSlider from '../components/ImageSlider';
import ItemDetails from '../components/ItemDetails';

function ItemScreen({route, navigation}) {
  const item = route.params.item;
  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <ImageSlider navigation={navigation} images={item.imagesPath} />
      </View>
      <View style={styles.info}>
        <ItemDetails style={styles.info} item={item} />
      </View>
    </View>
  );
}

export default ItemScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  slider: {
    width: '100%',
    position: 'absolute',
    top: 0,
  },
  info: {
    // backgroundColor: ,
    height: '25%',
  },
});

// const item = {
//   id: '1',
//   name: 'Boston Lettuce',
//   wight: '~ 150 gr / piece',
//   images: [
//     require('../assets/Media11.png'),
//     require('../assets/Media2.png'),
//     require('../assets/Media3.png'),
//   ],
//   description:
//     'Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.',
//   price: {
//     value: 1.1,
//     type: 'piece',
//   },
// };
