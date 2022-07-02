import React from 'react'
import { View, StyleSheet,Text,Image,TouchableOpacity } from 'react-native'
import { Appbar, Title,Button } from 'react-native-paper'

export function Lub({ titleText }) {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center',marginTop:20}}>
    <View style={{flex: 1, height: 1, backgroundColor: '#BFBFBF',}} />
    <View>
      <Text style={{width: 50, textAlign: 'center'}}>LUB</Text>
    </View>
    <View style={{flex: 1, height: 1, backgroundColor: '#BFBFBF'}} />
  </View>
  )
}
