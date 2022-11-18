import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function List(props){
  return(
    <View style={styles.container}>
      <View style={styles.sup}>
        <Image 
        source={{uri: props.data.imgperfil}}
        style={{width:55, height:55, borderRadius:30}}
        />

        <Text style={{marginLeft:15, fontSize:16}}>{props.data.nome}</Text>
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    height:250,
    backgroundColor:"#E9E9E9",
    marginTop:8
  },
  sup:{
    padding:24,
    flexDirection:"row",
    alignItems:"center",
    
  }
})