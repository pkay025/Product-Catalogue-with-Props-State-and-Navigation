import { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { useCart } from '../context/CartContext';
import { Ionicons } from '@expo/vector-icons';

const ProductDetailsScreen = ({ route }) => {
  const { product } = route.params;
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  return (
    <ScrollView style={styles.container}>
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

        <Text style={styles.quantityLabel}>
          Quantity
        </Text>

        <View style={styles.quantityContainer}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() =>
              setQuantity(quantity > 1 ? quantity - 1 : 1)
            }
          >
            <Ionicons
              name="remove"
              size={20}
              color="#fff"
            />
          </TouchableOpacity>

          <Text style={styles.quantity}>
            {quantity}
          </Text>

          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() =>
              setQuantity(quantity + 1)
            }
          >
            <Ionicons
              name="add"
              size={20}
              color="#fff"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
        style={styles.cartButton}
        onPress={() => {
        addToCart(product, quantity);
      }}
      >

      <Ionicons
        name="cart-outline"
        size={20}
        color="#fff"
      />

      <Text style={styles.cartButtonText}>
        Add to Cart
      </Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  image: {
    width: '100%',
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
    marginBottom: 25,
  },

  quantityLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  quantityButton: {
    width: 45,
    height: 45,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },

  quantity: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 25,
  },

  cartButton: {
    marginTop: 30,
    height: 50,
    backgroundColor: '#000',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },

  cartButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductDetailsScreen;