import React from 'react';
import {View, StyleSheet, ScrollView, FlatList, Image} from 'react-native';
import Search from '../components/Search';
import colors from '../configs/colors';
import Tags from '../components/Tags';
import Card from '../components/Card';
import SvgImage from '../assets/Vector2.svg';
import MediaSvg from '../assets/Media.svg';
import MediaSvg2 from '../assets/Media2.svg';
import MediaSvg3 from '../assets/Media3.svg';
const list = [
  {
    id: '1',
    name: 'Boston Lettuce',
    wight: '~ 150 gr / piece',
    images: [<MediaSvg />, <MediaSvg2 />, <MediaSvg3 />],
    imagesPath: [
      require('../assets/Media.png'),
      require('../assets/Media2.png'),
      require('../assets/Media3.png'),
    ],
    description:
      'Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.',
    price: {
      value: 1.1,
      type: 'piece',
    },
  },
  {
    id: '2',
    name: 'Purple Cauliflower',
    wight: '~ 150 gr / piece',
    description:
      'Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.',
    images: [<MediaSvg2 />, <MediaSvg3 />, <MediaSvg />],
    imagesPath: [
      require('../assets/Media2.png'),
      require('../assets/Media3.png'),
      require('../assets/Media.png'),
    ],
    price: {
      value: 1.85,
      type: 'kg',
    },
  },
  {
    id: '3',
    name: 'Savoy Cabbage',
    wight: '~ 150 gr / piece',
    images: [<MediaSvg3 />, <MediaSvg2 />, <MediaSvg />],
    imagesPath: [
      require('../assets/Media3.png'),
      require('../assets/Media2.png'),
      require('../assets/Media.png'),
    ],
    description:
      'Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.',
    price: {
      value: 1.45,
      type: 'kg',
    },
  },
];

function HomeScreen({navigation}) {
  return (
    <>
      <View style={styles.screen}>
        <SvgImage style={styles.image} />
        <View style={styles.searchcontainer}>
          <Search />
        </View>
        <View style={styles.tagsContainer}>
          <Tags />
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <FlatList
            contentContainerStyle={styles.card}
            showsVerticalScrollIndicator={false}
            data={list}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <Card navigation={navigation} item={item} />
            )}
          />
        </ScrollView>
      </View>
    </>
  );
}

export default HomeScreen;
const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.background,
    flex: 1,
  },
  image: {
    alignSelf: 'flex-end',
    position: 'absolute',
  },
  card: {
    paddingHorizontal: 20,
  },
  tagsContainer: {
    height: 100,
    paddingLeft: 20,
  },
  searchcontainer: {
    paddingHorizontal: 20,
  },
});
