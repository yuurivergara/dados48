import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";

export default function Exames(props){
  return(
      <TouchableOpacity style={styles.box}>
          <Image  
          source={{uri: "https://www.justcriminallaw.com/wp-content/uploads/primary-images/1302-1300.jpg"}}
          style={{height:160, width:150}}
          />
          <View style={{flexDirection:"column", padding:50}}>
            <Text>{props.data.tipo}</Text>
            <Text>Data: {props.data.data}</Text>
          </View>
      </TouchableOpacity>

  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  box:{
    flex:1,
    height:160,
    backgroundColor: "#E9E9E9",
    marginTop:10,
    borderRadius:10,
    flexDirection:"row",
    justifyContent:"space-around",
  }
})