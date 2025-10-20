import React, {Component} from 'react';
import { View, Text, Pressable,  StyleSheet } from 'react-native';
import Contador from '../components/Contador';

export default class Home extends Component {
  clickeame = () => {
    console.log('me clickearon');
  }
  render(){
    return (
      <View style={styles.screen}>
         <View style={styles.card}>
      <Text style={styles.titulo}>Hola Mundo</Text>
        <Pressable style={styles.boton} onPress={() => this.clickeame()}>
          <Text style={styles.textoBoton}>Clickeame</Text>
        </Pressable>
          <Contador/>
    </View>
      </View>
   
  );
  }
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,                      // ocupa toda la pantalla
   width: '100vw',              // 100% del ancho de la pantalla
    height: '100vh',               // toda la altura disponible
    justifyContent: 'center',     // centra verticalmente
    alignItems: 'center',         // centra horizontalmente
    backgroundColor: '#f6f6f6',   
  },
  card: {
    backgroundColor: '#ffffff',   // fondo blanco
    borderRadius: 10,             // esquinas redondeadas
    paddingVertical: 25,          // espacio interno vertical
    paddingHorizontal: 20,        // espacio interno lateral
    alignItems: 'center',         // centra el contenido horizontalmente
    justifyContent: 'center',     // centra el contenido verticalmente
    width: '90%',                 // ocupa la mayor parte del ancho
    maxWidth: 400,                // límite máximo para pantallas grandes
  },

  titulo: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 15,
    textAlign: 'center',
  },

  boton: {
    backgroundColor: '#d3d3d3',
    paddingVertical: 10,
    width: '85%',                 
    borderRadius: 6,
    marginBottom: 20,
    alignItems: 'center',
  },

  textoBoton: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});