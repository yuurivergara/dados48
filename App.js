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
import PaginaPacientes from './src/PaginaPacientes';
import PaginaExames from './src/PaginaExames';
import Perfil from './src/Perfil';
import Exames from './src/Exames';
import PaginaGrupo from './src/PaginaGrupo';
import Grupos from './src/Grupos';
import PaginaExamesMedico from './src/PaginaExamesMedico';
import PaginaMedico from './src/PaginaMedico';
import PaginaContatoUsuario from './src/PaginaContatoUsuario';
import PaginaContatoProfissional from './src/PaginaContatoProfissional';
import PaginaSeusProfissionais from './src/PaginaSeusProfissionais';
import PaginaSeusPacientes from './src/PaginaSeusPacientes';

export default function App() {
  return (
    <View style={styles.container}>
      <PaginaSeusPacientes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A2A2A2',
  },
});
