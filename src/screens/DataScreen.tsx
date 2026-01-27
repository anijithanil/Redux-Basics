import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const DataScreen = () => {
  const totalLikes = useSelector(state=>state.totalLikes)
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#2323'}}>
      <Text>DataScreen</Text>
      <Text>Total Likes: {totalLikes}</Text>
    </View>
  )
}

export default DataScreen

const styles = StyleSheet.create({})