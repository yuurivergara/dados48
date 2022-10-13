import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function List(props){
  return(
    <View style={styles.post}>
      <View style={styles.barraPerfil}>
        <Image 
        source={{uri: props.data.imgperfil}}
        style={styles.fotoFeed}
        />
        <Text style={styles.text}>{props.data.nome}</Text>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  post:{
    backgroundColor: "#E9E9E9",
    height:205,
    marginVertical: 5,
    borderRadius: 10,
    flexDirection: "column",
    padding:25
  },
  fotoFeed:{
    width:40,
    height:35,
    borderRadius:10
  },
  barraPerfil:{
    paddingRight: 25,
    alignItems:"center",
    flexDirection:"row",
  },
  text:{
    marginLeft: 20,
    fontSize: 17
  }
})