import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Formulario de Login</Text>

          <Pressable style={styles.buttonR} onPress={() => this.props.navigation.navigate('Register')}>
            <Text style={styles.buttonText}>Ir a registro</Text>
          </Pressable>

          <Pressable style={styles.buttonA} onPress={() => this.props.navigation.navigate('HomeMenu', { screen: "Home" })}>
            <Text style={styles.buttonText}>Entrar a la app</Text>
          </Pressable>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: '50%',
    padding: 25,
    alignItems: 'center',
    height: '30%'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#2f3640',
  },
  buttonR: {
    backgroundColor: '#40739e',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 8,
    width: '80%',
    alignItems: 'center',
  },
  buttonA: {
    backgroundColor: 'orange',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 8,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
