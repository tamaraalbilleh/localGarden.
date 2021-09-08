import React from 'react';
import {StyleSheet, FlatList, ScrollView} from 'react-native';
import Tag from './Tag';
const tags = [
  {
    id: 5,
    label: 'Сabbage and lettuce',
    count: 14,
  },
  {
    id: 6,
    label: 'Сucumbers and tomatoes',
    count: 10,
  },
  {
    id: 1,
    label: 'Oinons and garlic',
    count: 8,
  },
  {
    id: 2,
    label: 'Peppers',
    count: 7,
  },
  {
    id: 3,
    label: 'Potatoes and carrots',
    count: 8,
  },
];

function Tags() {
  return (
    <>
      <FlatList
        style={styles.taglist}
        horizontal={true}
        scrollsToTop={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.firstRow}
        showsVerticalScrollIndicator={false}
        data={tags.slice(0, tags.length / 2)}
        keyExtractor={tag => tag.id.toString()}
        renderItem={({item}) => <Tag lable={item.label} count={item.count} />}
      />

      <FlatList
        style={styles.taglist}
        horizontal={true}
        scrollsToTop={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.secondRow}
        data={tags.slice(tags.length / 2, tags.length)}
        keyExtractor={tag => tag.id.toString()}
        renderItem={({item}) => <Tag lable={item.label} count={item.count} />}
      />
    </>
  );
}

export default Tags;
const styles = StyleSheet.create({
  firstRow: {
    alignSelf: 'flex-start',
    overflow: 'hidden',
    flexDirection: 'row',
    // height: 50,
  },
  icon: {},
  secondRow: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    overflow: 'hidden',
    // marginTop :
  },
  container: {
    height: 50,
  },
  container2: {},
  taglist: {
    paddingLeft: 20,
  },
});
