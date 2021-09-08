import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableWithoutFeedback} from 'react-native';
import colors from '../configs/colors';
import Icon from 'react-native-vector-icons/AntDesign';
function Tag({lable, count}) {
  const [selected, setSelected] = useState(false);
  return (
    <TouchableWithoutFeedback onPress={() => setSelected(!selected)}>
      <View
        style={
          selected
            ? [styles.selectedContainer, styles.common]
            : [styles.container, styles.common]
        }>
        {selected && (
          <Icon name="check" size={20} color="#6C0EE4" style={styles.icon} />
        )}
        <Text style={selected ? styles.lable : styles.normalLable}>
          {lable} ({count})
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Tag;
const styles = StyleSheet.create({
  selectedContainer: {
    backgroundColor: colors.selectedBgViolate,
  },
  container: {backgroundColor: colors.white},
  icon: {
    alignSelf: 'center',
    //   backgroundColor : 'red'
  },
  lable: {
    color: '#6C0EE4',
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'right',
    fontWeight: '500',
    marginLeft: 8,
  },
  normalLable: {
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'left',
    fontWeight: '500',
    marginLeft: 8,
  },
  common: {
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 24,
    // width: '65%',
    marginRight: 8,
    marginBottom: 20,
    flexDirection: 'row',
  },
});
