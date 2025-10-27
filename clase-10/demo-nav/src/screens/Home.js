import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Comentarios from '../components/DynamicForm';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.title}>Home</Text>
          <Comentarios/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,               // Hace que el View ocupe toda la pantalla
    backgroundColor: '#f5f6fa',
    alignItems: 'center',  // Centra horizontalmente
    justifyContent: 'flex-start', // Empieza desde arriba
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2f3640',
    marginBottom: 20,
  },
});
