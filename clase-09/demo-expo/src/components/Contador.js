import React, {Component} from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default class Contador extends Component{
    constructor(props){
        super(props)
        this.state = {
            clicks: 0
        }
    }
    incrementar = () => {
        this.setState({
            clicks: this.state.clicks + 1
        })
    }
    render(){
        return(
             <View style={styles.container}>
                <Text style={styles.texto}>Cantidad de clicks:{this.state.clicks}</Text>
                <Pressable style={styles.zonaClick} onPress={()=> this.incrementar()}>
                    <Text style={styles.textoZona}>Click aquí para contar</Text>
                </Pressable>
            </View>
        )
           
    }
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  texto: {
    marginBottom: 8,
    fontSize: 16,
  },
  zonaClick: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    backgroundColor: '#90ee90', // verde claro
    borderRadius: 8,
  },
  textoZona: {
    fontWeight: 'bold',
  },
});
