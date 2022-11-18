import React from "react";
import { View, TouchableOpacity, Text, Image , StyleSheet} from "react-native";

export default function ListaPacientes(props){
  return(
    <TouchableOpacity style={styles.box}>
          <Image  
          source={{uri: props.data.url}}
          style={{height:160, width:150}}
          />
          <View style={{flexDirection:"column", padding:50, alignItems:"center"}}>
            <Text style={{fontSize:24}}>{props.data.nome}</Text>
            <Text style={{fontSize:13}}>Ver perfil</Text>
          </View>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
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