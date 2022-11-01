import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Feed from './src/Feed';
import Header from './src/Header';
import Cadastro from './src/Cadastro';
import Loading from './src/Loading';
import Login from './src/Login';
import PerfilDoutor from './src/PerfilDoutor';
import PerfilPaciente from './src/PerfilPaciente';
import PaginaPacientes from './src/PaginaExames';
import PaginaExames from './src/PaginaExames';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <PaginaExames />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A2A2A2',
  },
});
