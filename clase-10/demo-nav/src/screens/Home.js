import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View>
          <Text style={styles.title}>Home</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2f3640',
  },
});
