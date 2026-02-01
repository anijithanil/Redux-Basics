import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const SettingsScreen = () => {
  return (
    <View  style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#2323'}}>
      <Text>SettingsScreen</Text>
      <Text>Total Likes: 12</Text>
      <Text>User Role: 1</Text>
     
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({})