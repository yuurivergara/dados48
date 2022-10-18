import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Feed from './src/Feed';
import Header from './src/Header';
import Cadastro from './src/Cadastro';

export default function App() {
  return (
    <View style={styles.container}>
      <Cadastro />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A2A2A2',
  },
});
