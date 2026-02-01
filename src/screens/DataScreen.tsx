import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'

const DataScreen = () => {

  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#2323'}}>
      <Text>DataScreen</Text>
      <Text>Total Likes for :11</Text>
    </View>
  )
}

export default DataScreen

const styles = StyleSheet.create({})