import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function Header() {
  return (
  <View style={styles.background}>
        
          <View style={styles.row1}>
            <TouchableOpacity >
              <Image source={require("../img/logo_header.png")}
              style={styles.logo}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image source={require("../img/icons/sobre.png")}
              style={styles.icons}
              />
            </TouchableOpacity>

            <TouchableOpacity >
              <Image source={require("../img/icons/lupa.png")}
              style={styles.icons}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.row2}>
            <TouchableOpacity >
              <Image source={require("../img/icons/home.png")}
              style={styles.icons}
              />
            </TouchableOpacity>

            <TouchableOpacity >
              <Image source={require("../img/icons/exames.png")}
              style={styles.icons}
              />
            </TouchableOpacity>

            <TouchableOpacity >
              <Image source={require("../img/icons/upload.png")}
              style={styles.icons}
              />
            </TouchableOpacity>

            <TouchableOpacity >
              <Image source={require("../img/icons/list.png")}
              style={styles.icons}
              />
            </TouchableOpacity>
          </View>
        
  </View>
      
  
  )
}


const styles = StyleSheet.create({
  background:{
    backgroundColor: "#E9E9E9",
    height: 115,
    paddingHorizontal :23,
    paddingTop: 25,
    paddingBottom: 5,
    justifyContent:"space-between",
    flexDirection: "column",
  }, 
  logo: {
    height:41,
    width:201,
  },
  icons:{
    width: 25,
    height: 25,
  },
  row1: {
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems: "center",
  },
  row2: {
    flexDirection: "row",
    justifyContent:"space-between",
    marginBottom:5,
  },

})