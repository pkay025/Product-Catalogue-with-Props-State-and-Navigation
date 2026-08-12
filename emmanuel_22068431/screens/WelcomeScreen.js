import { 
  View, 
  Text, 
  Button, 
  StyleSheet, 
  Image, 
  Pressable 
} from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
       <Image style={styles.image}
        source={require('../assets/Logo.png')}
       />
       <View>
         <Text style={styles.text}>Buy and sell with ease, anytime, anywhere.</Text>
       </View>

       <Pressable 
        style={{ backgroundColor: '#FE8866', padding: 10, borderRadius: 10, marginTop: 20 }}
        onPress={() => navigation.navigate('Main')}
       >
         <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'regular' }}>Get Started</Text>
       </Pressable> 

    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
    image: {
    width: 250,
    height: 250,
    marginBottom: 150,
  },
    text: {
    textTransform: 'uppercase',
    fontSize: 18,
    fontWeight: 'semibold',
    textAlign: 'center',
    marginTop: 28,
    top: -200,
  },
});

export default WelcomeScreen;