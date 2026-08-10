import {
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const ProductCard = ({ image, name, price, rating, bgColor, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: bgColor || '#fff' }]}
      onPress={onPress}
    >
      <Image
        source={image}
        style={styles.image}
      />

      <Text style={styles.name}>{name}</Text>

      <Text style={styles.price}>{price}</Text>

      <Text style={styles.rating}>Rating: {rating}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    width: 180,
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },

  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },

  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },

  price: {
    fontSize: 16,
    marginTop: 5,
  },

  rating: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default ProductCard;