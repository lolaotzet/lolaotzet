import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Card(props) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: props.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.label}>Nombre del producto:</Text>
        <Text style={styles.value}>{props.title}</Text>

        <Text style={styles.label}>Precio:</Text>
        <Text style={styles.value}>${props.price}</Text>

        <Text style={styles.label}>Descripción:</Text>
        <Text style={styles.value}>{props.description}</Text>

        <Text style={styles.label}>Categoría:</Text>
        <Text style={styles.value}>{props.categoria}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    padding: 15,
    marginVertical: 10,
    alignSelf: 'center',
    width: '90%', 
  },
  image: {
    width: '100%',
    height: 140,
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

