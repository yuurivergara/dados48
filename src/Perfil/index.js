import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";


export default function Perfil(props){
  return(
    <View style={styles.container}>
      <View style={styles.imgbox}>
        <Image 
        source={{uri:props.data.url}}
        />
      </View>

    </View>
  )
}

const styles= StyleSheet.create({
  container:{
    flex:1,
  },
  imgbox:{
    height:319,
    backgroundColor:"#E9E9E9",
    paddingTop:24,
  }
})