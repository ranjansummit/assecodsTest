import React from 'react'
import { View, StyleSheet,Text,Image,TouchableOpacity } from 'react-native'
import { Appbar, Title,Button } from 'react-native-paper'

function GovernmentLogin({ titleText }) {
  return (
<TouchableOpacity
        style={styles.register}
        
      >
        <Text style={{color:'black',fontSize:14}}>zaloguj się Przez</Text>
        <Image source={require('../assets/login-removebg-preview.png')} resizeMode='contain' style={{flex:.4 }} />
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({


  register:{
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    flexDirection:"row",
    backgroundColor:'rgba(224, 225, 228 ,0.3)'
    
  },

})

export default GovernmentLogin
