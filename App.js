import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from './src/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A2A2A2',
  },
});
