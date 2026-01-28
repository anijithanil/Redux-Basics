import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const SettingsScreen = () => {
  const totalLikes = useSelector(state=>state.dataReducer.totalLikes)
  return (
    <View  style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#2323'}}>
      <Text>SettingsScreen</Text>
      <Text>Total Likes: {totalLikes}</Text>
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({})