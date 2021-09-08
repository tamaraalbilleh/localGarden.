import React, {useState} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../configs/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import CartIcon from 'react-native-vector-icons/Ionicons';
// Icon.loadFont('FontAwesome');
// CartIcon.loadFont('Ionicons');

function Card({item, navigation}) {
  const [liked, setLiked] = React.useState(false);
  const [added, setAdded] = useState(false);
  return (
    <View style={styles.container}>
      {item.images[0]}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <View style={styles.pricecontainer}>
          <Text style={styles.price}>{item.price.value}</Text>
          <Text style={styles.pricetag}>€ / {item.price.type}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.likeButton}
            onPress={() => setLiked(!liked)}>
            {!liked ? (
              <Icon
                style={styles.icon}
                size={20}
                color="#9586A8"
                name="heart-o"
              />
            ) : (
              <Icon
                size={20}
                style={styles.icon}
                color="#9586A8"
                name="heart"
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={() => {
              setAdded(!added);
              navigation.navigate('Item', {
                item: item,
              });
            }}>
            {!added ? (
              <CartIcon
                style={styles.CartIcon}
                size={25}
                color={colors.white}
                name="cart-outline"
              />
            ) : (
              <CartIcon
                size={25}
                style={styles.CartIcon}
                color={colors.white}
                name="cart"
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Card;
const styles = StyleSheet.create({
  textContainer: {
    marginLeft: 20,
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    marginBottom: 35,
  },
  title: {
    fontSize: 18,
    color: colors.textPrimary,
    fontWeight: '600',
    lineHeight: 22,
  },
  price: {
    fontSize: 22,
    color: colors.textPrimary,
    fontWeight: 'bold',
    lineHeight: 22,
  },
  pricetag: {
    color: '#9586A8',
    lineHeight: 22,
    fontSize: 16,
  },
  pricecontainer: {
    flexDirection: 'row',
    marginTop: 12,
  },
  likeButton: {
    width: 68,
    height: 40,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    marginTop: 30,
    marginRight: 15,
    justifyContent: 'center',
  },
  addToCartButton: {
    width: 68,
    height: 40,
    backgroundColor: colors.buttonPrimary,
    justifyContent: 'center',

    borderRadius: 8,
    marginTop: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  icon: {alignSelf: 'center'},
  CartIcon: {alignSelf: 'center'},
});
