import React, {Component} from 'react';
import { View, Text, Pressable, StyleSheet,FlatList } from 'react-native';
import Card from '../components/Card';

export default class Personajes extends Component{
    constructor(props) {
    super(props);
    this.state = {
      personajes: []
    };
  }
  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        this.setState({ personajes: data.results });
      })
      .catch(error => console.log(error));
  }
    render(){
        return(
             <View style={styles.container}>
                <Text style={styles.subtitle}>Personajes de Rick y Morty</Text>
               <FlatList
           style={styles.flatList}
          data={this.state.personajes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Card
              name={item.name}
              species={item.species}
              gender={item.gender}
              image={item.image}
            />
          )}
        />
            </View>
        )
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 15,
    paddingTop: 40,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 15,
    color: '#333',
    textAlign: 'center',
  },
  flatList: {
    flex: 1, 
  },
});