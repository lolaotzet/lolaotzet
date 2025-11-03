import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Comentarios from '../components/DynamicForm';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.title}>Home</Text>
          <Comentarios/>
             <Pressable
                      style={styles.buttonR}
                      onPress={() => this.props.navigation.navigate('Usuarios')}>
                      <Text style={styles.buttonText}>Usuarios</Text>
                    </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,               
    backgroundColor: '#f5f6fa',
    alignItems: 'center',  
    justifyContent: 'flex-start', 
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2f3640',
    marginBottom: 20,
  },
});
