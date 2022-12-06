import react from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Iconicons from "@expo/vector-icons/Ionicons"

export default function PaginaContatoProfissional(){
  return(
    <View style={{flex:1}}>
      <View style={styles.box1}>
        <Iconicons name={"chevron-up"} size={35} color="black" style={{marginLeft:10}}/>
        <Image 
        source={{uri : "https://sujeitoprogramador.com/instareact/fotoPerfil1.png"}}
        style={styles.img}
        />
        
        <Text style={{marginLeft:24, fontSize:20,marginTop:7}}>Dr Arthur</Text>
        
      </View>
      <View style={styles.box2}>
          <Text style={{fontSize:18}}>CONTATO</Text>
          <Text>Telefone: 5399999999</Text>
          <Text>Email: </Text>
          <Text>Endereço profissional: </Text>
          <TouchableOpacity style={styles.button} >
            <Image 
            source={{uri: "https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-1.png"}}
            style={{width:45, height:45}}
            />
            <Text>WHATSAPP</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  box1:{
    height:275,
    backgroundColor:"#E9E9E9",
    paddingTop: "5%",
    borderBottomWidth:1,
    borderBottomColor:"#24BCC4",
  },
  img:{
    height: 170
  },
  box2:{
    marginTop:7,
    backgroundColor:"#E9E9E9",
    height: "100%",
    justifyContent:"space-between",
    padding:24,
    borderTopWidth: 1,
    borderColor:"#24BCC4",
    flex:1
  },
  button:{
    height:72,
    borderRadius:20,
    backgroundColor:"#D9D9D9",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-evenly",
    marginBottom: 10
  }
})