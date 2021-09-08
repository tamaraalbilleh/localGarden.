import {SliderBox} from 'react-native-image-slider-box';
import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import colors from '../configs/colors';
import Icon from 'react-native-vector-icons/Ionicons';
function ImageSlider({images, navigation}) {
  return (
    <View>
      <SliderBox
        circleLoop
        sliderBoxHeight={350}
        dotColor={colors.white}
        paginationBoxVerticalPadding={'13%'}
        images={images}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.back}>
        <Icon size={25} name="chevron-back-sharp" />
      </TouchableOpacity>
    </View>
  );
}

export default ImageSlider;
const styles = StyleSheet.create({
  back: {
    width: 39,
    height: 39,
    backgroundColor: 'rgba(196,196,196,0.5)',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 50,
    left: 19,
  },
});
