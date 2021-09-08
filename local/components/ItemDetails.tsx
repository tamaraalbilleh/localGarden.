import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CartIcon from 'react-native-vector-icons/Ionicons';
import colors from '../configs/colors';

function ItemDetails({item, style}) {
  const [liked, setLiked] = React.useState(false);
  const [added, setAdded] = useState(false);
  console.log(style);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{item.name}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.value}>{item.price.value}</Text>
        <Text style={styles.type}>€ / {item.price.type}</Text>
      </View>
      <Text style={styles.wight}>{item.wight}</Text>
      <Text style={styles.subTitle}>Description</Text>
      <Text style={styles.description}>{item.description}</Text>
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
            <Icon size={20} style={styles.icon} color="#9586A8" name="heart" />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={() => setAdded(!added)}>
          {!added ? (
            <View style={styles.CartIconButtonContainer}>
              <CartIcon
                style={styles.CartIcon}
                size={25}
                color={colors.white}
                name="cart-outline"
              />
              <Text style={styles.buttonText}>ADD TO CART</Text>
            </View>
          ) : (
            <View style={styles.CartIconButtonContainer}>
              <CartIcon
                size={25}
                style={styles.CartIcon}
                color={colors.white}
                name="cart"
              />
              <Text style={styles.buttonText}>REMOVE FROM CART</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ItemDetails;
const styles = StyleSheet.create({
  value: {
    color: colors.textPrimary,
    fontWeight: '700',
    fontSize: 32,
    lineHeight: 43.08,
  },
  heading: {
    color: colors.textPrimary,
    fontSize: 30,
    fontWeight: '700',
    marginTop: 17,
    lineHeight: 41,
  },
  container: {
    padding: 20,
    backgroundColor: colors.background,
    borderTopEndRadius: 30,
    borderTopLeftRadius: 30,
    // height: '100%',
  },
  addToCartButton: {
    width: '72%',
    height: 56,
    backgroundColor: colors.buttonPrimary,
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: 30,
    padding: 19,
    alignItems: 'center',
  },
  CartIcon: {},
  icon: {},
  likeButton: {
    width: 78,
    height: 56,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    marginTop: 30,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceContainer: {
    flexDirection: 'row',
  },
  type: {
    color: colors.textSecondary,
    fontSize: 24,
    fontWeight: '400',
    lineHeight: 43.08,
    marginLeft: 3,
  },
  wight: {
    color: '#06BE77',
    fontSize: 17,
    fontWeight: '500',
    lineHeight: 25.5,
  },
  subTitle: {
    fontWeight: '700',
    fontSize: 22,
    lineHeight: 22,
    color: colors.textPrimary,
    marginTop: 30,
    marginBottom: 16,
  },
  description: {
    color: colors.textSecondary,
    fontWeight: '400',
    fontSize: 17,
    lineHeight: 25.5,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: '20%',
  },
  CartIconButtonContainer: {
    flexDirection: 'row',
  },
  buttonText: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 25,
    marginLeft: 7,
  },
});
