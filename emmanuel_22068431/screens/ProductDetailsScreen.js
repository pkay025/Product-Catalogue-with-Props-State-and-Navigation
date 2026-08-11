import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

const ProductDetailsScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>

      <Image
        source={product.image}
        style={styles.image}
      />

      <View style={styles.details}>

        <Text style={styles.name}>
          {product.name}
        </Text>

        <Text style={styles.price}>
          {product.price}
        </Text>

        <Text style={styles.rating}>
          Rating: {product.rating}
        </Text>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  image: {
    width: 'auto',
    height: 350,
    resizeMode: 'contain',
    backgroundColor: '#fff',
  },

  details: {
    padding: 20,
  },

  name: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  price: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  rating: {
    fontSize: 16,
  },
});

export default ProductDetailsScreen;