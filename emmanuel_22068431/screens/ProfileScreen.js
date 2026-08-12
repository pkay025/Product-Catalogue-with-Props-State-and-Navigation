import { 
  View,
  Text, 
  StyleSheet, 
  Image, 
  TextInput, 
  TouchableOpacity,
  ScrollView
 } from 'react-native';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}
    contentContainerStyle={styles.content}>
      <Image
        style={styles.image}
        source={require('../assets/Paakow.jpg')}
      />
      <Text style={styles.name}>Emmanuel Nunoo Mensah</Text>
      
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
      />
      <Text style={styles.label}>Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your address"
      />
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="email-address"
      />
      <Text style={styles.label}>Phone</Text>
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
      />
      <TouchableOpacity style={styles.button} onPress={() => alert('Profile saved successfully!')}>
        <Text style={styles.buttonText}>Save Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginBottom: 20,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    width: '90%',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    borderColor: '#ddd',
    fontSize: 16,
    marginBottom: 20,
  }, 
  button: {
    width: '90%',
    backgroundColor: '#FE8866',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});



export default ProfileScreen;