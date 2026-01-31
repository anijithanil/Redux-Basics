import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

const HomeScreen = () => {

  const totalLikes = useSelector((state:RootState)=>state.dataReducer.totalLikes)

  return (
    <View  style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#2323'}}>
      <Text>HomeScreen</Text>
      <Text>Total Likes: {totalLikes}</Text>
    </View>  
  )
}

export default HomeScreen

const styles = StyleSheet.create({})