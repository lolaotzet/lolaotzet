import React, {Component} from 'react';
import { View, Text, Pressable,  StyleSheet } from 'react-native';
import { TextInput } from 'react-native-web';

export default class Register extends Component{
    render(){
        return(
            <View style={styles.container}>
        <View style={styles.card}>
        <Text style={styles.title}>Formulario de registro</Text>
        <Pressable style={styles.button} onPress={() => this.props.navigation.navigate('Login')}><Text style={styles.buttonText}>Ya tengo cuenta</Text></Pressable>
        <TextInput 
        keyboardType='email-adress' 
        placeholder='email'
        onChangeText={text => this.setState({email:text})}
        value={this.state.email}
        />
         <TextInput 
        keyboardType='userName' 
        placeholder='Nombre de usuario'
        secureTextEntry={true}
        onChangeText={text => this.setState({userName:text})}
        value={this.state.userName}
        />
         <TextInput 
        keyboardType='default' 
        placeholder='Contraseña'
        secureTextEntry={true}
        onChangeText={text => this.setState({password:text})}
        value={this.state.password}
        />
        <Pressable onPress={()=> this.onSubmit()}>
            <Text>Registarte</Text>
        </Pressable>
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