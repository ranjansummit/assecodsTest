import React from 'react'
import { View, StyleSheet,Text,Image } from 'react-native'
import { Appbar, Title,Button } from 'react-native-paper'

function Header({ titleText }) {
  return (
    <Appbar.Header style={styles.headerContainer}>
      <View style={styles.container}>
        
      <View style={styles.navBar}>
  <View style={styles.leftContainer}>
  <Image style={styles.Icon} source={require('../assets/iconmpwik-removebg-preview.png')}>
</Image>
  </View>
  <View style={styles.rightContainer}>
  <Image style={styles.Icon} source={require('../assets/ebok-removebg-preview.png')}/>
  </View>
</View>
      </View>
    </Appbar.Header>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#FFFFFF',
    
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:5
  },
  navBar: {
     paddingTop:50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
   
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  Icon: {
    height: 120,
    width: 120,
    resizeMode: 'contain',
    backgroundColor: 'white',
  }


})

export default Header
