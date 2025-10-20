import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Probando imagen</Text>
      <View style={styles.container}>
        <StatusBar style="auto" />
        
        <Image 
          style={styles.image} 
          source={require('../demo-img/assets/zonaMedia.jpeg')} 
          resizeMode='contain' 
        />

        <Image
          style={styles.remoteImage}
          source={{ uri: 'https://www.infobae.com/resizer/v2/CDTA65FYWMDLJV6AHKPIIPNOHU.jpg?auth=6c9f6791e78e189e11a8ff0474b608b95906885697189234ddcdee212e19f2bd&smart=true&width=992&height=661&quality=85' }}
          resizeMode='contain'
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,  
    paddingLeft: 20, },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 400,
    width: '100%',
    marginBottom: 20, 
  },
  remoteImage: {
    height: 300,
    width: '100%',
  },
});

