import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Card(props) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: props.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.label}>Nombre:</Text>
        <Text style={styles.value}>{props.name}</Text>

        <Text style={styles.label}>Especie:</Text>
        <Text style={styles.value}>{props.species}</Text>

        <Text style={styles.label}>Género:</Text>
        <Text style={styles.value}>{props.gender}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f0f0f0',
    borderRadius: 16,
    padding: 20,
    marginVertical: 12,
    alignSelf: 'center',
    width: '90vh', 
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    resizeMode: 'contain',
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  label: {
    fontWeight: 'bold',
    color: '#333',
    fontSize: 14,
    marginTop: 6,
  },
  value: {
    fontSize: 13,
    color: '#555',
    marginBottom: 2,
  },
});