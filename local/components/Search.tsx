import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import colors from '../configs/colors';
import Icon from 'react-native-vector-icons/Fontisto';
// Icon.loadFont('Fontisto');

function Search() {
  return (
    <View>
      <Text style={styles.heading}>Vegetables</Text>
      <View style={styles.seacrhInput}>
        <Icon name="search" size={26} style={styles.icon} />
        <TextInput
          style={styles.search}
          placeholder="Search"
          placeholderTextColor={colors.textSecondary}
        />
      </View>
    </View>
  );
}

export default Search;
const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  search: {
    fontSize: 17,
    marginLeft: 16,
    lineHeight: 22,
    color: colors.textPrimary,
  },
  icon: {
    marginLeft: 10,
  },
  seacrhInput: {
    flexDirection: 'row',
    width: '100%',
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 27,
    padding: 12,
    backgroundColor: colors.white,
    marginBottom: 40,
  },
  heading: {
    fontSize: 30,
    fontWeight: '700',
    lineHeight: 41,
    color: colors.textPrimary,
    marginTop: 85,
    marginBottom: 25,
  },
});
