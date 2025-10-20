import React, {Component} from 'react';
import { View, Text, Pressable,  StyleSheet } from 'react-native';

export default class Profile extends Component{
    render(){
        return(
        <View style={styles.container}>
            <View style={styles.card}>
        <Text style={styles.title}>Perfil</Text>
            <Pressable style={styles.button} onPress={() => this.props.navigation.navigate('Login')}><Text style={styles.buttonText} >Desloguearse</Text></Pressable>
            </View>
        </View>
        )
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
  button: {
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