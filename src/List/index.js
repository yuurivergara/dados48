import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function List(props){
  return(
    <View style={styles.post}>
      <View style={styles.barraPerfil}>
        
        <View style={styles.view}>
          <Image 
          source={{uri: props.data.imgperfil}}
          style={styles.fotoFeed}
          />
          <Text style={styles.text}>{props.data.nome}</Text>
        </View>
        <Image 
        source={{uri: props.data.imgPublicacao}}
        style={styles.fotoPost}
        />

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  post:{
    height:205,
    marginVertical: 5,
    borderRadius: 10,
    padding:25
  },
  fotoFeed:{
    width:40,
    height:35,
    borderRadius:10
  },
  barraPerfil:{
    flexDirection: "column",
    paddingRight: 25,
    alignItems:"center",
  },
  text:{
    marginLeft: 20,
    fontSize: 17
  },
  fotoPost:{
    height:203,
    width:379,
  },
  view:{
    flexDirection:"row"
  }
})