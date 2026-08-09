import { View, Text, FlatList, StyleSheet } from 'react-native';
import ProductCard from '../components/ProductCard';

const products = [
  {
    id: '1',
    image: require('../assets/Smart UltraSonic Wrist Watch.png'),
    name: 'Smart UltraSonic Wrist Watch',
    price: '$120',
    rating: '4.5',
  },
  {
    id: '2',
    image: require('../assets/Nike Air Max 270.png'),
    name: 'Nike Air Max 270',
    price: '$90',
    rating: '4.3',
  },
  {
    id: '3',
    image: require('../assets/Nike Air Force 1.png'),
    name: 'Nike Air Force 1',
    price: '$80',
    rating: '4.2',
  },
  {
    id: '4',
    image: require('../assets/Women Perfume.png'),
    name: 'Women Perfume',
    price: '$110',
    rating: '4.7',
  },
  {
    id: '5',
    image: require('../assets/Zealot Speaker.png'),
    name: 'Zealot Speaker',
    price: '$110',
    rating: '4.7',
  },
  {
    id: '6',
    image: require('../assets/Premium Red Office dress.png'),
    name: 'Premium Red Office dress',
    price: '$110',
    rating: '4.7',
  },
];

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>

      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            image={item.image}
            name={item.name}
            price={item.price}
            rating={item.rating}
            onPress={() =>
              navigation.navigate('ProductDetails', {
                product: item,
              })
            }
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginBottom: 10,
  },
});

export default HomeScreen;