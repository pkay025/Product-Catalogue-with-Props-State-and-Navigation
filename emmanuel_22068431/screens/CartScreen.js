import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';
import { useCart } from '../context/CartContext';

const CartScreen = () => {
  const { cart } = useCart();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Cart</Text>

      <FlatList
        data={cart}
        keyExtractor={(item, index) =>
          `${item.id}-${index}`
        }
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image
              source={item.image}
              style={styles.image}
            />

            <View style={styles.details}>
              <Text style={styles.name}>
                {item.name}
              </Text>

              <Text style={styles.price}>
                {item.price}
              </Text>

              <Text style={styles.quantity}>
                Quantity: {item.quantity}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  cartItem: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },

  image: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
  },

  details: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },

  name: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  price: {
    fontSize: 16,
    marginBottom: 5,
  },

  quantity: {
    fontSize: 14,
  },
});

export default CartScreen;